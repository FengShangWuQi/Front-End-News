import * as fse from "fs-extra";
import * as Config from "config";

import { paths } from "./paths";
import { formatDate, getCurrMonthDays } from "./date";

const { currDaily } = Config.get("variable");

export const getCurrDaily = () => {
	const date = new Date();
	const year = currDaily.year || date.getFullYear();
	const month = currDaily.month || date.getMonth() + 1;
	const day = currDaily.day || date.getDate();

	return `${year}/${formatDate(month)}/${formatDate(day)}`;
};

export const getLTSDaily = () => {
	const ltsYear = fse.readdirSync(paths.dailyDir).pop();
	const ltsMonth = fse.readdirSync(`${paths.dailyDir}/${ltsYear}`).pop();
	const ltsDay = fse
		.readdirSync(`${paths.dailyDir}/${ltsYear}/${ltsMonth}`)
		.pop();

	return {
		year: parseInt(ltsYear as string),
		month: parseInt(ltsMonth as string),
		day: parseInt(ltsDay as string),
	};
};

export const getNextDaily = () => {
	const { year, month, day } = getLTSDaily();
	const currMonthDays = getCurrMonthDays(year, month);

	if (currMonthDays > day) {
		return `${year}/${formatDate(month)}/${formatDate(day + 1)}`;
	} else if (month < 12) {
		return `${year}/${formatDate(month + 1)}/01`;
	}
	return `${year + 1}/01/01`;
};
