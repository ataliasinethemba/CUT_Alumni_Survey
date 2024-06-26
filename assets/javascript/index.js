function toggleTextarea(){
    let checkbox = document.getElementById("other");
    let textarea = document.getElementById("otherTextArea");
    if(checkbox.checked){
        textarea.style.display="block";

    }else{
        textarea.style.display="none";
    }
}
setInterval(toggleTextarea,1000);