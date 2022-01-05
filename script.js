
// function vi() {
//     let name = prompt ('введите ваше имя');
//     let now = +prompt ('ведите текущий год');
//     let age = +prompt ('введите свой год рождения');
//     let answer = name + (',') + 'ваш возраст ' + (now - age);
//     return answer;
// }
// console.log(vi());




function random(min = 1,max = 10) {
   return Math.floor(Math.random() * (max - min) + min);
   
}


let amount = +prompt ('введите количество примеров');

   

for(let i = 0;i < amount;i++) {
   let number1 = random();
   let number2 = random();
   
     
  if(i == 0) {        
  let minus = +prompt (number1 + ' - ' + number2 + ' = ');
  let answer = (number1 - number2) == minus ? ' ваш ответ верный ' : ' ваш ответ не верный ' + minus + '!' + ' правильный ответ ';
  console.log(answer + (number1 - number2));
  }else if(i == 1) {
     let delenie = +prompt (number1 + ' / ' + number2 + ' = ');
     let answer = (number1 / number2) == delenie ? ' ваш ответ верный ' : ' ваш ответ не верный ' + delenie + '!' + ' правильный ответ ';
  console.log(answer + (number1 / number2));
  }else if(i == 2) {
    let umnoj = +prompt(number1 + ' * ' + number2 + ' = ');
    let answer = (number1 * number2) == umnoj ? ' ваш ответ верный ' : ' ваш ответ не верный ' + umnoj + '!' + ' правильный ответ ';
    console.log(answer + (number1 * number2));
  }else if(i == 0 ){
   let primer = +prompt(number1 + ' + ' + number2 + ' = ');
   let answer = (number1 + number2) == primer ? ' ваш ответ верный ' : ' ваш ответ не верный ' + primer + '!' + ' правильный ответ ';
   console.log(answer + (number1 + number2));
  }
}
   

