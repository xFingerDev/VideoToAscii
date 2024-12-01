module.exports = {
    getColor: function(hex, type){
        switch(type){
            case "BK":
                return BlackAndWhite(hex);
            case "Color":
                return Color(hex);
            case "ASCII":
                return ASCII(hex);
        }

    }
};

function BlackAndWhite(hex){
    var calculo = (hex[0] + hex[1] + hex[2]) / 3;
    return calculo > 127?"⬜⬜":"⬛⬛";
}
function Color(hex){
    var cl = hsl(hex);
    return colorName(cl);
}
function ASCII(hex){
    const density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";
    const avg = (hex[0] + hex[1] + hex[2]) / 3;
      const len = density.length;
      const charIndex = Math.floor(Array.map(avg, 0, 255, 0, len));
      const c = density.charAt(charIndex);
      if (c == " ") return "&nbsp;";
      else return  c;
}
function hsl(rgbArr) {
    var r1 = Number(rgbArr[0]) / 255, g1 = Number(rgbArr[1]) / 255, b1 = Number(rgbArr[2]) / 255;
    var maxColor = Math.max(r1,g1,b1), minColor = Math.min(r1,g1,b1);
    var L = (maxColor + minColor) / 2 , S = 0, H = 0;
    if(maxColor != minColor){
      if(L < 0.5){
        S = (maxColor - minColor) / (maxColor + minColor);
      }else{
        S = (maxColor - minColor) / (2.0 - maxColor - minColor);
      }
      if(r1 == maxColor){
        H = (g1-b1) / (maxColor - minColor);
      }else if(g1 == maxColor){
        H = 2.0 + (b1 - r1) / (maxColor - minColor);
      }else{
        H = 4.0 + (r1 - g1) / (maxColor - minColor);
      }
    }
    L = L * 100;
    S = S * 100;
    H = H * 60;
    if(H<0){
      H += 360;
    }
    return {h:H, s:S, l:L};
  }
  function colorName(hsl) {
    var l = Math.floor(hsl.l), s = Math.floor(hsl.s), h = Math.floor(hsl.h);
    if (s <= 10 && l >= 90) {
        return ("⬜⬜")
    } else if (l <= 15) {
        return ("⬛⬛")
    } else if ((s <= 10 && l <= 70) || s === 0) {
        return ("⬛⬛")
    } else if ((h >= 0 && h <= 15) || h >= 346) {
        return ("🟥🟥");
    } else if (h >= 16 && h <= 35) {
        if (s < 90) {
            return ("🟫🟫");
        } else {
            return ("🟧🟧");
        }
    } else if (h >= 36 && h <= 54) {
        if (s < 90) {
            return ("🟫🟫");
        } else {
            return ("🟨🟨");
        }
    } else if (h >= 55 && h <= 165) {
        return ("🟩🟩");
    } else if (h >= 166 && h <= 260) {
        return ("🟦🟦")
    } else if (h >= 261 && h <= 290) {
        return ("🟪🟪")
    } else if (h >= 291 && h <= 345) {
        return ("🟥🟥")
    }else return ("⬛⬛")
}