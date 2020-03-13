module.exports = function check(str, bracketsConfig) {
    let config = new Map();
    for (let pair of bracketsConfig) {
        config.set(pair[0], pair[1]);
    }
    let stack = [];
    for (let i in str) {
        let char = str.charAt(i);
        if (config.has(char)) {
            if (stack.length !== 0 && stack[stack.length - 1] === char && char === config.get(char)) {
                stack.pop();
            } else {
                stack.push(char);
            }
        } else if (stack.length === 0) {
            return false;
        } else {
            let top = stack.pop();
            if (config.get(top) !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
