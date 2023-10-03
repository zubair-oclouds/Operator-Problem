function recursivePostfixToInfix(arr) {
    function helper(arr) {
        if (!Array.isArray(arr)) {
            return arr.toString()
        }
        return (Array.isArray(arr[1]) || Array.isArray(arr[2]) ? "(" : "") + helper(arr[1]) + helper(arr[0]) + helper(arr[2]) + (Array.isArray(arr[1]) || Array.isArray(arr[2]) ? ")" : "")
    }
    return helper(arr).slice(1, -1);
}

function iterativePostfixToInfix(arr) {
    let str = ""
    const stack = [arr]
    while (stack.length) {
        let item = stack.pop()
        if (!Array.isArray(item)) {
            str += item
        }
        else {
            if (Array.isArray(item[1]) || Array.isArray(item[2])) {
                item.unshift('(')
                item.push(')')
                stack.push(item[4], item[3], item[1], item[2], item[0])
            }
            else {
                stack.push(item[2], item[0], item[1])
            }
        }
    }

    return str.slice(1, -1);
}
const array = ['OR', ['<', 'a', 'b'], ['AND', ['==', 'c', 'd'], ['!=', 'e', 'f']]];

const output = recursivePostfixToInfix(array)
console.log(output)