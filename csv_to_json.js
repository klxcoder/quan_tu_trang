const fs = require("fs");

const csvToJson = (csv) => {
  const [header, ...rows] = csv.split("\n").map((line) => line.trim().split(","));
  return rows.map((row) => Object.fromEntries(row.map((value, i) => [header[i], value])));
};

// Read CSV file
const csvData = fs.readFileSync("data.csv", "utf-8");

// Convert and write JSON file
fs.writeFileSync("data.json", JSON.stringify(csvToJson(csvData), null, 4));

console.log("CSV converted to JSON successfully!");
