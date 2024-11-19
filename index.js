// ----------------------1------------------
const message1 = 'first message';
const message2 = 'second messag';
if (message1 && message2) {
    console.log("Обидва поля заповнені")
} else {
    console.log("Не всі поля заповнені")
}
// -----------------------2-----------------
const firstNumber = 3;
const secondNumber = 11;
if ((firstNumber + secondNumber) > 10) {
    console.log("Сума більша за 10")


} else {
    console.log("Сума менша або дорівнює 10")

}
// ----------------------3-----------------
const myText = 'Some info';
if (myText.includes('JavaScript')) {
    console.log("Текст містить слово JavaScript")
} else {
    console.log('Текст не містить слово JavaScript')
}
// ----------------4-----------------

const myNumber = 13;
if(myNumber > 10 && myNumber < 20){
    console.log('Число входить в діапазон від 10 до 20')
}else{
    console.log('Число не входить в діапазон від 10 до 20')
}
// -----------------5----------
const userName = 'Incognitus';
const userEmail = 'myemail@gmail.com';
const userPassword = '2444666668888888';
if(userName.length >= 3 && userEmail.includes("@") && userPassword.length >= 6){
console.log('Перенаправлення на іншу сторінку')
}else{
    console.log('Помилка: неправильне заповнення.')
}