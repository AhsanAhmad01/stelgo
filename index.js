
function side_bar() {

    var e = document.getElementById("side_bar");
    var icon = document.getElementById("menu");
    
   
    if (e.style.display == "flex")
    {
        e.style.display = "none";
   
        icon.setAttribute('src', './media/icons/three_v.png');
        
    }    
    else {
        e.style.display = "flex";
        icon.setAttribute('src', './media/icons/three_h.png');
        

        
    }

   

}