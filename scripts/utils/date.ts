export const getCurrMonthDays = (year: number, month: number) => {
	return new Date(year, month, 0).getDate();
};

export const formatDate = (num: number) => {
	return num < 10 ? `0${num}` : num;
};
