console.log("jai shree ganesh")
document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
});
let num_btn = document.querySelectorAll('.fun');
num_btn.forEach(button => {
    button.addEventListener('click', () => {
        var input = document.getElementById("input");
        // If equal button, show result
        if (button.id === "fun_equal") {
            result();
        } else {
            input.value += button.textContent;
        }
    });
});

//result function
function result(){
    var n1 = document.getElementById("input").value;
    try {
        var n2 = eval(n1);
        document.getElementById("input").value = n2
        console.log(n2)
    } catch (error) {
        document.getElementById("input").value = "Error"
    }
}
function clear() {
    var inp = document.getElementById("input");
    inp.value = " ";
    console.log(inp)
}
function dele() {
    var back = document.getElementById("input");
    back.value = back.value.slice(0, -1);
}

// Clear button
document.getElementById("clear_btn").addEventListener("click", clear);

// Delete button
document.getElementById("delete_btn").addEventListener("click", dele);
