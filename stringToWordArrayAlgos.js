//given a string of words(with spaces),
//return an array of words
//no built in functions!!!
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]
const stringToWordArray = (str) => {
    var read = false
    var word = ""
    var arr = []
    for(var i=0; i < str.length; i++) { 
        if (str[i] != " "){
            read = true
            word += str[i];
        }
        else{
            if (word){
                arr.push(word)
                word = ""
                read = false
            }
        }
    }
    if (word){
        arr.push(word)
    }
    return arr
}

console.log(stringToWordArray("Did I shine my shoes today?"));
console.log(stringToWordArray("Did I shine my shoes today?      "));
console.log(stringToWordArray("two             words"));