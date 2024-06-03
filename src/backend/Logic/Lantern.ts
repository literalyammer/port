export = (state: Instance, settings: Instance) => {
	const This = script.Parent!;
	const Bay = This.FindFirstAncestor("Lanterns")?.Parent;
	const API = Bay?.WaitForChild("API", 60) as BindableEvent;
};
