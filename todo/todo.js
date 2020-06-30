const fs = require('fs');

let listTODO = [];
let newListToDo = [];

const createToDo = (description) => {
    loadDB();

    let todo = {
        description,
        completed: false
    }

    listTODO.push(todo);

    saveDB();

    return listTODO;
}

const updateToDo = (description, completed = true) => {
    loadDB();

    let index = listTODO.findIndex(todo => todo.description = description);

    if (index >= 0) {
        listTODO[index].completed = completed;
    } else {
        throw new Error('Task not found');
    }

    saveDB();

    return { description: description, completed: completed }
}

const deleteToDo = (description) => {
    loadDB();

    newListToDo = listTODO.filter(todo => todo.description !== description);

    if (listTODO.length == newListToDo.length) {
        throw new Error('Task not found');
    } else {
        listTODO = newListToDo;
        saveDB();
    }

    return { description: description }
}

const saveDB = () => {
    let data = JSON.stringify(listTODO);

    fs.writeFile('./dataBase/data.json', data, err => { if (err) { throw new Error('Coulnt create file') } });
}

const loadDB = () => {
    try {
        listTODO = require('../dataBase/data.json');

    } catch (err) {
        listTODO = [];
    }
}

const getToDoList = () => {
    loadDB();
    return listTODO
}

module.exports = {
    createToDo,
    updateToDo,
    getToDoList,
    deleteToDo
}