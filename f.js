// question-1
document.getElementById('remove').addEventListener('click',function(){
    const confirmation=confirm("Are you sure to delete this ? ");
    if(confirmation){
        document.getElementById('removeItems').removeChild(document.getElementById('removeItems').lastElementChild);
    }
})

// question-2

function changeColor(){
    let wantedColor=document.getElementById('colorSelect').value;
    document.getElementById('colorText').style.color=wantedColor;
}
// question-3

function getValues(){
    const firstName= document.getElementById('fname').value;
    const lastName=document.getElementById('lname').value;
    console.log("First Name :",firstName);
    console.log("Last name :",lastName);
 }
 // question-4

 function calculateVolume(){
    let radius=document.getElementById('Radius').value;
    if(radius<=0){
        alert("Please Provide a valid number");
         volume="";
    }else {
        let volume= (4/3)*Math.PI*radius**3;
        document.getElementById('Volume').value=volume;
    } 
}
 // question-5

 let images= ["http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg","http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg","http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",];
 let index=0;
 function imageChange(){
    index++;
    if(index==images.length){
        index=0;
    }
    const img=document.getElementById('changeImg');
    img.src=images[index];
 }
  // question-6

  function openWindow(){
    window.open('https://code.visualstudio.com/');
  }
 // question-7

 function redirectNewpage(){
    window.location.href='https://nodejs.org/en/download';
 }
  // question-8

  function getInformation(){
    let currentUrl= window.location.href;
    let url = new URL(currentUrl);
    let protocol= url.protocol;
    let hostName=url.hostname;
    let param= url.searchParams;
    let result= " URL's Protocol : " + protocol + "  and  " + "Host name : " + hostName + "  and  "+ "Query Parameters : " + param;
    const info= document.getElementById('information');
    info.innerText= result;
  }

    // question-9

    function reloadPage(){
        location.reload();
    }

   // question-10

  const screenSize=()=>{
    let screenHeight=  window.screen.height;
    let screenWidth= window.screen.width;
    const screen= document.getElementById('screen');
    screen.innerText="Screen Height is " +   screenHeight  + " px " + " and " + "  Screen Width is "  +   screenWidth + " px ";
  }

     // question-11

     let count=6;
     const timeVar= document.getElementById('timer');
     let clear;
     function setTimer(){
        let minutes= Math.floor(count/60);
        let seconds= count % 60;
        if(count<=0){
            clearInterval(clear);
            alert("Time out");        
        }else {
            count--;
        }
        timeVar.innerText= minutes + " : " + seconds;
     }
     function countdownTimer(){
        setTimer();
        clear= setInterval(setTimer,1000);

     }

    
    
    