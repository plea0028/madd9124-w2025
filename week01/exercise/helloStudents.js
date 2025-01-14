const students = require('./students.json');
const fs = require('fs');

fs.readFile('students.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file: ' + err);
        return;
    }
});

const email = students.map(students => {
    const firstName = students.firstName;
    const lastName = students.lastName;
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@algonquincollege.com`;
});

startsWithD = students.filter(students => students.lastName.startsWith('D'));

console.log("Hello " + students[0].firstName + " " + students[0].lastName + "!");
console.log("Hello " + students[1].firstName + " " + students[0].lastName + "!");
console.log("Hello " + students[2].firstName + " " + students[0].lastName + "!");
console.log("Hello " + students[3].firstName + " " + students[0].lastName + "!");

console.log("\nCount of the last names starting with the letter D is: " + startsWithD.length + "\n");

console.log(email);