function loadDoc(){
  var oReq = new XMLHttpRequest();
  oReq.onload = changeStuff;
  oReq.open("get", "stuff.txt", true)
  oReq.send()
}
function changeStuff(){
  console.log(this.responseText);
}
