const validate = () => {
  let email = document.forms["loginForm"]["email"].value;

  if (email.includes("@miraclesoft.com")) {
    document.getElementById("errorAlert").style.display = "none";
    return true;
  } else {
    document.getElementById("errorAlert").style.display = "block";
    return false;
  }
};
