import fs from "fs";
import chalk from "chalk";
import paths from "../utils/paths";
import { getCurrMonthDays, formatDate } from "../utils/date";

const getLTSDaily = () => {
	const ltsYear = fs.readdirSync(paths.dailyDir).pop();
	const ltsMonth = fs.readdirSync(`${paths.dailyDir}/${ltsYear}`).pop();
	const ltsDay = fs
		.readdirSync(`${paths.dailyDir}/${ltsYear}/${ltsMonth}`)
		.pop();

	return { year: ltsYear - 0, month: ltsMonth - 0, day: ltsDay - 0 };
};

const getNextDaily = () => {
	const { year, month, day } = getLTSDaily();
	const currMonthDays = getCurrMonthDays(year, month);

	if (currMonthDays > day) {
		return `${year}/${formatDate(month)}/${formatDate(day + 1)}`;
	} else if (month < 12) {
		return `${year}/${formatDate(month + 1)}/01`;
	}
	return `${year + 1}/01/01`;
};

const dailyTemplate = dailyPath => `

> # Daily-Front-End-News

[![cover][img]][link]

[img]: https://github.com/fengshangwuqi/Daily-Front-End-News/blob/master/history/${dailyPath}/.jpg ""
[link]: 

## 前端

- []()：；

## 后端

- []()：；

## 开源项目

- []()：；

## 新闻

- []()：；
`;

const newDaily = () => {
	const dailyPath = getNextDaily();
	const folderName = `${paths.dailyDir}/${dailyPath}`;

	fs.mkdirSync(folderName);
	fs.writeFileSync(`${folderName}/README.md`, dailyTemplate(dailyPath));

	console.log();
	console.log(
		chalk.cyan.bold.inverse("Happy"),
		chalk.yellow.bold(dailyPath.replace(/\//g, "-"))
	);
	console.log();
};

newDaily();
