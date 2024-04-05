function date_time(id){
    date = new Date;
    h = date.getHours();
    if(h<10)
    {
        h = "0"+h;
    }
    m = date.getMinutes();
    if(m<10)
    {
        m = "0"+m;
    }
    s= date.getSeconds();
    if(s<10)
    {
        s = "0"+s;
    }
    let sRotation = (s * 180)/30;
    let hRotation = ((h % 12)* 180)/6;
    let mRotation = (m * 180)/30;

    document.getElementById("s").innerHTML=''+s;
    document.getElementById("m").innerHTML=''+m;
    document.getElementById("h").innerHTML=''+h;
    setTimeout('date_time("'+"s"+'");','1000');

    document.querySelector('#se').style.transform="rotate("+sRotation+"deg)";
    document.querySelector('#ho').style.transform="rotate("+hRotation+"deg)";
    document.querySelector('#mi').style.transform="rotate("+mRotation+"deg)";
  
    return true;
}
window.onload = date_time('s');
  
   
