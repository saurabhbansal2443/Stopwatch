let time = document.querySelector(".time");

let hoursSpan = document.querySelector(".hours");
let minuteSpan = document.querySelector(".minutes");
let secondSpan = document.querySelector(".seconds");

let list =  document.querySelector("ul");

let btns = document.querySelector(".buttons");

let hour = 0;
let minute = 0;
let second = 0;

let stopId = null;

btns.addEventListener("click", function (event) {

    let eleID = event.target.id;

    let stratbtn = document.querySelector("#start") ;

    if (eleID == "start") {

        stopId = setInterval(function () {
            second++;
            if (second == 60) {
                minute++;
                second = 0;

                if (minute == 60) {
                    hour++;
                    minute = 0;
                    hoursSpan.textContent = hour;
                }
                minuteSpan.textContent = minute;
            }
            secondSpan.textContent = second;
        }, 1000)

        stratbtn = event.target;
       stratbtn.disabled = true ;

    } else if (eleID == "stop") {

        stop(0)

       stratbtn.disabled = false;
       
    } else if (eleID == "Reset") {
        hour = 0 ;
        minute =0 ;
        second = 0 ;
        hoursSpan.textContent = hour;
        minuteSpan.textContent = minute;
        secondSpan.textContent = second;

        
       stop(1)
       stratbtn.disabled = false;

       list.innerHTML=""

    } else if (eleID == "lap") {
       
        if( hour == 0 && minute == 0 && second ==0 ){
            return ;
        }

       let ele = document.createElement("li") ;

       ele.classList.add("laptime");

       ele.innerHTML = `${hour} : ${minute} : ${second}`;

       list.appendChild(ele);
    }

})


function stop(para){
    if (stopId == null && para == 0 ) {
        alert("Phele start to karle gadhe ")
    } else {
        clearInterval(stopId);
        stopId = null;
    }
}
