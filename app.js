//Js
window.onload = function() {
    const box = document.querySelector('.box');
    const txt = document.querySelector('.txt');
    
    txt.addEventListener('transitionstart', function(){
         txt.innerHTML = 'i am aspiring web designer';
    });
    txt.addEventListener('transitionend', function(){
        txt.innerHTML =  txt.innerHTML = 'I am currently AkiraChix student pursuing Diploma in IT &#10084';
        box.style.backgroundColor = '#ff6699';
        
    });
    txt.addEventListener('transitioncancel', function(){
        txt.innerHTML = 'hi!';
    });
    
};



