const http = require('http');
const fs = require('fs');
const { jsonToTableHtmlString } = require('json-table-converter')
const filename = 'networklog.txt';

function processData(data) {
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
  return jsonData;
}


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
          var jsond = [];
        data.split('\nId').forEach((line) => {
          jsond.push(processData(line));
        });
        const html = jsonToTableHtmlString(jsond);
        // console.log(html);
        return res.end(html);
      });
}).listen(3001);