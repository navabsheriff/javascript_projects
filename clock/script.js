function displayTime(){
    let dateTime=new Date()
    let hr=dateTime.getHours()
    let min=padZero(dateTime.getMinutes())
    let sec=padZero(dateTime.getSeconds())
    if(hr>12){
        hr=hr-12
       let ampm= document.getElementById('ampm').innerHTML='PM'
    }
document.getElementById('hours').innerHTML=padZero(hr)
document.getElementById('minutes').innerHTML=min
document.getElementById('seconds').innerHTML=sec


}
function padZero(num){
    return num<10?"0"+num:num
}
setInterval(displayTime,500)