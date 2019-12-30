import * as fse from "fs-extra";
import * as chalk from "chalk";

const formatDate = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

(() => {
  const year = new Date().getFullYear();
  const momth = formatDate(new Date().getMonth() + 1);
  const date = formatDate(new Date().getDate());

  const data = fse.readFileSync(`${year}/${momth}/${date}.md`, "utf-8");
  fse.outputFileSync("public/README.md", data, "utf8");

  console.log();
  console.log(
    chalk.bold.inverse.green("success"),
    chalk.yellow.bold("migrate"),
  );
})();
