import puppeteer from "puppeteer";
import { writeFile } from "fs-extra";

import { Twitter } from "./Twitter";

const twitterFollowing = ["ruanyf", "infoqchina"];

(async () => {
  let content = [] as string[];

  const withSection = (title: string, list: string) => {
    content.push([`### ${title}`, list].join("\n\n"));
  };

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();

  const twitter = new Twitter(page);
  await twitter.login();

  for (let username of twitterFollowing) {
    const tweets = await twitter.getTweets(username);

    if (tweets.length !== 0) {
      const list = tweets
        .map(({ content, link }) => `- [${content}](${link})`)
        .join("\n");
      withSection(username, list);
    }
  }

  await browser.close();

  const name = require("./package.json").name;
  const title = `> # ${name}`;

  await writeFile("./README.md", [title, ...content].join("\n\n"));
})();
