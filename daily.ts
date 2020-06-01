import path from "path";
import fse from "fs-extra";
import chalk from "chalk";
import { format } from "date-fns";

(() => {
  const daily = format(new Date(), "yyyy/MM/dd");

  const dailyFile = path.join(__dirname, `${daily}.md`);
  const targetFile = path.join(__dirname, "public", "README.md");
  const currFile = path.join(__dirname, "public", `${daily}.md`);

  fse.copy(dailyFile, targetFile, (err) => {
    console.log();

    if (err) {
      console.log(
        chalk.bold.inverse.yellow("warning"),
        chalk.bold.dim("sorry, today has no news.")
      );
      return;
    }

    fse.copySync(dailyFile, currFile);

    console.log(
      chalk.bold.inverse.green("success"),
      chalk.bold.dim(`deploy - ${daily}`)
    );
  });
})();
