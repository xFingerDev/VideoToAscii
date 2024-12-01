const fs = require('fs');
const prc = require('./Img/procces.js');

var JobDirectory = "./Video/Extract";
var Ancho = 64;
var Alto = 64;
var Color = {BK:"BK",Color:"Color",ASCII:"ASCII"}.Color;


fs.readdirSync(JobDirectory).forEach(curImg => prc.proccesIMG(JobDirectory+'/'+curImg,[Alto,Ancho],Color));























//var curImg = 78;


//console.log(files[curImg])

//console.log(fs.statSync(JobDirectory+'/'+files[0]).size );
/*var stream = (new Buffer.from(fs.readFileSync(JobDirectory+'/'+files[curImg])));
var splited = stream.slice(54).reverse();
console.log(splited);
var ImageText = "";
for(var i = 0; i < Alto; i++){
    var tempText = "";
    for(var x = 0; x < Ancho; x++){
        var calculo = (splited[curPos] + splited[curPos+1] + splited[curPos+2]) / 3
        curPos+=3;
        tempText+=calculo > 127?"00":"11";

    }
    ImageText+=[...tempText].reverse().join("")+"\n";
}
console.log(ImageText);*/


