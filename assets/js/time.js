function timingTime(){
  let start = '2023-5-20 00:00:00'
  let startTime = new Date(start).getTime()
  let currentTime = new Date().getTime()
  let difference = currentTime - startTime
  let m =  Math.floor(difference / (1000))
  let mm = m % 60  // 秒
  let f = Math.floor(m / 60)
  let ff = f % 60 // 分钟
  let s = Math.floor(f/ 60) // 小时
  let ss = s % 24
  let day = Math.floor(s  / 24 ) // 天数
  return "DH-Studios工作室已创立" + day + "天" + ss + "时" + ff + "分" + mm +'秒'
}
setInterval(()=>{
  document.getElementById('time').innerHTML = timingTime()
},1000)