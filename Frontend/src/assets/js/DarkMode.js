export function Dark(btn){
   
    
    if(btn.value === "Dark Mode"){
        document.getElementById('loginform').style.backgroundColor = 'black';
        document.getElementById('loginform').style.color = 'white';
        btn.value = 'Light Mode';
        btn.style.backgroundColor = "white";
        btn.style.color = 'black';
    }
    else{
        console.log(document.getElementById('loginform'));
        document.getElementById('loginform').style.backgroundColor = 'white';
        document.getElementById('loginform').style.color = 'black';
        btn.value = 'Dark Mode';
        btn.style.backgroundColor = "black";
        btn.style.color = 'white';

    }  
}
 