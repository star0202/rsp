function doGbb(){

    console.log(document.querySelector('input[name="gbbrdo"]:checked').value);
    gbbrdo = Number((document.querySelector('input[name="gbbrdo"]:checked').value));
    com_gbb = Math.floor(Math.random()*3);
    console.log("com : " + com_gbb);
    strGbbs = ['Scissor', 'Rock', 'Paper']; 
    strMsg = strGbbs[gbbrdo] + "(User) : " + strGbbs[com_gbb] + "(AI) =";
        if(gbbrdo == com_gbb){
            strMsg = strMsg + "It's tie!"
        }
        else
        if ((gbbrdo == 0 && com_gbb == 1) 
         || (gbbrdo == 1 && com_gbb == 2) 
         || (gbbrdo == 2 && com_gbb == 0)){
               strMsg = strMsg + "AI win!"
        }                      
        else
        { 
            strMsg = strMsg + "User win!"                  
        }
        document.getElementById('result_').innerHTML = strMsg;
}