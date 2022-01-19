function lineBreak(str, max) {
    var ac = "";
    var i = 0;
    while (i + max < str.length) {
      ac += str.substring(i, i + max) + "\n";
      i += max;
    }
    return ac + str.substring(i, str.length);
  }
  
module.exports = {
    lineBreak
}