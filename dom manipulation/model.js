let view=document.querySelector('.modal-container');
let close = document.querySelector('#close-btn');
let btn=document.getElementById('open-btn');
btn.addEventListener('click',function(){
    if (view.style.display='none'){
        view.style.display='block';
    }
})
close.addEventListener('click',function(){
    if (view.style.display='block'){
        view.style.display='none';
    }
})