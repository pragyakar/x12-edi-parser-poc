const { createReadStream } = require('fs');
const { X12parser, X12grouper, Schema } = require('x12-parser');
const { defaultSchema } = require('../schemas/defaultSchema');

function customParser(filePath) {
    const myParser = new X12parser();
    const mySchema = new Schema('', defaultSchema);
    const myGrouper = new X12grouper(mySchema);
    
    const ediFile = createReadStream(filePath);

    ediFile.on('error', error => {
        console.log('Something went wrong', error);
    });

    ediFile.pipe(myParser).pipe(myGrouper).on('data', data => {
        console.log('Sucessfully parsed data', data);
    });
}

module.exports = { customParser };