import chalk from "chalk";

export default (style, tag, text) => {
	console.log();
	console.log(chalk[style].bold.inverse(tag), chalk.yellow.bold(text));
	console.log();
};
