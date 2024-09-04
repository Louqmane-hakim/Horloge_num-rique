const horloge = document.querySelector('.Horloge');

horloge.addEventListener('onload' , time);

function time(){
    let date = new Date();
    let heures = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();
    let millisecondes = date.getMilliseconds();

    if(heures==0){
        h=24;
    }
    heures=(heures<10) ? "0" + heures:heures
    minutes=(minutes<10) ? "0" + minutes:minutes
    secondes=(secondes<10) ? "0" + secondes:secondes
    millisecondes=(millisecondes<10) ? "0" + millisecondes:millisecondes

    let time = `${heures} : ${minutes} : ${secondes} : ${millisecondes}`;

    horloge.innerText=time
}
setInterval(time , 1000);