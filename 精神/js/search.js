String.prototype.replaceChars = function(character, replacement){
        var str = this;
        var a;
        var b;
        for(var i=0; i < str.length; i++){
            if(str.charAt(i) == character){
                a = str.substr(0, i) + replacement;
                b = str.substr(i + 1);
                str = a + b;
            }
        }
        return str;
}
 
function search(query){
    switch(query.substr(0, 2)){
        case "-b":
            query = query.substr(3);
            window.location = "http://bato.to/search?name=Hinamatsuri&name_cond=c" 
            break;

        case "-y":
            query = query.substr(3);
            window.location = "https://www.youtube.com/results?search_query=" 
            break;

        case "-w":
            query = query.substr(3);
            window.location = "https://en.wikipedia.org/wiki/" 
            break;

        case "-n":
            query = query.substr(3);
            window.location = "https://www.nyaa.se/?page=search&cats=0_0&filter=0&term=" 
            break;

        case "-g":
            query=query.substr(3);
            window.location =  "https://github.com/search?utf8=✓&q=" + query.replaceChars("", "+");
            break;

        default:
            window.location="https://duckduckgo.com/?q=" + query.replaceChars("", "+");
    }
}
 
window.onload = function(){
    searchinput = document.getElementById("searchbox");
    if(!!searchinput){
        searchinput.addEventListener("keypress", function(a){
            var key = a.keyCode;
            if(key == 13){
                var query = this.value;
                search(query);
            }
        });
     }
    var search_sqr = document.getElementById("search_sqr");
 }
