/////////////////////////////////////////////////////////////////////////////
// NPM (Node pacakage manger)
// 1) npm init -y --> npm intalize
// npm i --> node_modules is deleted
// npm i namofpacakage ex(npm i validator)
// require
// use code
//////////////////////////////////////////////////////////////////////////////

const yargs = require('yargs')
const notes = require('./notes')
///add
yargs.command({
    command: 'add',
    describe: 'Add notes',
    // options which i will deal with
    builder: {
        title: {
            describe: 'This is title of note to be added',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'This is body of note to be added',
            type: 'string',
            demandOption: true
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }

})
///delete
yargs.command({
    command: 'delete',
    describe: 'Delete note',
    builder: {
        title: {
            describe: 'This is title of note to be added',
            type: 'string',
            demandOption: true
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})
///list
yargs.command({
    command: 'list',
    describe: 'List Notes',
    handler: (argv) => {
        notes.listNote(argv.title)
    }
})
///read
yargs.command({
    command: 'read',
    describe: 'Read Notes',
    builder: {
        title: {
            describe: 'This is title of note to be added',
            type: 'string',
            demandOption: true
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})
//  console.log(yargs.argv)
yargs.parse()

