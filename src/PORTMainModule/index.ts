const module: any = {};
import { findElevator } from "./Dependencies/Allocator";
export function load(model: Model, settings: Script, logic: string[]) {
	const elevators = model.WaitForChild("Elevators", 60)
	if (logic[0] === "test") {
		print('hi')
		let elevator = findElevator(elevators?.GetChildren(), 1,2)
		print(elevator.Name)
	}
}

