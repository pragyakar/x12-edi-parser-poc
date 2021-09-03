const { createReadStream } = require('fs');
const { X12parser, X12grouper, Schema } = require('x12-parser');
const { defaultSchema } = require('../schemas/defaultSchema');

function x12parser(filePath) {
    const myParser = new X12parser();
    const mySchema = new Schema('005010X221A1', defaultSchema); // Not sure what '005010X221A1; is supposed to be here
    const myGrouper = new X12grouper(mySchema);
    
    const ediFile = createReadStream(filePath);

    ediFile.on('error', error => {
        console.log('Something went wrong', error);
    });

    ediFile.pipe(myParser).pipe(myGrouper).on('data', data => {
        console.log('Successfully parsed data', data);
    });
}

module.exports = { x12parser };