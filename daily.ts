import * as fse from "fs-extra";
import * as chalk from "chalk";

const formatDate = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

(() => {
  const year = new Date().getFullYear();
  const momth = formatDate(new Date().getMonth() + 1);
  const date = formatDate(new Date().getDate());

  const dailyFile = `./${year}/${momth}/${date}.md`;
  const targetFile = "./public/README.md";

  fse.copy(dailyFile, targetFile, err => {
    console.log();

    if (err) {
      console.log(
        chalk.bold.inverse.yellow("warning"),
        chalk.bold.dim("today is not a work day, enjoy your short vacation"),
      );
      return;
    }

    console.log(chalk.bold.inverse.green("success"), chalk.bold.dim("deploy"));
  });
})();
