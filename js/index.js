//picSet
let picWidth = 900;

//document.getElementById("pic0").style.left = (1440*0) + "px";
//document.getElementById("pic1").style.left = (1440*1) + "px";
//document.getElementById("pic2").style.left = (1440*2) + "px"; //숫자 + 문자 연결연산자 "2880px"

//문자 + 숫자 ---> + 연결연산자

for(var i=0; i<3; i++){
    document.getElementById("pic" + i).style.left = (picWidth * i) + "px";
}

document.getElementById("prev_btn").onclick = function(){
    if(moveNum>0){
        moveNum--;
    }
    for(var i = 0; i<3; i++){
        document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum)+"px");
    }
   
}

let moveNum = 0;
document.getElementById("next_btn").onclick = function(){
    if(moveNum < 2){
        moveNum++;

    }
    for(var i=0; i<3; i++){
        document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum)) + "px";
    }
}
   

//for 반복문 for(초기값; 조건식; 증감식){}
// for(var i=0; i<10; i++){
//     console.log(i);
// }
// console.log("종료후:" + i);
