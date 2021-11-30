function gred (markah,lokasi){
 /*  document.getElementById(lokasi).innerText=markah
}*/
if(markah<21){
        
        document.getElementById(lokasi).innerText="E"
    }
    else if(markah<41){

        document.getElementById(lokasi).innerText="D"
        
    }
    else if(markah<61){
        
        document.getElementById(lokasi).innerText="C"
    }
    else if(markah<81){

        document.getElementById(lokasi).innerText="B"
    }
    else

    document.getElementById(lokasi).innerText="A"

} 
