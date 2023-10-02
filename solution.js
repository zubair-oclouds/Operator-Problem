function convertingToInfix(arr) {
    if (Array.isArray(arr)) {
        if (arr.length >= 2)
            [arr[0], arr[1]] = [arr[1], arr[0]];
        for (let i = 0; i < arr.length; i++)
            convertingToInfix(arr[i]);
    }
}

function convertingToString(arr, out, count){
    if(Array.isArray(arr)){
        if(Array.isArray(arr[0]) && count > 0)
            out.str += '('
        for(let i = 0; i < arr.length; i++)
            Array.isArray(arr[i])? convertingToString(arr[i], out, count + 1): out.str += arr[i];
        if(Array.isArray(arr[0]) && count > 0)
            out.str += ')'
    }
}

const array = ['OR', ['<', 'a', 'b'], ['AND', ['==', 'c', 'd'], ['!=', 'e', 'f']]];
convertingToInfix(array);
const output = { str : "" }
let count = 0;
convertingToString(array, output, count)
console.log(output.str)
