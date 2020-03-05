const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    "**********": ' ',
};

function decode(expr) {
    let arr2 = [];
    let arr = expr.split(/(\d{10})/);
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > 9) {
            arr2.push(arr[i])
        }
    }
    let morse = []
    for (let i = 0; i < arr2.length; i++){
        arr2[i]= arr2[i].split(/(\d{2})/)
        for (let j = 0; j < arr2[i].length; j++){
            if(arr2[i][j] === "10") {
                arr2[i][j] = ".";
            }
            if(arr2[i][j] === "11") {
                arr2[i][j] = "-";
            }
            if(arr2[i][j] === "00") {
                arr2[i][j] = "";
            }

        }
     morse.push( arr2[i].join(""))
    }
    for (let i = 0; i < morse.length; i++){
        morse[i] = MORSE_TABLE[morse[i]]
    }
 return morse.join("")
}

module.exports = {
    decode
}
