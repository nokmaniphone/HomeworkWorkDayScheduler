
window.onload = function () {
  var d = new Date();
  var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var currentday = d.getDate();
  var month = d.getMonth();   //0-11
  var year = d.getFullYear(); //2020

  document.getElementById("calendar-month-year").innerHTML = currentday +" " +month_name[month] + " " + year;
  
}


