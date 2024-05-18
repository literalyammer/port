import { findElevator } from "./Dependencies/Allocator";
export = function (model: Model, settings: ModuleScript, logic: string[]) {
	const branch = Array
	const elevators = model.FindFirstChild("Elevators")
	
	if (!elevators) {print("No Elevators Found! Please add them to the model."); return;}
	if (logic[0] === "FULL") {
		const Panels = model.FindFirstChild("Panels")!
		const Lanterns = model.FindFirstChild("Lanterns")
		if (Panels !== undefined) {
			for (const [i,v] of pairs(Panels.GetChildren()!)) {
				if (v.FindFirstChild("Config") && v.IsA("ModuleScript")) {
					const config = require(v)
				}
			}
		}	
	}
	else if (logic[0] === "LANTERN"){

	}
}


