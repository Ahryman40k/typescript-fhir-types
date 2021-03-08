const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires,no-undef
const fs = require('fs'); // eslint-disable-line @typescript-eslint/no-var-requires,no-undef

const files = fs.readdirSync(path.join(__dirname, `samples`)); // eslint-disable-line no-undef

files.forEach(f => {
  const srcFile = path.join(__dirname, `samples`, f); // eslint-disable-line no-undef
  const status = fs.statSync(srcFile);

  if (status.isFile()) {
    const content = fs.readFileSync(srcFile, 'utf8');
    try {
      const type = JSON.parse(content)['resourceType'];
      if (!type) {
        console.log(`don't know how to move ${srcFile}`); // eslint-disable-line no-undef
        return;
      }

      const destDir = path.join(__dirname, `samples`, type); // eslint-disable-line no-undef
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir);
      }

      fs.renameSync(srcFile, path.join(destDir, f));
    } catch (ex) {
      console.log(ex); // eslint-disable-line no-undef
    }
  }
});
