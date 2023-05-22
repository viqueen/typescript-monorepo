#! /usr/bin/env node

const fs = require('fs');
const path = require('path');

const { listFiles } = require('fs-directory');

const eslintPluginPath = path.resolve(
    process.cwd(),
    'dist',
    'modules',
    '_build',
    'eslint-plugin'
);
const targetPath = path.resolve(
    process.cwd(),
    'node_modules',
    '@monorepo-build',
    'eslint-plugin'
);

listFiles(eslintPluginPath, {
    fileFilter: (file) => file.name.endsWith('.js'),
    directoryFilter: () => true,
}).map((file) => {
    const dest = file.replaceAll(eslintPluginPath, targetPath);
    fs.copyFileSync(file, dest);
});
