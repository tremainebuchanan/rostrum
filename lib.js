const fs = require('fs')
const assets = require('./config.json')
const { spawn } = require('child_process')
module.exports = {
    startProject: () => {
        //const expressProcess = spawn('')
    },
    createFiles: () => {
        const files = assets.files
        const cwd = process.cwd()
        for (let i = 0; i < files.length; i++) {
            const fileName = cwd + '/' + files[i]
            fs.writeFileSync(fileName, '', 'utf8', (err) => {
                if (err) console.error('Unable to create file')
            })
        }
    },
    createFolders: () => {
        const cwd = process.cwd()
        const folders = assets.folders
        for (let i = 0; i < folders.length; i++) {
            let folder = cwd + '/' + folders[i]
            if (fs.existsSync(folder)) {
                console.log(`${folders[i]} folder already exists`)
                continue
            }
            fs.mkdirSync(folder)
        }
    }
}