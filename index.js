// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(drivers, name) {
  return drivers.filter(
    (drivers) => drivers.toLowerCase() === name.toLowerCase()
  );
}

console.log(findMatching(drivers, "Sammy"));

function fuzzyMatch(drivers, match) {
  return drivers.filter((drivers) => drivers.startsWith(match));
}
console.log(fuzzyMatch(drivers, "A"));

const driver = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];
function matchName(driver, name) {
  return driver.filter(
    (driver) => driver.name.toLowerCase() === name.toLowerCase()
  );
}
console.log(matchName(driver, "bobby"));
