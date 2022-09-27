const checkBox = document.querySelector('#checkbox')

let setActiveStyleSheet = function (title) {
let css = `link[rel="alternate stylesheet"]`;
let styleSheets = document.querySelectorAll(css);
styleSheets.forEach(sheet => sheet.disabled = true);
let selector = `link[title="${title}"]`;
let activeSheet = document.querySelector(selector);
activeSheet.disabled = false;
localStorage.setItem("theme", title);
}

let savedSheet = localStorage.getItem("theme");

if(savedSheet){
    setActiveStyleSheet(savedSheet);
    if(savedSheet === "darkmode"){
        checkBox.checked = true;
    }
    
}else{
    setActiveStyleSheet("lightmode")
}


checkBox.addEventListener('click', (event)=>{
        console.log(event.target.checked)
        if(event.target.checked){
            setActiveStyleSheet("darkmode");
        }else{
            setActiveStyleSheet("lightmode");
        }
        
 
})


/* const checkBox = document.querySelector('#checkbox');

checkBox.addEventListener('change', ()=>{
    document.body.classList.toggle('darkmode');

}) */