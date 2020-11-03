import { Page } from "puppeteer";
import { differenceInCalendarDays } from "date-fns";
import dotenv, { DotenvParseOutput } from "dotenv";

const envs = dotenv.config().parsed as DotenvParseOutput;

export class Twitter {
  page: Page;
  URL = "https://twitter.com";
  period = 1;
  maxLength = 30;

  constructor(page: Page) {
    this.page = page;
  }

  async login() {
    await this.page.goto(this.URL);

    const [username, password] = envs.twitter.split(",");

    await this.page.waitForSelector("input[name='session[username_or_email]']");
    await this.page.type("input[name='session[username_or_email]']", username);
    await this.page.type("input[name='session[password]']", password);
    await this.page.click("[data-testid='LoginForm_Login_Button']");

    await this.page.waitForSelector("[data-testid='tweet']");
  }

  async getTweets(username: string) {
    await this.page.goto(`${this.URL}/${username}`);
    await this.page.waitForSelector("[data-testid='tweet']");
    await this.page.waitForTimeout(2000);

    const set = new Set();
    let flag = true;

    while (flag) {
      const data = await this.page.evaluate((maxLength) => {
        const arr = Array.from(
          document.querySelectorAll("[data-testid='tweet']")
        );
        const result = arr.map((item) => ({
          dateTime: (item.lastChild?.firstChild?.firstChild?.firstChild
            ?.firstChild?.lastChild?.lastChild as any)?.dateTime as string,
          link: (item.lastChild?.firstChild?.firstChild?.firstChild?.firstChild
            ?.lastChild as any)?.href as string,
          content: (item.lastChild?.lastChild?.textContent as string)
            .slice(0, maxLength)
            .replace(/\s/g, ""),
        }));

        return result;
      }, this.maxLength);

      const finalData = data.filter(
        (item) =>
          differenceInCalendarDays(new Date(), new Date(item.dateTime)) <
          this.period
      );

      data.forEach((item) => set.add(item));

      if (data.length !== finalData.length) {
        flag = false;
      }

      await this.page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
      });
      await this.page.waitForTimeout(2000);
    }

    const arr = Array.from(set);
    const tweets = arr.map(({ link, content }: any) => {
      return {
        link,
        content:
          content.length >= this.maxLength - 5
            ? content.padEnd(content.length + 3, "...")
            : content,
      };
    });

    return tweets;
  }
}
