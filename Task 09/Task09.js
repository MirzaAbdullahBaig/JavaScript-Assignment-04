// Task 09: Remove all available HTML tags from given string
//  <p><strong><em>Only Print This</em></strong></p>

var str = "<p><strong><em>Only Print This</em></strong></p>";
var removeTags = str.replace(/(<([^>]+)>)/gi, "");

document.write(removeTags)