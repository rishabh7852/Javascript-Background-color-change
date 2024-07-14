const button = document.querySelectorAll('.button');
// console.log(button);
const body = document.querySelector("body")


button .forEach(function (button) {
// console.log(button);
 button.addEventListener('mouseover', function(colorchange){
    console.log(colorchange);
    console.log(colorchange.target);
    if(colorchange.target.id === 'yellow'){
        body.style.backgroundColor = colorchange.target.id
    }
    if(colorchange.target.id === 'Blue'){
        body.style.backgroundColor = colorchange.target.id
    }
    if(colorchange.target.id === 'skyblue'){
        body.style.backgroundColor = colorchange.target.id
    }
    if(colorchange.target.id === 'green'){
        body.style.backgroundColor = colorchange.target.id
    } 
    if(colorchange.target.id === 'salmon'){
        body.style.backgroundColor = colorchange.target.id
    } 
        
  

 })
    
});