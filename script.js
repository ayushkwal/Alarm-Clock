console.log("hello")
let set = document.getElementById('btn');
let hrs = document.getElementById('hrs').value;
let min = document.getElementById('min').value;
const total = ((hrs*60*60) + (min*60))*1000;
set.addEventListener('click',setalarm);

function setalarm() {
    // console.log("alarmsetted");
    let hrs = document.getElementById('hrs').value;
let min = document.getElementById('min').value;
let body = document.getElementById('body');
const total = ((hrs*60*60) + (min*60))*1000;



    setTimeout(()=>{
        //Your Alarm function start-------------------------------------------------------->
        console.log("helloworld");
        let beforetime = document.getElementById('beforetime');
        let aftertime = document.getElementById('aftertime');
        let clock = document.getElementById('time');
        var audio = document.getElementById('myAudio');
        console.log(aftertime);
        audio.play();
        beforetime.style.display = "none";
        aftertime.style.display = "block";
     
        //Your Alarm function ends -------------------------------------------------------->
    },total);
}
