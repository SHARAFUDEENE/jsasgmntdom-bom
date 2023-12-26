// QUESTION 1

document.getElementById('delete').addEventListener('click', function () {
    document.getElementById('colorSelect').removeChild(document.getElementById('colorSelect').lastElementChild);
});

 

// QUESTION 2

function changecolor() {
    const color = document.getElementById("Selectcolor").value;
    document.getElementById('selectertext').style.color = color;
}

// QUESTION 3

function submit(){
    const firstName=document.getElementById("form1").document.getElementById("fname").value;
const lastName=document.getElementById("form1").getElementById("lname").value;
console.log("The First Name is: ", firstName)
console.log("The Second Name is : ",secondName)
}
