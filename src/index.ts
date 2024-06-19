import { CollectionService } from "@rbxts/services";
import Lantern from "./Logic/Lantern";
import { Start } from "./Logic/PORTRegular";
interface Logic {
	BUILD: string;
	VER: {
		PANEL: string;
		FIRMWARE: string;
	};
}

export = (model: Model, settings: ModuleScript, logic: Logic) => {
	const elevators = model.FindFirstChild("Elevators");
	assert(elevators, "No Elevators Found! Please add them to the model.");

	if (logic.BUILD === "FULL") {
		assert(
			model.FindFirstChild("Panels") as Model,
			"dawg there aint no panels",
		);
		const Panels = model.FindFirstChild("Panels") as Model;
		const Lanterns = model.FindFirstChild("Lanterns") as Model;
		if (Panels !== undefined) {
			for (const v of Panels.GetDescendants()) {
				if (v.Name === "Config" && v.IsA("ModuleScript")) {
					const config = v;
					Start(v.Parent as Model, v);
				}
			}
		}
		if (Lanterns) {
			for (const v of Lanterns.GetDescendants()) {
				if (CollectionService.HasTag(v, "Lantern")) {
					const settings = assert(
						v.FindFirstChild("Setting"),
						"aint no settings script!",
					);
					Lantern(v, v.FindFirstChild("Setting")!);
				}
			}
		}
	}
};
