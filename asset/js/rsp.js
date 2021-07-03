rsp = [
    "가위",
    "바위",
    "보"
]
function rspcheck(input){
    if (input in rsp){
        console.log(1)
        return true;
    }
    else{
        console.log(3)
        return false;
    }
}
var user
while (rspcheck(user) != true){
    user = prompt("가위/바위/보 중 하나를 입력하세요");
}
console.log("2")
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