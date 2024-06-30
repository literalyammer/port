import { CollectionService } from "@rbxts/services";
import LStart from "./Logic/LStart";
import { Start } from "./Logic/PORTRegular";
import type { Lantern, PORTModel } from "../../types/types";
interface Logic {
	BUILD: string;
	VER: {
		PANEL: string;
		FIRMWARE: string;
	};
}

export = (model: PORTModel, settings: ModuleScript, logic: Logic) => {
	const elevators = model.FindFirstChild("Elevators");
	assert(elevators, "No Elevators Found Please add them to the model.");

	if (logic.BUILD === "FULL") {
		const Panels = model.Panels;
		const Lanterns = model.Lanterns;
		for (const v of Panels.GetDescendants()) {
			if (v.Name === "Config" && v.IsA("ModuleScript")) {
				const panel = v.Parent as Model;
				Start(panel, v);
			}
		}
		if (Lanterns) {
			for (const v of Lanterns.GetDescendants()) {
				if (CollectionService.HasTag(v, "Lantern")) {
					const L = v as Lantern;
					LStart(L, L.Settings);
				}
			}
		}
	}
};
