let people = 1; 
let handshake = 0;

while (handshake != 120){
    people += 1;
    handshake += (people - 1);
}
console.log(people);
alert(people)