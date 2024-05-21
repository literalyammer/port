import { findElevator } from "./Dependencies/Allocator";
export = function (model: Model, settings: ModuleScript, logic: string[]) {
	const elevators = model.FindFirstChild("Elevators");

	if (!elevators) {
		print("No Elevators Found! Please add them to the model.");
		return;
	}
	if (logic[0] === "FULL") {
		const Panels = model.FindFirstChild("Panels")!;
		const Lanterns = model.FindFirstChild("Lanterns");
		if (Panels !== undefined) {
			for (const v of Panels.GetChildren()!) {
				if (v.FindFirstChild("Config") && v.IsA("ModuleScript")) {
					const config = v;
					const [res, ran] = pcall(require, "./Logic/PORTRegular.ts");
				}
			}
		}
	} else if (logic[0] === "LANTERN") {
		const Lanterns = model.FindFirstChild("Lanterns")!;
	}
};
