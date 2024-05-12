function encode(strings) {
  let str = "";
  for (let string of strings) {
    str += `${string.length}#${string}`;
  }
  return str;
}
let strings = ["hello", "world", "here"];

// console.log(encode(strings));

function decode(str) {
    let array =[];
    let i =0
    while(i < str.length){
        let pos = str.indexOf("#", i)
        let len = parseInt(str.slice(i, pos))
        i = pos + 1
        let string = str.slice(i, i + len);
        array.push(string)
        i += len;
    }
    return array
}
let str = "5#hello5#world4#here";
console.log(decode(str));
