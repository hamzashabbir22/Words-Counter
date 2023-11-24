const inputTxt = document.getElementById('inputBox');
const word = document.getElementById('words')
const chars = document.getElementById('chars')
const alphabets = document.getElementById('alphabets')
const numbers = document.getElementById('numbers')
const resetBtn = document.getElementById('reset-btn')

function getWordCount(text){
   let splitted = text.trim().split(/\s+/)
   if(splitted == ''){
    return 0;
   }
   return splitted.length;
}

function counter(text){
   // let alphaCount = 0;
   // let charCount = 0;
   // let numbersCount = 0; 

   const counters = {
      alphaCount : 0,
      charCount : 0,
      numbersCount : 0,
   }

   for (let index = 0; index < text.length; index++) {
      
      if (text[index]!=' ' && text[index]!='\n') {
        counters.charCount++;
      }
      if (text[index]>='a' && text[index]<='z' || text[index]>='A' && text[index]<='Z' ) {
         counters.alphaCount++;
      }
      if (text[index]>='0' && text[index]<='9') {
         counters.numbersCount++;
      }

   }

   chars.value = counters.charCount;;
   alphabets.value = counters.alphaCount;
   numbers.value =counters.numbersCount;
}

function wordCounter(){
    let words = getWordCount(inputTxt.value);
    word.value = words;
    counter(inputTxt.value)
}


resetBtn.addEventListener('click',()=>{
   inputTxt.value = '';
   wordCounter()
})