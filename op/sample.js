'use strict';

let path = "./img";
const image_src = new Array(`${path}/op1.png`,`${path}/op2.png`,`${path}/op3.png`,`${path}/op4.png`,`${path}/op5.png`,`${path}/op2.png`,`${path}/op3.png`,`${path}/op4.png`,`${path}/op5.png`,`${path}/op6.png`,`${path}/op7.png`,`${path}/op8.png`,`${path}/op9.png`,`${path}/op10.png`);
let num = 0;

function slideAtTime(){
    if (num < 13) {
      num ++;
    } else if (num==13) {

        const link = document.getElementById("link");
        // 要素の追加
        link.style.pointerEvents = 'auto';

      return
    }
    $("#sample-img").attr("src", image_src[num]);
    setTimeout("slideAtTime()", 350)
}
slideAtTime();
