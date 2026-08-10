function generateRandomPassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    const lowerCaseChars="abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="!@#$%^&*()_+{}:<>?/.,';[]-=`~";

    let allowedChars="";
    let password="";

    allowedChars += includeLowerCase? lowerCaseChars:""; //are lowercase characters allowed? if true then concatenate them in the allowedChars string otherwise concatenate empty string
    allowedChars += includeUpperCase? upperCaseChars:"";
    allowedChars += includeNumbers? numberChars:"";
    allowedChars += includeSymbols? symbolChars:"";

    if(length<=0){
        return `(password length must be atleast 2)`;
    }
    if(allowedChars.length==0){
        return `(there must be atleast 1 character in your password)`;
    }
    for(let i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password+=allowedChars[randomIndex];
    }
    return password;
}

//generating a password
const passwordLength=10;
const lowercase=true;
const uppercase=true;
const number=true;
const symbol=true;

const password=generateRandomPassword(passwordLength, lowercase, uppercase, number, symbol);

console.log(`Generated Password:${password}`);
