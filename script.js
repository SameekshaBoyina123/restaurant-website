function validateForm() {

  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var date = document.getElementById("date").value;

  if(name == "") {
    alert("Enter your name");
    return false;
  }

  if(phone.length != 10) {
    alert("Enter valid 10 digit phone");
    return false;
  }

  if(date == "") {
    alert("Select date");
    return false;
  }

  alert("Table Booked Successfully!");
  return true;
}
