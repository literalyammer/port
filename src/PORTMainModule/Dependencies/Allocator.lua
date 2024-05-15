local module = {}

local function absoluteDifference(a, b)
	return math.abs(a - b)
end

local function checkLegacyValue(elevator, name)
	if (not elevator:FindFirstChild('Legacy')) then return nil end
	if (not elevator.Legacy:FindFirstChild(name)) then return nil end
	return elevator.Legacy[name]
end

function module:findElevator(elevators: {}, callFloor: number, destinationCall: number)
	local CALL_DIRECTION = destinationCall > callFloor and 1 or destinationCall < callFloor and -1 or 0
	local CALL_DIRECTION_STR = destinationCall > callFloor and 'U' or destinationCall < callFloor and 'D' or 'N'
	local availableElevators = {}
	for i, v in pairs(elevators) do
		local floor, destination, moveDirection, queueDirection = checkLegacyValue(v, 'Raw_Floor'), checkLegacyValue(v, 'Destination'), checkLegacyValue(v, 'Move_Value'), checkLegacyValue(v, 'Queue_Direction')
		if ((not floor) or (not destination) or (not moveDirection) or (not queueDirection)) then continue end
		if ((not checkLegacyValue(v, 'Inspection')) or checkLegacyValue(v, 'Inspection').Value) then continue end
		if ((not checkLegacyValue(v, 'Out_Of_Service')) or checkLegacyValue(v, 'Out_Of_Service').Value) then continue end
		if ((not checkLegacyValue(v, 'Independent_Service')) or checkLegacyValue(v, 'Independent_Service').Value) then continue end
		if ((not checkLegacyValue(v, 'Fire_Service')) or checkLegacyValue(v, 'Fire_Service').Value) then continue end
		if ((not checkLegacyValue(v, 'Stop')) or checkLegacyValue(v, 'Stop').Value) then continue end
		if ((not v.Floors:FindFirstChild(`Floor_{callFloor}`)) or (not v.Floors:FindFirstChild(`Floor_{destinationCall}`))) then continue end
		table.insert(availableElevators, v)
	end
	
	local sortedElevators = {}
	for _, elevator in ipairs(availableElevators) do
		if (elevator.Legacy.Queue_Direction.Value == 'N' or ((elevator.Legacy.Queue_Direction.Value == 'U' and elevator.Legacy.Move_Value.Value ~= 1 and elevator.Legacy.Raw_Floor.Value <= callFloor and destinationCall > callFloor) or (elevator.Legacy.Queue_Direction.Value == 'D' and elevator.Legacy.Move_Value.Value ~= -1 and elevator.Legacy.Raw_Floor.Value >= callFloor and destinationCall < callFloor))) then
			table.insert(sortedElevators, elevator)
		end
	end
	
	if (#sortedElevators == 0) then
		table.insert(sortedElevators, availableElevators[1])
	end
	
	table.sort(sortedElevators, function(a, b)
		if (absoluteDifference(a.Legacy.Raw_Floor.Value, callFloor) == absoluteDifference(b.Legacy.Raw_Floor.Value, callFloor)) then
			return a.Name < b.Name
		else
			return absoluteDifference(a.Legacy.Raw_Floor.Value, callFloor) < absoluteDifference(b.Legacy.Raw_Floor.Value, callFloor)
		end
	end)

	return sortedElevators[1]
end

return module