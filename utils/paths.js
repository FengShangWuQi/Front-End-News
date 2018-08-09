import path from "path";
import fs from "fs";

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

export default {
	dailyDir: resolveApp("history"),
};
