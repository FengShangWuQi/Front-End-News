import * as path from "path";
import * as fse from "fs-extra";
import * as Config from "config";

const { folder, file } = Config.get("repository.params");
const { coverPath } = Config.get("variable");

const appDirectory = fse.realpathSync(process.cwd());
export const resolveApp = (relativePath: string) =>
	path.resolve(appDirectory, relativePath);

export const paths = {
	filePath: resolveApp(file),
	dailyDir: resolveApp(folder),
	coverPath: resolveApp(coverPath),
	folderPath: (dailyPath: string) => `${resolveApp(folder)}/${dailyPath}`,
};
