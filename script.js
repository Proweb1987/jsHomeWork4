
function vi() {
    let name = prompt ('введите ваше имя');
    let now = +prompt ('ведите текущий год');
    let age = +prompt ('введите свой год рождения');
    let answer = name + (',') + 'ваш возраст ' + (now - age);
    return answer;
}
console.log(vi());