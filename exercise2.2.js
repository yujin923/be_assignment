const fs = require('fs').promises;
const path = require('path');

const findJSFiles = async (dir) => {
  try {
    const files = await fs.readdir(dir, { withFileTypes: true });

    for (const file of files) {
      const fullPath = path.join(dir, file.name);

      if (file.isDirectory()) {
        await findJSFiles(fullPath);
      } else if (path.extname(file.name) === '.js') {
        console.log(fullPath);
      }
    }
  } catch (err) {
    console.error(`Error while reading ${dir}:`, err.message);
  }
};

findJSFiles('test');
