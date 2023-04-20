const _var = [
    document.getElementById("a"),
    document.getElementById("b"),
    document.getElementById("c"),
    document.getElementById("d"),
    document.getElementById("e"),
    document.getElementById("btn"),
    document.getElementById("num"),
    document.getElementById("rate"),
    document.getElementById("greet"),

];





_var[0].addEventListener('click', function click() {
    _var[6].innerHTML = "1"
    setDefault();
    _var[0].classList.add("light");
    _var[0].classList.remove("circle");


})
_var[1].addEventListener('click', function click() {
    _var[6].innerHTML = "2"
    setDefault();
    _var[1].classList.add("light");
    _var[1].classList.remove("circle");

})
_var[2].addEventListener('click', function click() {
    _var[6].innerHTML = "3"
    setDefault();
    _var[2].classList.add("light");
    _var[2].classList.remove("circle");

})
_var[3].addEventListener('click', function click() {
    _var[6].innerHTML = "4"
    setDefault();
    _var[3].classList.add("light");
    _var[3].classList.remove("circle");

})
_var[4].addEventListener('click', function click() {
    _var[6].innerHTML = "5"
    setDefault();
    _var[4].classList.add("light");
    _var[4].classList.remove("circle");

})
_var[5].addEventListener('click', function click() {
    _var[7].classList.add("hide");
    _var[8].classList.remove("hide");

})







function setDefault() {
    _var[0].className = "circle";
    _var[1].className = "circle";
    _var[2].className = "circle";
    _var[3].className = "circle";
    _var[4].className = "circle";

}