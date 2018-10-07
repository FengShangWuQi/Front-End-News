import * as fse from "fs-extra";
import * as Config from "config";

import { paths } from "./utils/paths";
import { getNextDaily } from "./utils/daily";
import { prettyLog } from "./utils/prettyLog";

const { params, prefix, owner, name: repoName } = Config.get("repository");
const { branch, folder, file } = params;
const { tag } = Config.get("content");
const { format, public_id: name } = Config.get("cloudinary.image");

const dailyNews = tag
	.map(
		(t: string) => `## ${t}

- []()：；
`
	)
	.join("\n");

const dailyTemplate = (dailyPath: string) => `
> # ${repoName}

[![cover][img]][link]

[img]: ${prefix}/${owner}/${repoName}/blob/${branch}/${folder}/${dailyPath}/${name}.${format} ""
[link]: 

${dailyNews}
`;

(async () => {
	const dailyPath = getNextDaily();
	const folderName = `${paths.dailyDir}/${dailyPath}`;

	await fse.outputFile(`${folderName}/${file}`, dailyTemplate(dailyPath));

	prettyLog("cyan", "Happy", dailyPath.replace(/\//g, "-"));
})();
