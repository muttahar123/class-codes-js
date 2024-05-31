// array.forEach(element => {

// });


var students = [
    { Name: "Muttahr", fatherName: "Sohail Anwer" },
    { Name: "Ahmed", fatherName: "Ali" },
    { Name: "Ali", fatherName: "Ahmed" },
    { Name: "Khizer", fatherName: "Sohail Anwer" },
    { Name: "Panwail", fatherName: "gandhi " },
]

// students.forEach(function (data, index) {
    // console.log(index,data);
//     console.log(index.Name);
// })


// students[2].Name = "Husain";
// console.log(students);

// students.splice(2, 2);
// console.log(students);


var list = document.getElementById("list");
function renderData() {
    list.innerHTML = "";
    students.forEach(function(data , index){

        var ele = `<li id = ${index}><span>${data.Name}</span> <button onclick="editobj(this)">edit</button>
      <button onclick="dltobj(this)">delete</button></li>
    </ul>`
        list.innerHTML += ele;
    })

}
renderData();

function editobj(ele){
  console.log(ele.parentElement.id);
  students[ele.parentElement.id].Name=prompt('User Name');
  console.log(students);
  renderData()
}

function dltobj(ele) {
    students.splice(ele.parentElement.id, 1);
    console.log("After delete=>", students);
    renderData();
  }