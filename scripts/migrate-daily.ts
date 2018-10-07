import * as fse from "fs-extra";
import * as Config from "config";

import { paths } from "./utils/paths";
import { getCurrDaily } from "./utils/daily";
import { prettyLog } from "./utils/prettyLog";

const {
	prefix,
	owner,
	extensionName,
	params: { file },
} = Config.get("repository");

const migrateData = (data: string) => `
安装 [${extensionName}](${prefix}/${owner}/${extensionName}) 扩展，查看每日资讯。

${data.replace(/##/g, "###")}
`;

( () => {
	const dailyPath = getCurrDaily();
	const folderName = paths.folderPath(dailyPath);

	const data = fse.readFileSync(`${folderName}/${file}`, "utf-8");
	fse.outputFileSync(paths.filePath, migrateData(data), "utf8");

	prettyLog("green", "Migrating success", `${dailyPath}/${file}`);
})()