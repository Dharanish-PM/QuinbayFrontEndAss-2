
var quantity=0;
var quantityEle=document.querySelector(".quantity");
var increment=document.querySelector(".increment");
var decrement=document.querySelector(".decrement");
increment.addEventListener("click",(e)=>{
    quantity+=1;
    quantityEle.innerHTML=quantity;

})
decrement.addEventListener("click",(e)=>{
    if(quantity!=0){
        quantity-=1;
    }
    quantityEle.innerHTML=quantity;
})
