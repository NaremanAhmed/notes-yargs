const fs = require('fs')
const { title } = require('process')
///add
const addNote = (title,body) =>{
    const notes = loadNotes() // [{title:'title1',body:'body1'}]
    
    const duplicateTitles = notes.filter((note)=>{
        return note.title === title
    })
    console.log(duplicateTitles)
    if (duplicateTitles.length===0) {
        notes.push({    
            title:title,  //[{title:'title1',body:'body1'},{title:'title2',body:'body2'}]
            body:body
        })
        saveNotes(notes)
        console.log('save data successfuly')
    }else{
        console.log('you have this data!? try again...')
    }

}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch(e){
        return []
    }
}

const saveNotes = (notes) =>{
    const saveData = JSON.stringify(notes)  // [{"title":'aaa',"body":'aasd'},{"title":'titl2',"body":'body2'}]
    fs.writeFileSync('notes.json',saveData)
}
///delete
const removeNote =(title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>{
        return note.title !== title
    })

    console.log(notesToKeep)
    saveNotes(notesToKeep)
    console.log('Removed done ...')
}
///read
const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note)=>{
        return note.title === title
    })
    // console.log(note)
    if(note){
        console.log(note.body)
    }else{
        console.log('not found ..')
    }
}
///list
const listNote = () =>{
    const notes = loadNotes()
    // notes.forEach(title => {
    //     console.log(title.title)
    // });
    notes.forEach((note) => {
        console.log(note.title)
        console.log(note.body)
        console.log(note)
    });
}


module.exports = {
    addNote,
    removeNote,
    readNote,
    listNote
}