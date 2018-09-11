import fse from "fs-extra";
import Config from "config";

import paths from "./utils/paths";
import { getNextDaily } from "./utils/daily";
import prettyLog from "./utils/prettyLog";

const { params, prefix, owner, name: repoName } = Config.get("repository");
const { branch, folder, file } = params;
const { tag } = Config.get("content");
const { format } = Config.get("cloudinary.image");

const dailyNews = tag
	.map(
		t => `## ${t}

- []()：；
`
	)
	.join("\n");

const dailyTemplate = dailyPath => `
> # ${repoName}

[![cover][img]][link]

[img]: ${prefix}/${owner}/${repoName}/blob/${branch}/${folder}/${dailyPath}/.${format} ""
[link]: 

${dailyNews}
`;

export default async () => {
	const dailyPath = getNextDaily();
	const folderName = `${paths.dailyDir}/${dailyPath}`;

	await fse.outputFile(`${folderName}/${file}`, dailyTemplate(dailyPath));

	prettyLog("cyan", "Happy", dailyPath.replace(/\//g, "-"));
};
