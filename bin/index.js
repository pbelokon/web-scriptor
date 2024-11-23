#!/usr/bin/env node 
import * as fs from "fs"; 

import color from "../tools/color.js" 
import projectPage from "../tools/parser.js"
 
const reset = "%s\x1b[0m"; 
console.log(color.green + reset, "##########################################"); 

fs.readdir("./build_files", (err, files) => { 
  if (err) { 
    console.error("Error reading directory: " + err); 
  }
  
  files.forEach((file) => {
    processFile(file)
  });
});

function processFile(file) { 
  fs.readFile(`./build_files/${file}`, "utf-8", (err, data) => { 
    if (err) {
      console.error("Error reading file: ", err); 
    }

    const lines = data.split("\n").map(line => line.trim()).filter(line => line !== ""); 

    const result = {
      title: lines[0], 
      subtitle: lines[1], 
      toolbox: lines[2], 
      paragraphs: lines.slice(3)
    }

    projectPage(result); 
    console.log(color.green + reset, "##########################################"); 
  }); 
}

