/*function loadDoc(){
  var oReq = new XMLHttpRequest();
  oReq.onload = changeStuff;
  oReq.open("get", "stuff.txt?something=<p>New Paragraph</p>", true)
  oReq.send()
}
function changeStuff(){
  document.write(this.responseText);
  console.log(this.responseText.averageKid);
}*/
$("btn").click(function(){$("putStuff").load("stuff.txt")});
