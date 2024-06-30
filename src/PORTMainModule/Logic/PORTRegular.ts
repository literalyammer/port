const panelID = math.random(0, 1e5);

export function Start(panel: Model, config: ModuleScript) {
	print("required")
	panel.SetAttribute("panelID", panelID);
}
