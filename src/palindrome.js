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
        newDate.day = "0" + date.day;
    }
    else {
        newDate.day = date.day.toString() ;
    }

    if (date.month < 10) {
        newDate.month = "0" + date.month;
    }
    else {
        newDate.month = date.month.toString();
    }

    newDate.year = date.year.toString();
    

    return newDate;


}

const variantGenerator = (date) => {

    let ddmmyyyy = date.day + date.month + date.year;
    let mmddyyyy = date.month + date.day + date.year;
    let yyyymmdd = date.year + date.month + date.day;
    let ddmmyy = date.day + date.month + date.year.slice(-2);
    let mmddyy = date.month + date.day + date.year.slice(-2);
    let yymmdd = date.year.slice(-2) + date.month + date.day;

    let variants = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
    return variants;
 


    
}

const searchNextDate = () => {
    
}


const isPalindrome = (date) => {

    let palindropmevariants = variantGenerator(date);
    let palindrome = false;
    let variantResults = [];
    
    for (let i = 0; i < palindropmevariants.length; i++) {
        if (palindropmevariants[i] === stringreverser(palindropmevariants[i])) {
            variantResults.push(true);
           
        } else {
            variantResults.push(false);
            
        } 

    }


    for (let i = 0; i < variantResults.length; i++) {
        if (variantResults[i] === true) {
            palindrome = true;
            console.log('yeah we got a palindrome :');
            break;
           
        } else {
            while (palindrome === false) {
                isPalindrome(searchNextDate());
            }
        }

    }
   
    console.log(variantResults);
   
    
}

const clickhandler = () => {
    
}
 

let bdate = { day: 12, month: 2, year: 2021 }
let newdate = stringConverter(bdate);

checker.addEventListener('click',isPalindrome(newdate));

