const person = {fname:"Vikas", lname:"Sai", age:19};

let text = "";
for (let x in person) {
  text += person[x] + " ";
}
console.log(text);