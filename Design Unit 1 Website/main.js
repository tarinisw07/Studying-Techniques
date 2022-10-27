var i=1;
function enter(){
    if(i<=4){
        text=document.getElementById("ip").value;
        document.getElementById("t"+i).innerHTML=text;
        document.getElementById("ip").value=null;
        i++
    }   
    else{
        i=1;
    }
}
function add(){
    search=document.getElementById("s1").value;
    searchitem="https://www.google.com/search?q="+search;
    window.location=searchitem;
}