# Operator Problem

## Description

In this problem you have to convert a prefix expression stored in list to infix. Output should be store in the string.

## Code

```javascript
const array = [
  "OR",
  ["<", "a", "b"],
  ["AND", ["==", "c", "d"], ["!=", "e", "f"]],
];

//Output should be like this

output = "a<bOR(c==dANDe!=f)";
```
