const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    //debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })    
        saveNotes(notes)
        console.log(chalk.yellow.inverse("New note added!"))
    } else {
        console.log(chalk.red.inverse("Note title taken!"))
    }
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('./notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    
    if (notes.length === 0) {
        console.log("There is no saved note.")
    } else {
        console.log(chalk.inverse('Your notes'))
        notes.forEach(note => console.log(note.title))
    }
}

const readNote = title => {
    const notes = loadNotes()
    const note = notes.filter(note => note.title === title)

    if (note.length === 0){
        console.log(chalk.magenta.inverse("There is not a note with the given title."))
    } else {
        console.log("Found note.")
        console.log(chalk.cyan.bold(note[0].title), '\n\t', chalk.yellow.bold(note[0].body))
    }
}

const removeNote = title => {
    const notes = loadNotes()
    const remainedNotes = notes.filter(note => {
        if (note.title != title) {
            return note
        }
    })

    if (notes.length === remainedNotes.length) {
        console.log(chalk.red.inverse("There isn't a note with the given title."))
    } else {
        saveNotes(remainedNotes)
        console.log(chalk.yellow.inverse("Note removed."))
    }
}

module.exports = {
    loadNotes: loadNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
}