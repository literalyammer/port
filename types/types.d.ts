export type PORTModel = Folder & {
	Panels: Folder;
	Lanterns: Folder;
	Script: Script & {
		ModuleScript: ModuleScript;
	};
	Elevators: Folder;
};

export type PORTMainModule = ModuleScript & {
	Dependencies: Folder & {
		Allocator: ModuleScript;
	};
	Logic: Folder & {
		Lantern: ModuleScript;
		PORTWide: ModuleScript;
		PORTRegular: ModuleScript;
	};
	PORTMainModule: Folder;
};

export type Lantern = Model & {
	Settings: ModuleScript;
	Part: Part;
	LED: Model;
};

export type CortexModel = Model & {
	Car: Model & {
		Display: PORTDisplay;
	};
	Legacy: Folder & {
		Independent_Service: BoolValue;
		Current_Speed: NumberValue;
		Phase_2: BoolValue;
		Inspection: BoolValue;
		Velocity: NumberValue;
		Move_Direction: StringValue;
		Arrow_Direction: StringValue;
		Queue_Direction: StringValue;
		Destination: NumberValue;
		Door_Speed: NumberValue;
		Move_Value: NumberValue;
		Front_Door_Hold: BoolValue;
		Floor: NumberValue;
		Fire_Service: BoolValue;
		Pre_Direction: StringValue;
		Nudge: BoolValue;
		Stop: BoolValue;
		Queue: StringValue;
		Leveling: BoolValue;
		Arrive_Floor: NumberValue;
		Remote_Call: NumberValue;
		Raw_Floor: NumberValue;
		Out_Of_Service: BoolValue;
		Phase_1: BoolValue;
		Front_Door_State: StringValue;
		Front_Door_Nudging: BoolValue;
	};
	Cortex_API: BindableEvent;
};

export type PORTDisplay = Part & {
	Script: Script & {
		Config: ModuleScript;
	};
	SurfaceGui: SurfaceGui & {
		Frame: Frame & {
			Placeholder: Frame & {
				Floor: TextLabel & {
					UIScale: UIScale;
				};
				CFloor: TextLabel & {
					UIScale: UIScale;
				};
			};
		};
	};
};
