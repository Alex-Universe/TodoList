const argv = require('./config/yargs.js').argv;
const colors = require('colors');
const todo = require('./todo/todo.js')

let command = argv._[0];
let task;

switch (command) {
    case 'create':
        console.log('========TODO Created========'.blue)
        task = todo.createToDo(argv.description);
        console.log(task);
        break;

    case 'update':
        console.log('========TODO Updated========'.green)
        console.log(colors.green(todo.updateToDo(argv.description, argv.completed)));
        break;

    case 'list':
        console.log('========TODO========'.yellow)
        console.log(colors.yellow(todo.getToDoList()));
        break;

    case 'delete':
        console.log('========TODO Deleted========'.red);
        console.log(colors.red(todo.deleteToDo(argv.description)));
        break;

    default:
        console.log(colors.red('========Error Invalid Action========'))
        break;
}