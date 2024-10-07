//                   THIS IS THE CODE For MAKEING RANDOM PASSWORDS

// var randomValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*";

// console.log(randomValue.length);
// var randomPassword = "";
// for (var i = 0; i< 10; i++){
//     var randomNumbers = Math.round(Math.random() * randomValue.length);
//  randomPassword += randomValue[randomNumbers]; 
// }
// console.log(randomPassword);

//                          THE END

// for (var i = 0; i< 10; i++){
//     var randomNumbers =Math.random()*20;
//     console.log(randomNumbers); 
// }

//                          AUTOMATIC DATE 

//                 DATE FUNCTION WRITTEN  AN OBJECT
// var date = new Date();
// console.log(date);
// console.log(typeof date); "CHECKING IS IT STRING OR NUMBER BUT IT IS OBJECT"
// console.log(date.slice(0 ,10));  "THIS IS SLICE METHOD BUT WON'T WORK COZ ITS OBJECT AND SLICE ONLY WORK FOR STRING AND NUMBER"
// console.log(date.toString().slice(0,10)); "HERE WE FIRST CONVERT  "OBJECT INTO STRING THEN WE APPLIED SLICE METHOD  IT WILL WORK"

//                                    THE END

//                   GETTING DAY,DATE,TIME,MIN.SEC.MONTH,YEAR ETC

// var date = new Date();
// var dayArr = ["Sunday ","Monday" , "Tuesday" , "Wednesday", "Thrusday" , "Friday" ,"Saturday"];
// console.log(dayArr[date.getDay()]);
// ________________________________

// .tolocaltime FOR COMPLETE TIME WITH A.M & P.M
// .tolocaldate FOR COMPLETE DATE
// _________________________________

// var date = new Date("25 feb 2015")
// console.log(date);
// _________________________________

// var userInput = prompt("ENTER YOUR YEAR")
// var date =new Date();
// var result = date.getFullYear()-(userInput);
// console.log(result);
// __________________________________

// var firstRamdan = new Date ("March 1 , 2025").getTime();
// var current = new Date().getTime();
// var diff = firstRamdan - current;
// var month = diff / (1000*60*60*24*30);
// console.log(Math.round(month));
// __________________________________

//                                    THE END