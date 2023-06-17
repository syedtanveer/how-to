const readline = require("readline");
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter component name: ", (folderName) => {
  // Create the folder
  fs.mkdirSync(folderName);

  // Generate index.html
  const componentName = folderName
    ?.split("-")
    ?.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    ?.join("");

  rl.question("Do you need a JS file Y/N: ", (choice) => {
    const hasJS = choice === "Y" || choice === "y";
    const htmlContent = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css">${
          hasJS ? '\n\t\t\t\t<script src="script.js" defer></script>' : ""
        }
        <title>${componentName || folderName}</title>
      </head>
      <body>
      
      </body>
    </html>
    `;

    const cssContent = `
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    
    * {
      margin: 0;
    }
    
    html,
    body {
      height: 100%;
      font-family: Arial, sans-serif;
    }
    `;

    if (hasJS) {
      fs.writeFileSync(path.join(folderName, "script.js"), "");
    }

    fs.writeFileSync(path.join(folderName, "index.html"), htmlContent);

    fs.writeFileSync(path.join(folderName, "style.css"), cssContent);
    console.log(`Component '${folderName}' created successfully.`);
    rl.close();
  });
});
