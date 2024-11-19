
function validateForm(){
  let email = document.querySelector("email")
  let password = document.querySelector("password")
  let coPass = document.querySelector("confirmPassword")
  let gender = document.querySelector("gender")
  let count = document.querySelector("count")
  let terms = document.querySelector("terms")



  if (!email) {
    alert("Please enter your email.");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
  if(coPass !== password){
    alert("your password is incrrect please try again");
    return false;
  }
  if(!gender){
    alert("pleaes choose your grnder");
    return false;
  }
  if (!terms) {
    alert("Please agree to the terms and conditions.");
    return false;
  }
  alert("Registration is completed");
  return false;
}
