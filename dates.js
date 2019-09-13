'use strict';

function formatDate(scenario) {
	const currentDateTime = new Date();
	const currentMonth = currentDateTime.getMonth() < 10 ? "0" + (currentDateTime.getMonth() + 1) : (currentDateTime.getMonth() + 1).toString(); 
    const currentDay = currentDateTime.getDate() < 10 ? "0" + currentDateTime.getDate() : currentDateTime.getDate().toString();
	const currentYear = currentDateTime.getFullYear().toString();
	
	switch (scenario) {
		case 1:
			return currentMonth + "-" + currentDay + "-" + currentYear;  
		case 2:
			return currentDay + "-" + currentMonth + "-" + currentYear;
		case 3:
			return currentYear + "-" + currentMonth + "-" + currentDay;
		case 4:
			return currentYear + currentMonth + currentDay;			
	}
}

console.log(formatDate(1));
console.log(formatDate(2));
console.log(formatDate(3));
console.log(formatDate(4));

// Date constructor - new Date(YYYY, MM - 1, DD, HH, mm, ss);
const customDate = new Date(2019, 08, 08, 19, 12, 00);
console.log(customDate);

// Gives international ISO-8601 date time string 
// Format 1 - 2019-09-08T12:43:36+00:00
// Format 2 - 2019-09-08T12:43:36Z (YYYY-MM-DDTHH:mm:ssZ)
const iso8601DateTimeString = new Date().toISOString();
