import fs from "fs";
import Config from "config";
import paths from "../utils/paths";
import chalk from "chalk";
import { formatDate } from "../utils/date";

const { prefix, owner, extensionRepo } = Config.get("url");
const { file } = Config.get("params");

const getCurrDaily = () => {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = "1" || date.getDate();

	return { year, month, day };
};

const migrateDaily = () => {
	const { year, month, day } = getCurrDaily();

	const dailyPath = `${year}/${formatDate(month)}/${formatDate(day)}`;
	const folderName = `${paths.dailyDir}/${dailyPath}`;

	const data = fs.readFileSync(`${folderName}/${file}`, "utf-8");
	const migrateData = `
安装 [${extensionRepo}](${prefix}/${owner}/${extensionRepo}) 扩展，查看每日资讯。

${data}
`;

	fs.writeFileSync(paths.filePath, migrateData, "utf8");

	console.log();
	console.log(
		chalk.green.bold.inverse("Migrating success"),
		chalk.yellow.bold(`${dailyPath}/${file}`)
	);
	console.log();
};

migrateDaily();
