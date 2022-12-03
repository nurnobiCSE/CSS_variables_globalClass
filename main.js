// execute script after page lxoad
window.onload = function digital_fn(){

    // toggle button
    let toogle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");
    
    toogle.addEventListener('click',function(event){
        // console.log(toogle)
        collapse.classList.toggle('active')

    });
}