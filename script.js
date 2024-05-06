console.log('test');
let toggleButton = document.getElementById("toggle");

const enableDarkMode=()=>{
    document.body.classList.add('darkmode');
}

const disableDarkMode=()=>{
    document.body.classList.remove('darkmode');
}


toggleButton.addEventListener('click',()=>{    
    toggleButton.classList.toggle('bxs-toggle-right');
    document.body.classList.toggle('dark_mode');

})

