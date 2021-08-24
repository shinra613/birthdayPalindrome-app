let birthDate = document.getElementById("#bdate");
let checker = document.getElementById("#Checker");
let result = document.getElementById("#result");



const stringreverser = (string) => {
    
    let arrStr = string.split('');
    let reverseArr = arrStr.reverse();
    let newStr = reverseArr.join('');
    return newStr;
}



const stringConverter = (date)=>{

   let newDate = {}

    if (date.day < 10) {
        newDate.day = "" + date.day;
    }
    else {
        newDate.day = date.day.toString() ;
    }

    if (date.month < 10) {
        newDate.month = "" + date.month;
    }
    else {
        newDate.month = date.month.toString();
    }

    newDate.year = date.year.toString();
    

    return newDate;


}

const variantGenerator = (date) => {

    console.log(date);

    let ddmmyyyy = date.day + date.month + date.year;
    let mmddyyyy = date.month + date.day + date.year;
    let yyyymmdd = date.year + date.month + date.day;
    let ddmmyy = date.day + date.month + date.year.slice(-2);
    let mmddyy = date.month + date.day + date.year.slice(-2);
    let yymmdd = date.year.slice(-2) + date.month + date.day;

    let variants = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
    console.log(variants);
    return variants;
 


    
}


const palindromeVariantCheck = (date) => {

    let palindropmevariants = variantGenerator(date);
    let palindrome = false;
    let variantResults = [];
    let testvar = [];
    
    for (let i = 0; i < palindropmevariants.length; i++) {
        if (palindropmevariants[i] === stringreverser(palindropmevariants[i])) {
            variantResults.push(true);
           
        } else {
            variantResults.push(false);
            testvar.push(stringreverser(palindropmevariants[i]));
            
        } 

    }


    for (let i = 0; i < variantResults.length; i++) {
        if (variantResults[i] === true) {
            palindrome = true;
            console.log('yeah we got a palindrome :');
            break;
           
        }

    }
    console.log(testvar);
   
    console.log(variantResults);

    return palindrome;
   
    
}

function leapyear(year){
    if(year % 400 === 0){
      return true;
    }
    if(year % 100 === 0){
      return false;
    }
    if(year % 4 === 0){
      return true;
    }
    return false;
  }



const getnextdate = (date) => {
    let day=date.day+1;
    let month = date.month;
    let year = date.year

    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(month === 2){ 
        
        if(leapyear(year)){ 
            if (day > 29) {
               
                day = 1;
                month++;
                
           }
        }
        else {
            if (day > 28) {
               
                day = 1;
                month++;
                
           }
        }
      }
      
      else {
         
        if (day > daysInMonth[month - 1]) {
            
            day = 1; 
            month++;
          
        }
      }
    
      
    if (month > 12) {
          
        month = 1;
        year++;
        
      }
    
    return {
          
        day: day,  
        month: month,
        year: year

      };
    
}

function getNextPalindromeDate(date){
    var counter = 0;
    var nextDate = getnextdate(date);
  
    while(1){
      ctr++;
      var isPalindrome = palindromeVariantCheck(nextDate);
      if(isPalindrome){
        break;
      }
      nextDate = getnextdate(nextDate);
    }
    return [counter, nextDate];
  }

const clickhandler=() => {
    
    let date = birthDate.value.split('-');
    

    let dateObj = {
        day: date[2], month: date[1], year:date[0]
    }

    let newdate = stringConverter(dateObj);

    let flag = palindromeVariantCheck(newdate);

    if (flag) {
        result.innerHTML = "Yayyy,your birthdate is a palindrome";
    }
    else {
        result.innerHTML = "nah bruh";
    }


}
 



checker.addEventListener('click',()=>(clickhandler()));

