export = function (state: Instance, settings: Instance) {
	const This = script.Parent!;
	const Bay = This!.FindFirstAncestor("Lanterns")!.Parent;
	const API: ModuleScript = Bay!.WaitForChild("API", 60);
};
