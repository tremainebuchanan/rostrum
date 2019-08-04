#!/usr/bin/env node

const {createFiles, createFolders } = require('./lib')

const app = {
    
    init: () => { 

        createFiles()
        createFolders()
    }  
}

app.init()

module.exports = app