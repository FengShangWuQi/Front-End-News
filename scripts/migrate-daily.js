import fse from "fs-extra";
import Config from "config";

import paths from "./utils/paths";
import { getCurrDaily } from "./utils/daily";
import prettyLog from "./utils/prettyLog";

const {
	prefix,
	owner,
	extensionName,
	params: { file },
} = Config.get("repository");

const migrateData = data => `
安装 [${extensionName}](${prefix}/${owner}/${extensionName}) 扩展，查看每日资讯。

${data.replace(/##/g, "###")}
`;

export default () => {
	const dailyPath = getCurrDaily();
	const folderName = paths.folderPath(dailyPath);

	const data = fse.readFileSync(`${folderName}/${file}`, "utf-8");
	fse.outputFileSync(paths.filePath, migrateData(data), "utf8");

	prettyLog("green", "Migrating success", `${dailyPath}/${file}`);
};
