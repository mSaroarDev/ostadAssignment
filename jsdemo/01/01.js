// 1.Date Object:

// a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.

// b. Implement the function to display the day of the week for the current date.

function displayDay(){
    let days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday"];

    let date = new Date();
    let day = date.getDay() + 1;

    let today = days[day];
    console.log(`Today is ${today}`);
}

displayDay()