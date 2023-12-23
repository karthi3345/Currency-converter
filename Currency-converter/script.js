const currencyElem1= document.querySelector("#currency-one")
const amountOne= document.querySelector("#amount-one")
const currencyElem2= document.querySelector("#currency-two")
const amountTwo= document.querySelector("#amount-two")
const rateElem= document.querySelector("#rate")
const swap= document.querySelector("#swap")


 async function calculate(){
    const currency_one =  currencyElem1.value;
    const currency_two =  currencyElem2.value;
 
 try {
    const response=await fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
 
   const data= await response.json()
   const rate= data.rates[currency_two]
   rateElem.innerHTML=`1 ${currency_one}= ${rate} ${currency_two}`
   amountTwo.value=(amountOne.value*rate).toFixed(2)

 } catch (error) {
   console.log(error);
 }
    
 }
 currencyElem1.addEventListener("change",calculate)
 currencyElem2.addEventListener("change",calculate)
 amountOne.addEventListener("input",calculate)
 amountTwo.addEventListener("input",calculate)
 swap.addEventListener("click",()=>{
    const temp= currencyElem1.value;
    currencyElem1.value=currencyElem2.value;
    currencyElem2.value=temp
    calculate()


 })
 calculate()
