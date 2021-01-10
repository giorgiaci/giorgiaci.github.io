function toggleTheme() { 
    
    var theme = document.getElementsByTagName('link')[0]; 

    if (theme.getAttribute('href') == '/css/style.css') { 
        theme.setAttribute('href', '/css/dark.css'); 
    } else { 
        theme.setAttribute('href', '/css/style.css'); 
    } 
} 

function myFunctionKey() {
    var x = document.getElementById("more");
    
         if (x.style.display === "block") {
            x.style.display = "block";
            document.getElementById("explain").style.display = "block";
          }else if (window.matchMedia("(min-width: 992px)").matches){
            x.style.display = "block";
            document.getElementById("explain").style.display = "block";
          } else {
            x.style.display = "none";
            document.getElementById("explain").style.display = "block";
          }
        }
        //&& (window.matchMedia("(min-width: 900px)").matches))
    
function myFunction() {
    var x = document.getElementById("reason");
   
    if (x.style.display === "none") {
      x.style.display = "block";
     
    }
    else {
      x.style.display = "none";
     
    }
}