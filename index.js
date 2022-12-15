const names= [];

function writeCards(names,events) {


 for(let i=0;i<names.length;i++) {   
names[i]=(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);

}
return names;

}
writeCards(['Guadalupe', 'Ollie', 'Aki', ],"surprise");

let down=[11];

function countDown(down){
    debugger;
    while(down >=0){
        console.log(down--);
}
return down;
}
countDown(down);
