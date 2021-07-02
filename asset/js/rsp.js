rsp = [
    "가위",
    "바위",
    "보"
]
function rspcheck(input){
    if (input in rsp) return true
    else return false
}
var user
while (rspcheck(user)){
    user = prompt("가위/바위/보 중 하나를 입력하세요");
}
var randomindex = Math.floor(Math.random() * 3);
airsp = rsp[randomindex];
switch (user){
    case "가위":
        switch (airsp){
            case "가위":
                alert("비겼습니다");
            break;
        }
    break;
}