//Testing
let arr = [];
console.log(typeof arr);
arr.push("Vaibhav");
arr.unshift("Prakhar");
arr.pop();
arr.unshift("Vaibhav");
console.log(arr);
//arr.splice(strt index,no elements you want to delete);
let arr2 = ["Mayank", "Sarthak"];
let arr3 = [...arr, ...arr2];
console.log(arr3);
arr3 = JSON.stringify(arr3);
console.log(arr3);
console.log(typeof arr3);

let x = 1;
x = JSON.stringify(x);
console.log(typeof x);

//Ques 1:Merge Two arrays and sort
function comparedesc(a, b) {
  if (a.age < b.age) {
    return 1;
  }
  if (a.age > b.age) {
    return -1;
  }
  return 0;
}

function compareasc(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}

let array = [
  {
    name: "xyz",
    age: 10,
  },
  {
    name: "ert",
    age: 4,
  },
  {
    name: "mvm",
    age: 45,
  },
  {
    name: "rere",
    age: 56,
  },
];

let arraytwo = [
  {
    name: "fdcd",
    age: 32,
  },
  {
    name: "ter",
    age: 1,
  },
  {
    name: "fdfg",
    age: 3,
  },
  {
    name: "gfdgd",
    age: 15,
  },
];
console.log(array);
console.log(arraytwo);
array = array.concat(arraytwo);
array.sort(comparedesc);
console.log(array);
array.sort(compareasc);
console.log(array);

//Ques 2 // Print Hello World
for (let i = 0; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Hello World");
  } else if (i % 3 == 0) {
    console.log("Hello");
  } else if (i % 5 == 0) {
    console.log("World");
  } else {
    console.log(i);
  }
}
