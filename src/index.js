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
    '**********': ' ',
};

function decode(expr) {
    // write your solution here
    let final = '';

    for (let i = 0; i < expr.length / 10; i++) {
        const slice = expr.slice(10 * i, 10 * i + 10);

        if (slice.includes('*')) {
            final = final + ' ';
            continue;
        }

        const word = slice.slice(slice.indexOf('1'));

        let morse = '';

        for (let j = 0; j < word.length; j = j + 2) {
            if (word[j + 1] === '0') {
                morse = morse + '.';
            } else {
                morse = morse + '-';
            }
        }

        final = final + MORSE_TABLE[morse];
    }

    return final;
}

module.exports = {
    decode
}