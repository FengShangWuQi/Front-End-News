import inquirer from "inquirer";
import Config from "config";

import pe from "./utils/prettyError";
import daily from "./new-daily";
import migrate from "./migrate-daily";
import cover from "./cover-daily";

const prompt = Config.get("prompt");

pe.start();

inquirer
	.prompt(prompt)
	.then(answers => {
		switch (answers.scripts) {
			case "daily":
				daily();
				break;
			case "cover":
				cover();
				break;
			case "migrate":
				migrate();
				break;
		}
	})
	.catch(err => {
		process.exit(1);
	});
