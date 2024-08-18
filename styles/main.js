function gir() {
       
    let nums = document.getElementById('gir').className; 
    if(nums == 'gir_1') {document.getElementById('gir').className='gir_2';}  
    if(nums == 'gir_2') {document.getElementById('gir').className='gir_3';}  
    if(nums == 'gir_3') {document.getElementById('gir').className='gir_1';} 
     
}
setInterval(gir, 500); 

let now = new Date();
const december = 11

function newYears () {
    if(now.getMonth()>= december || now.getMonth() == 0)
    {       
       
    }
    else{
         document.getElementById("gir").style.display="none"
        /* alert("Дата не новогодняя") */
    }
}
newYears()
  


    
