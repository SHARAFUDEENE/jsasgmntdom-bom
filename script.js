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

function submitForm() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;

    console.log("The First Name is: ", firstName);
    console.log("The Last Name is : ", lastName);

    const data = document.createElement("h3");
    data.id='hthree'
    data.innerHTML = "Your First Name is: " + firstName;
    document.getElementById('hthree').appendChild(data);

    const data2 = document.createElement("h3");
    data2.id='hthree'
    data2.innerHTML = "Your Last Name is: " + lastName;
    document.getElementById('hthree').appendChild(data2);

    // Return false to prevent the form from submitting in the traditional way
    // return false;
}

// QUESTION 4
