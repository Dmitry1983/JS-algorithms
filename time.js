const arr = ["1:10pm", "4:40am", "5:00pm"];

const timeArr1 = ["1:10pm", "4:40am", "5:00pm"];
// Output: 230
const timeArr2 = ["10:00am", "11:45pm", "5:00am", "12:01am"];
// Output: 16

const timeArr3 = ["2:10pm", "1:30pm", "10:30am", "4:42pm"];

// console.log(arr[0].replace("pm", ""));

// console.log(arr[0].includes("pm"));

const TimeDifference = (strArr) => {
  let totalArr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].includes("pm")) {
      let temp = strArr[i].replace("pm", "").split(":");
      totalArr.push((temp[0] * 1 + 12) * 60 + temp[1] * 1);
    }
    if (strArr[i].includes("am")) {
      let temp = strArr[i].replace("am", "").split(":");
      totalArr.push(temp[0] * 60 + temp[1] * 1);
    }
  }

  let sortedArray = totalArr.sort((a, b) => {
    return a - b;
  });
  let differArr = [];
  for (let i = 1; i < sortedArray.length; i++) {
    differArr.push(sortedArray[i] - sortedArray[i - 1]);
  }

  return Math.min(...differArr);
};

console.log(TimeDifference(timeArr1));

console.log(TimeDifference(timeArr2));

console.log(TimeDifference(timeArr3));
