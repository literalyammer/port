type PORTLoader = Folder & {
	Panels: Folder & {
		["1"]: Model & {
			Setting: ModuleScript;
		};
	};
	Lanterns: Folder;
	Script: Script & {
		ModuleScript: ModuleScript;
	};
	Elevators: Folder;
}
