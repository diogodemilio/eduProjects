// Data needed for a later exercise
const flights =
	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const flightInformation = (function () {
	for (const flight of flights.split("+")) {
		const [type, origin, destination, time] = flight.split(";");
		const _type = type.replaceAll("_", " ").trimStart();
		const _origin = origin.slice(0, 3).toUpperCase();
		const _destination = destination.slice(0, 3).toUpperCase();

		if (_type.includes("Delayed"))
			console.log(
				`:EMOJI: ${_type} from ${_origin} to ${_destination} (${time.replace(
					":",
					"h"
				)})`
			);
		else
			console.log(
				`${_type} from ${_origin} to ${_destination} (${time.replace(
					":",
					"h"
				)})`
			);
	}
})();
