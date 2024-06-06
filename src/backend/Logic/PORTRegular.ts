const panelID = math.random(0, 1e5);

export function Start(panel: Model, config: ModuleScript) {
	panel.SetAttribute("panelID", panelID);
}
