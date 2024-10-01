document.querySelector('#movies').addEventListener('click',function(e){
    console.log(e.target.getAttribute('id'));
    const target = e.target;
    if(target.matches('li')){
        target.style.backgroundColor = 'Lightgrey';
    }
})