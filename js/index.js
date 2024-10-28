const indexDescription = document.querySelector("#indexDescription span");
let i = 0;
let text = "测试test...";
function updateIndexDescription() {
    if(i < text.length){
        indexDescription.innerHTML += text.charAt(i);
        i ++;
        setTimeout(updateIndexDescription, 1000);
    }
}

updateIndexDescription();