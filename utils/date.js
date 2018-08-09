export const getCurrMonthDays = (year, month) => {
	return new Date(year, month, 0).getDate();
};

export const formatDate = num => {
	return num < 10 ? `0${num}` : num;
};
