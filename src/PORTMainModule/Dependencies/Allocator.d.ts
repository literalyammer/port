import type { PORTModel } from "../../../types/types";

export function findElevator(
	origin: PORTModel,
	elevators: PORTModel["Elevators"][],
	callFloor: number,
	destinationCall: number,
): Model;
