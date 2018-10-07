import * as fse from "fs-extra";
import * as cloudinary from "cloudinary";
import * as request from "request";
import * as Config from "config";

import { paths } from "./utils/paths";
import { getCurrDaily } from "./utils/daily";
import { prettyLog } from "./utils/prettyLog";

const { config, image } = Config.get("cloudinary");
const { cloud_name, api_key, api_secret } = config;
const { public_id: name, gravity, quality, width, crop, format, tags } = image;

export interface IImgUploadRes  {
	public_id: string;
	version: number;
	signature: string;
	width: number;
	height: string;
	format: string;
	resource_type: string;
	created_at: string;
	tags: string[];
	bytes: number;
	type: string;
	etag: string;
	placeholder: boolean;
	url: string;
	secure_url: string;
	overwritten: string;
	original_filename: string;
	original_extension: string;
}

(() => {
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
		(err: any, res: IImgUploadRes) => {
			const { secure_url } = res;

			const dailyPath = getCurrDaily();
			const folderName = paths.folderPath(dailyPath);
			const finalPath = `${folderName}/${name}.${format}`;

			request(secure_url).pipe(fse.createWriteStream(finalPath));

			prettyLog("green", "Add cover success", `${dailyPath}/${name}.${format}`);
		}
	);
})();
