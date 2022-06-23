elemResult=document.querySelector(".result");
elemBTN=document.querySelector(".btn");
elemChoice=document.querySelectorAll('[name="goods"]');
elemName=document.querySelector(".name");
elemSurname=document.querySelector(".surname");
elemAmount=document.querySelectorAll(".amount");

const obj = {};

for (var i=0; i<elemChoice.length;i++) {
    obj[elemChoice[i].id] = parseInt(elemChoice[i].value);
}
console.log(Object.values(obj));

function summarise(obj){
    return(Object.values(obj).reduce((partialSum, a) => partialSum + a, 0));
}

const sum = Object.values(obj).reduce((partialSum, a) => partialSum + a, 0);

const obj1 = {};

for (var i=0; i<elemChoice.length;i++) {
    obj1[elemChoice[i].id] = 0;
}

let summ=0;
let s=0
elemAmount.forEach(elem=> {
    elem.addEventListener("change",function(){
        if (parseInt(elem.value)>0){
            document.getElementById(`${elem.classList[1]}`).checked=true;
            obj1[`${elem.classList[1]}`]=0;
            obj1[`${elem.classList[1]}`]=parseInt(elem.value)*parseInt(document.getElementById(`${elem.classList[1]}`).value);
            elemResult.textContent=`${summarise(obj1)} р.`;
            elem.value=parseInt(elem.value,10);
        }
        else{
            document.getElementById(`${elem.classList[1]}`).checked=false;
            if (parseInt(elem.value)!=0){
            alert("Введено недопустимое значение!\nВведите другое значение.");
            elem.value=0;
            elemAmount.style.borderColor="red";}
            obj1[`${elem.classList[1]}`]=0;
            elemResult.textContent=`${summarise(obj1)} р.`;
        }
    })
})

elemChoice.forEach(element=> {
    element.addEventListener("change",function(){
        if (element.checked){
            obj1[`${element.id}`]=0;
            obj1[`${element.id}`]=parseInt(element.value);
            document.querySelector(`.${element.id}`).value=1;
        }
        else {
            obj1[`${element.id}`]=0;
            document.querySelector(`.${element.id}`).value=0;

        }
        elemResult.textContent=`${summarise(obj1)} р.`;
    })
})

elemName.addEventListener("change", function(){
    if (elemName.value!=""){
    elemName.style.borderColor="skyblue";
    elemName.style.borderWidth='0.1vw';
}
    else{
        elemName.style.borderColor="white";
        elemName.style.borderWidth='0.3vw';
    }
})

elemSurname.addEventListener("change", function(){
    if (elemSurname.value!=""){
    elemSurname.style.borderColor="skyblue";
    elemSurname.style.borderWidth='0.1vw';
}
    else{
        elemSurname.style.borderColor="white";
        elemSurname.style.borderWidth='0.3vw';
    }
})

elemBTN.addEventListener("click", function(){
    alert(`Заказчик: ${elemName.value} ${elemSurname.value}\nИтого: ${elemResult.textContent}`);
})
