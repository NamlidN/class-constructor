

function asdf(event) {
    event.preventDefault();
let firstName = document.getElementById('name').value
let lastName = document.getElementById('lastName').value
let Stagename = document.getElementById('Stagename').value
let album = document.getElementById('albs').value
let singels = document.getElementById('single').value
let NETeuro = document.getElementById('Net').value
let age = document.getElementById('age').value
let quote = document.getElementById('quote').value
let output = document.getElementById('result')
let out = document.getElementById('rr')
let Im = document.getElementById('imageURL').value
    class Person {
        constructor(firstName, lastName, Stagename, album, singels, NETeuro, age, quote, Im ) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.Stagename = Stagename;
            this.album = album;
            this.singels = singels;
            this.NETeuro = NETeuro;
            this.age = age;
            this.quote = quote;
            this.Im = Im;
        
        }
        info() {
            return ["<p class='name'>"+this.firstName+this.lastName+"</p>", "<p class='SN'>"+this.Stagename+"</p>", "<p class='alb'>Albums: <br>"+this.album+"</p>", "<p class='sing'>Hits: <br>"+this.singels+"</p>", "<p class='net'>netWorth: <br>"+this.NETeuro+"</p>",'   ',  "<p class='age'>Age: <br>"+this.age+"</p>",].join("           ");
        }
    }

    

    let A = new Person(firstName, lastName, Stagename, album, singels, NETeuro, age, quote, Im );
       output.style.backgroundImage = 'url('+Im+')'
       output.innerHTML =  A.info() ;


}
