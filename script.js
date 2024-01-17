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


// question5
var image=["http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg","http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg","http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg" ]
var index=0;
function changeimage(){
    index++;
if(image==index.length){
    index=0;
}
    const img=document.getElementById("image");
    img.src=image[index]
}
// question6
function openurl(){
    window.open("https://webapp.entri.app/home")
}

// question7
function redirect() {
    window.location.href=("https://www.youtube.com/");
}
// question8

function displyurl(){
    
    const protocol=window.location.protocol; 
  const host =window.location.hostname ;
  const searchParams= new URLSearchParams(window.location.search);
  const result=(protocol+","+ host+","+searchParams)
  document.getElementById("info").innerText = result;

  console.log(result);
}

// question 9
function reload(){
    window.location.reload()
}
// question 10
function handw(){
   let widthh= window.screen.width;
   let heightt= window.screen.height;
   const  relt=document.getElementById("question10");
   relt.innerText="width="+ widthh+",height="+heightt;

console.log(relt);
}

// Question 11
    let count = 10;

    function start() {
      function updateCountdown() {
        document.getElementById('count').innerHTML = count + " seconds Left";
        if (count === 0) {
          alert("Countdown zero");
        } else {
          count--;
          setTimeout(updateCountdown, 1000);
        }
      }

      updateCountdown();
    }