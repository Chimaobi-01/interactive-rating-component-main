const _var = [
    document.getElementById("a"),
    document.getElementById("b"),
    document.getElementById("c"),
    document.getElementById("d"),
    document.getElementById("e"),
    document.getElementById("btn"),
    document.getElementById("num"),
    document.getElementById("rate"),
    document.getElementById("greet")


];





_var[0].addEventListener('click', function click(){_var[6].innerHTML = "1"})
_var[1].addEventListener('click', function click(){_var[6].innerHTML = "2"})
_var[2].addEventListener('click', function click(){_var[6].innerHTML = "3"})
_var[3].addEventListener('click', function click(){_var[6].innerHTML = "4"})
_var[4].addEventListener('click', function click(){_var[6].innerHTML = "5"})
_var[5].addEventListener('click', function click(){
    _var[7].classList.add("hide");
    _var[8].classList.remove("hide");
    
})