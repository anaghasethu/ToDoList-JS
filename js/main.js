const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const add = document.getElementById("addBtn");
const refresh = document.getElementById("refBtn");


var LIS, id=0;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0');



// var a = new Date();
            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
            var r = month[today.getMonth()];










today = dd + '  ' + '  ' + r ;

dateElement.innerText = today;

add.addEventListener("click", function() {
  var todo = input.value;
  if (todo != "") {
      var item = '<li class="item"><i class="fa fa-circle-thin co" onclick=donetodo(' + id + ') id="';
      item = item + id;
      item = item + '"></i><p class="text">';
      item = item + todo;
      item = item + '</p><i class="fa fa-trash-o de" onclick="del(';
      item = item + id;
      item = item + ')"></i></li>';
      list.innerHTML = list.innerHTML + item;
      input.value = "";
      id++;
  }
});

refresh.addEventListener("click", function() {
  list.innerHTML = "";
});

function del(index){
  document.getElementById(index).parentNode.remove();

}

function donetodo(index) {
  var temp = document.getElementById(index);
  if (temp.classList.contains("fa-circle-thin")) {
    temp.classList.remove("fa-circle-thin");
    temp.classList.add("fa-check-circle");
    temp.parentNode.getElementsByClassName("text")[0].classList.add("lineThrough");
  }else {
    temp.classList.remove("fa-check-circle");
    temp.classList.add("fa-circle-thin");
    temp.parentNode.getElementsByClassName("text")[0].classList.remove("lineThrough");
  }
}

var ip = document.getElementById("input");
ip.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("addBtn").click();
  }
});
