// Create Elements
let l1 = document.createElement("p")
console.log(l1);

// Adding The New Text
let l2 = document.createTextNode("New Para From JS.")
console.log(l2);

l1.appendChild(l2)
console.log(l1);

let l3 = document.getElementById("c1")
l3.appendChild(l1)
console.log(l3);