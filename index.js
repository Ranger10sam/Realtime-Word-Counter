var charVal = document.getElementById("textarea")
const totalCount = document.getElementById("total-counter")
const  remainingCount = document.getElementById("remaining-counter")
const btn = document.getElementById("copybtn")

let userChar = 0;

updateCounter = (charVal) =>{
    if (charVal.value.length == 0){
        userChar=0
    }
    else{
        charVal = charVal.value.replace(/(^\s*)|(\s*$)/gi,"");
        charVal = charVal.replace(/[ ]{2,}/gi," ");
        charVal = charVal.replace(/\n /,"\n");
        userChar = charVal.split(' ').length;
    }

    totalCount.innerText = userChar;
    remainingCount.innerText = 200-userChar;
 
}

charVal.addEventListener("keyup", () => updateCounter(charVal));

const copyText = () => {
    charVal.select();
    charVal.setSelectionRange(0, 9999); //for mobile
    navigator.clipboard.writeText(charVal.value);  
}
function changeText(text, textToChangeBackTo) {
    btn.textContent = text;
    setTimeout(function() { btn.textContent = textToChangeBackTo; }, 1000);
}