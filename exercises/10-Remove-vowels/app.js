// Your code goes here
const rapid = (str) => {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if ('aeiou'.indexOf(char) === -1) {
            result += char.toUpperCase();
        }
    }

    return result;
};

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
