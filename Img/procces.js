const fs = require('fs');
const color = require('./colorPorc.js');
module.exports = {
    proccesIMG: function(image, size, type){
        //Get Image
        var stream = (new Buffer.from(fs.readFileSync(image)));
        //Remove Header Image
        var splited = stream.slice(54).reverse();
        //Current Image 
        var ImageText = "";
        //Read Position
        var curPos = 0;
        for(var x = 0; x < size[0]; x++){ //High
            var tempText = ""; //Temp Col
            for(var y = 0; y < size[1]; y++){ //Width
                curPos+=3;
                tempText+=color.getColor([splited[curPos], splited[curPos+1], splited[curPos+2]], type);
            }
            ImageText+=[...tempText].reverse().join("")+"\n";
        }
        fs.appendFileSync("Imagenes.txt",ImageText);
    }
};