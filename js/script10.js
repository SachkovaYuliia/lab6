// 10.Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)  і перевіряє 
// правильність закриття дужок () {} []
//   Якщо рядок містить коректний код функція повертає true.
//   В іншому випадку повертає false

function checkBrackets(str) {
    const stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const lastOpeningBracket = stack.pop();
            if (lastOpeningBracket !== bracketPairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

const code = 'function someFn() { if (true) { return "hello"; } }';
console.log(checkBrackets(code)); 
document.getElementById('checkBrackets').innerHTML = checkBrackets(code);