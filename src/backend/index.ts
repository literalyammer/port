import { CollectionService } from "@rbxts/services";
import Lantern from "./Logic/Lantern";
import PORTRegular from "./Logic/PORTRegular";
export = (model: Model, settings: ModuleScript, logic: string[]) => {
	const elevators = model.FindFirstChild("Elevators");

	if (!elevators) {
		print("No Elevators Found! Please add them to the model.");
		return;
	}
	if (logic[0] === "FULL") {
		assert(model.FindFirstChild("Panels") as Model, "dawg there aint no panels")
		const Panels = model.FindFirstChild("Panels") as Model;
		const Lanterns = model.FindFirstChild("Lanterns") as Model;
		if (Panels !== undefined) {
			for (const v of Panels.GetDescendants()) {
				if (v.Name === "Config" && v.IsA("ModuleScript")) {
					const config = v;
					PORTRegular(5, Panels, v);
				}
			}
		}
		if (Lanterns) {
			for (const v of Lanterns.GetDescendants()) {
				if (CollectionService.HasTag(v, "Lantern")) {
					Lantern(v, v.FindFirstChild("Setting")!);
				}
			}
		}
	}
};
