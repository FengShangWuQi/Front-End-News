import { join } from "path";
import { copy } from "fs-extra";
import { format } from "date-fns";
import * as logger from "@fengshangwuqi/logger";

(async () => {
  const daily = format(new Date(), "yyyy/MM/dd");

  const dailyFile = join(__dirname, `${daily}.md`);
  const targetFile = join(__dirname, "public", "README.md");
  const currFile = join(__dirname, "public", `${daily}.md`);

  try {
    await copy(dailyFile, targetFile);
    await copy(dailyFile, currFile);

    logger.success(`deploy - ${daily}`);
  } catch (err) {
    logger.warn("today has no news.");
  }
})();
