// https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php

// 1. Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// Sample object:
let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
// Sample Output: name,sclass,rollno

const studentFunction = (obj) => {
  console.log("\n");
  console.log("STUDENT INPUT : ", obj);
  console.log("STUDENT OUTPUT : ", Object.keys(obj).join(",")); //Array to String
  console.log("--");
};

studentFunction(student);

// 2. Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property. Go to the editor

const studentDeleteKey = (obj) => {
  let objA = Object.assign({}, obj); // COPY object
  console.log("\n");
  console.log("STUDENT 2 INPUT : ", objA);
  delete objA.rollno;
  console.log("STUDENT 2 OUTPUT : ", objA);
  console.log("--");
};

studentDeleteKey(student);

// 3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
// Sample object :

const studentLength = (obj) => {
  console.log("\n");
  console.log("STUDENT 3 INPUT : ", obj);
  console.log("STUDENT 3 OUTPUT : ", Object.keys(obj).length); // Length Object
  console.log("--");
};

studentLength(student);

// 4. Write a JavaScript program to display the reading status
// (i.e. display book name, author name and reading status) of the following books.
//  Go to the editor

const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const libraryDisplay = (arr) => {
  console.log("\n");
  console.log("LIBRARY INPUT : ", arr);
  console.log("LIBRARY OUTPUT : ");
  arr.forEach((item) =>
    console.log(
      `Author: ${item.author}, Title: ${item.title}, Status: ${item.readingStatus}`
    )
  );
  console.log("--");
};

libraryDisplay(library);

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal
// places using object classes. Go to the editor
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

const volumeCelinder = (R = 1, H = 1) => {
  const volume = (Math.PI * R * R * H).toFixed(4);
  console.log("\n");
  console.log("RADIUS : ", R);
  console.log("HIGHT : ", H);
  console.log("VOLUME : ", volume);
  console.log("--");
};

volumeCelinder(2, 3);

// 6. Write a Bubble Sort algorithm in JavaScript. Go to the editor
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly
// stepping through the list to be sorted,
let bubbleSortData = [6, 4, 0, 3, -2, 1];
// Expected Output : [-2, 0, 1, 3, 4, 6]

const bubbleSort = (arr) => {
  let array = arr.slice(); // dublicat array
  for (let j = array.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return [
    console.log("\n"),
    console.log("ARRAY INPUT : ", arr),
    console.log("Expected OUTPUT : ", array),
    console.log("--"),
  ];
};

bubbleSort(bubbleSortData);

// 7. Write a JavaScript program which returns a subset of a string. Go to the editor
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

// 8. Write a JavaScript program to create a Clock. Go to the editor
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"

const timer = () => {
  console.log(new Date(YYYY, MM, DD));
};

setInterval(timer, 1000);
