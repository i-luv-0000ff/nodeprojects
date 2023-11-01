const fs = require('fs');

const filename = 'networklog.txt';

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
    var jsond = [];
  data.split('\nId').forEach((line) => {
    jsond.push(processData(line));
  });
  // Process the data and collect it in JSON format
//   const jsonData = processData(data);

  // Do something with the jsonData
  console.log(jsond);
});

function processData(data) {
  // Parse the data and convert it into JSON format
  // Implement your logic here to extract the required information from the data
  // and convert it into JSON format

  // For example, if each line of the file contains a key-value pair separated by a colon
  const lines = data.split('\n');
  const jsonData = {};
    lines.forEach((line) => {
        const [key, value] = line.split(':');
        if (!value)
        return;
        if (key === "")
            jsonData["Id"] = value.trim();
        else if (key === "Date")
            jsonData[key.trim()] = line.substring(5, line.length).trim();
        else
            jsonData[key.trim()] = value.trim();
    });
//   console.log(jsonData);
  return jsonData;
}