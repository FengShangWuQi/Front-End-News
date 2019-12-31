import * as fse from "fs-extra";
import * as chalk from "chalk";

const formatDate = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

(() => {
  const year = new Date().getFullYear();
  const momth = formatDate(new Date().getMonth() + 1);
  const date = formatDate(new Date().getDate());

  const daily = `${year}/${momth}/${date}`;
  const dailyFile = `./${daily}.md`;
  const targetFolder = "./public";

  fse.copy(dailyFile, `${targetFolder}/README.md`, err => {
    console.log();

    if (err) {
      console.log(
        chalk.bold.inverse.yellow("warning"),
        chalk.bold.dim("today is not a work day, enjoy your short vacation"),
      );
      return;
    }

    fse.moveSync(dailyFile, `${targetFolder}/${daily}.md`);

    console.log(chalk.bold.inverse.green("success"), chalk.bold.dim("deploy"));
  });
})();
