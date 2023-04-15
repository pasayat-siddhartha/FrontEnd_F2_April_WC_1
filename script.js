/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap(){
  arr.map(varMap); 
  // Each element is stored in "varMap" variable
  
  function varMap(value) {
    if (value.profession === "developer") {
      console.log(value);
    }
  }
}

function PrintDeveloperbyForEach() {
  arr.forEach(varForEach); 
// Each element is stored in "varForEach" variable
  
  function varForEach(arr) {
    if (arr.profession === "developer") {
      console.log(arr);
    }
  }
}

function addData() {
// adding new object with new values
  let newObj = { id: 4, name: "susan", age: "20", profession: "intern" };

  arr.push(newObj);
  console.log(arr);
}

function removeAdmin() {
  // let changed_arr = arr;
  // changed_arr.splice(arr.findIndex(p => p.profession !== "admin"), 1);
  // console.log(changed_arr);

  var filtered = arr.filter(function(prof) { 
    return prof.profession != "admin"; 
  }); 

  //this will not change the original array of object
  console.log(filtered);
}

function concatenateArray() {
  
  let other_arr = [
    { id: 5, name: "Bhavna", age: "20", profession: "Historian" },
    { id: 6, name: "Samantha", age: "23", profession: "Musician" },
    { id: 7, name: "Samiksha", age: "25", profession: "Activist" },
  ];

  let concatArray = arr.concat(other_arr);
  console.log(concatArray);
}
