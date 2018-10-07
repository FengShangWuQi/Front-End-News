import chalk, { Chalk, ColorSupport } from "chalk";

export interface IChalk extends Chalk {
	[key: string]: any;
	supportsColor: ColorSupport;
}

export const prettyLog = (style: string, tag: string, text: string) => {
	console.log();
	console.log(
		(chalk as IChalk)[style].bold.inverse(tag),
		chalk.yellow.bold(text)
	);
	console.log();
};
