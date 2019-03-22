const path = require('path');
const fs = require('fs');

const files = fs.readdirSync(path.join(__dirname, `samples`));

files.forEach(f => {
    const srcFile = path.join(__dirname, `samples`, f)
    const status = fs.statSync(srcFile);

    if (status.isFile()) {

        const content = fs.readFileSync(srcFile, 'utf8');
        try {
            const type = JSON.parse(content)['resourceType'];
            if (!type) {
                console.log(`don't know how to move ${srcFile}`);
                return;
            }

            const destDir = path.join(__dirname, `samples`, type);
            if (!fs.existsSync(destDir)) {
                fs.mkdirSync(destDir);
            }

            fs.renameSync(srcFile, path.join(destDir, f));
        } catch (ex) {
            console.log(ex);
        }
    }
});