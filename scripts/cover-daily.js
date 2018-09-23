import fse from "fs-extra";
import cloudinary from "cloudinary";
import request from "request";
import Config from "config";

import paths from "./utils/paths";
import { getCurrDaily } from "./utils/daily";
import prettyLog from "./utils/prettyLog";

const { config, image } = Config.get("cloudinary");
const { cloud_name, api_key, api_secret } = config;
const { public_id: name, gravity, quality, width, crop, format, tags } = image;

export default () => {
	cloudinary.v2.config({
		cloud_name,
		api_key,
		api_secret,
	});

	cloudinary.v2.uploader.upload(
		paths.coverPath,
		{
			public_id: name,
			gravity,
			quality,
			width,
			crop,
			format,
			tags,
		},
		(err, res) => {
			const { secure_url } = res;

			const dailyPath = getCurrDaily();
			const folderName = paths.folderPath(dailyPath);
			const finalPath = `${folderName}/${name}.${format}`;

			request(secure_url).pipe(fse.createWriteStream(finalPath));

			prettyLog("green", "Add cover success", `${dailyPath}/${name}.${format}`);
		}
	);
};
