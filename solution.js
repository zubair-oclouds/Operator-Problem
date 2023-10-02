function convertingToInfix(arr) {
    let arrayCopy = JSON.parse(JSON.stringify(arr));
    function helper(arrayCopy) {
        if (Array.isArray(arrayCopy)) {
            if (arrayCopy.length >= 2)
                [arrayCopy[0], arrayCopy[1]] = [arrayCopy[1], arrayCopy[0]];
            for (let i = 0; i < arrayCopy.length; i++)
                helper(arrayCopy[i]);
        }
    }
    helper(arrayCopy)
    return arrayCopy
}

function convertingToString(arr) {
    let count = 0;
    const out = { str: "" }
    function helper(arr, out, count) {
        if (Array.isArray(arr)) {
            if (Array.isArray(arr[0]) && count > 0)
                out.str += '('
            for (let i = 0; i < arr.length; i++)
                Array.isArray(arr[i]) ? helper(arr[i], out, count + 1) : out.str += arr[i];
            if (Array.isArray(arr[0]) && count > 0)
                out.str += ')'
        }
    }
    helper(arr, out, count);
    return out.str
}

const array = ['OR', ['<', 'a', 'b'], ['AND', ['==', 'c', 'd'], ['!=', 'e', 'f']]];
let infixArray = convertingToInfix(array);
const output = convertingToString(infixArray)
console.log(output)
