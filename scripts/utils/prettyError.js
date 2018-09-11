import PrettyError from "pretty-error";

const pe = new PrettyError();

pe.skipNodeFiles();
pe.skipPackage("babel-register");

pe.appendStyle({
	"pretty-error > header > message": {
		color: "bright-white",
		background: "yellow",
		padding: "0 1",
	},
	"pretty-error > trace > item > footer > addr": {
		display: "none",
	},
});

export default pe;
