import path from "path";
import fse from "fs-extra";
import Config from "config";

const { folder, file } = Config.get("repository.params");
const { coverPath } = Config.get("variable");

const appDirectory = fse.realpathSync(process.cwd());
export const resolveApp = relativePath =>
	path.resolve(appDirectory, relativePath);

export default {
	filePath: resolveApp(file),
	dailyDir: resolveApp(folder),
	coverPath: resolveApp(coverPath),
	folderPath: dailyPath => `${resolveApp(folder)}/${dailyPath}`,
};
