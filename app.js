var cardHolder = document.getElementsByClassName("card-holder");
var card = document.getElementsByClassName("card");
var pop = document.getElementsByClassName("pop");
var hero = document.getElementsByClassName("hero");
var Cname = document.getElementsByClassName("name");
var info = document.getElementsByClassName("info");
function createCard(x) {
    for (i = 1; i <= x; i++)
    cardHolder[0].innerHTML += '<div class ="card"><p class="name"></p></div>';
};
createCard(500);
var l = card.length;
for (i = 0; i < l; i++) {
    card[i].addEventListener( "click" , function() {
        info[0].innerHTML = "Loading...";
        cardHolder[0].style.pointerEvents = "none";
        hero[0].style.backgroundColor = event.target.style.backgroundColor;
        pop[0].style.border = "10px solid " + hero[0].style.backgroundColor;
        hero[0].innerHTML = event.target.innerHTML;
        pop[0].style.top = "50%";
        cardHolder[0].style.filter = "blur(10px)";
        getdata(hero[0].style.backgroundColor,info[0]);
    });
};
pop[0].addEventListener( "click" , function() {
    pop[0].style.top = "-50%";
    cardHolder[0].style.filter = "blur(0px)";
    cardHolder[0].style.pointerEvents = "auto";
});
function gen() {
    let symbols , color;
    symbols = "0123456789ABCDEF";
    color = "#";
    for (let i = 0; i<6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16 )];
    };
    return color;
};
function nameFinder(hex,i) {
    card[i].style.backgroundColor = hex;
    fetch("https://www.thecolorapi.com/id?hex=" + hex.substring(1,10))
    .then(res => res.json())
        .then( function(data) {
                    Cname[i].innerHTML = data.name.value;
                    Cname[i].style.color = data.contrast.value;
                }
        );
};
for (i = 0; i < l; i++) {
    nameFinder(gen(),i);
};
function getdata(colorCode,element) {
    fetch("https://www.thecolorapi.com/id?rgb=" + colorCode)
    .then(res => res.json())
    .then( function(data) {
                var eru = data.rgb.value +"<br><br>"+ data.hex.value +"<br><br>"+ data.cmyk.value;
                element.innerHTML = eru;
            }
    );
};