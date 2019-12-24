import { pe } from "./utils/prettyError";
import { ask } from "./utils/ask";
import { run } from "./utils/run";

export enum IDailyKey {
  daily = "daily",
  migrate = "migrate",
}

export const dailyDict = {
  [IDailyKey.daily]: "new-daily",
  [IDailyKey.migrate]: "migrate-daily",
};

export const dailyChoices = [IDailyKey.daily, IDailyKey.migrate];

pe.start();

(async () => {
  const answer = (await ask(
    process.argv[2] || "",
    "Script",
    dailyChoices,
  )) as IDailyKey;

  run("daily", { DAILY_SCRIPT: dailyDict[answer] });
})();
