console.log("hello")
// let d = new Date();
// console.log(d.getHours());
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
let d = new Date();
let cur_hrs = d.getHours();
console.log(cur_hrs);
let cur_min = d.getMinutes();
console.log(cur_min);

const cur = (((hrs-cur_hrs)*60*60)+((min-cur_min)*60))*1000;
console.log(cur);


    setTimeout(()=>{
        //Your Alarm function start-------------------------------------------------------->
        console.log("helloworld");
        let beforetime = document.getElementById('beforetime');
        let aftertime = document.getElementById('aftertime');
        let clock = document.getElementById('time');
        var audio = document.getElementById('myAudio');
      //  console.log(aftertime);
        audio.play();
        beforetime.style.display = "none";
        aftertime.style.display = "block";
     
        //Your Alarm function ends -------------------------------------------------------->
    },cur);
}
