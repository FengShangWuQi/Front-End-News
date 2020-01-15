import * as fse from "fs-extra";
import * as chalk from "chalk";
import * as path from "path";

const formatDate = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

(() => {
  const now = new Date();

  const year = now.getUTCFullYear();
  const momth = formatDate(now.getUTCMonth() + 1);
  const date = formatDate(now.getUTCDate());

  const daily = `${year}/${momth}/${date}`;

  const dailyFile = path.join(__dirname, `${daily}.md`);
  const targetFile = path.join(__dirname, "public", "README.md");
  const currFile = path.join(__dirname, "public", `${daily}.md`);

  fse.copy(dailyFile, targetFile, err => {
    console.log();

    if (err) {
      console.log(
        chalk.bold.inverse.yellow("warning"),
        chalk.bold.dim("today is not a work day, enjoy your short vacation"),
      );
      return;
    }

    fse.copySync(dailyFile, currFile);

    console.log(
      chalk.bold.inverse.green("success"),
      chalk.bold.dim(`deploy - ${daily}`),
    );
  });
})();
