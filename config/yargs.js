const { demand } = require('yargs');

const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of TO DO'
}

const completed = {
    demand: true,
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('create', 'Add a TODO List Item', { description })
    .command('list', 'Show the TODO List', {})
    .command('update', 'Update a TODO List Item', { description, completed })
    .command('delete', 'Delete a TODO List Item', { description })
    .help()
    .argv;

module.exports = {
    argv
}