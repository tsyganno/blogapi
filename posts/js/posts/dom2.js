btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".res");
checkboxButtons = document.querySelectorAll('[name="food"]');

btnElement.addEventListener("click", function(){
    let Total = 0;
    for (const checkboxButton of checkboxButtons){
        if(checkboxButton.checked){
            Total += parseInt(checkboxButton.value);
        }
    }
      resultElement.textContent = `${Total} руб`;
});