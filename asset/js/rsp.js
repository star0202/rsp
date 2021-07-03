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
while (rspcheck(user) != true){
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
            case "보":
                alert("이겼습니다!");
                break;
            case "바위":
                alert("졌습니다.....");
                break;
        }
        break;
    case "바위":
        switch (airsp){
            case "가위":
                alert("이겼습니다!");
                break;
            case "보":
                alert("졌습니다.....");
                break;
            case "바위":
                alert("비겼습니다");
                break;
        }
        break;
    case "보":
        switch (airsp){
            case "가위":
                alert("졌습니다.....");
                break;
            case "보":
                alert("비겼습니다");
                break;
            case "바위":
                alert("이겼습니다!");
                break;
        }
        break;
}