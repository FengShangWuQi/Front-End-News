import path from "path";
import fs from "fs";
import Config from "config";

const { folder, file } = Config.get("params");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

export default {
	filePath: resolveApp(file),
	dailyDir: resolveApp(folder),
};
