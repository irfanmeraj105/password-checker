const showpw = document.querySelector(".show");
const createpw = document.querySelector("#createpw");
const confirmpw = document.querySelector("#confirmpw");
const submitbtn = document.querySelector(".btn");
const alerticon = document.querySelector(".alerticon");
const alerttext = document.querySelector(".alerttext");

showpw.addEventListener("click", () => {
  if (createpw.type === "password" && confirmpw.type === "password") {
    createpw.type = "text";
    confirmpw.type = "text";
    showpw.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    createpw.type = "password";
    confirmpw.type = "password";
    showpw.classList.replace("fa-eye", "fa-eye-slash");
  }
});
createpw.addEventListener("input", () => {
  let val = createpw.value.trim();
  if (val.length >= 8) {
    confirmpw.removeAttribute("disabled");
    submitbtn.removeAttribute("disabled");
    submitbtn.classList.add("active");
  } else {
    confirmpw.setAttribute("disabled", true);
    submitbtn.setAttribute("disabled", true);
    submitbtn.classList.remove("active");
    confirmpw.value = "";
    alerttext.style.color = "#a6a6a6";
    alerttext.innerText = "Enter at least 8 characters";
    alerticon.style.display = "none";
  }
});

submitbtn.addEventListener("click", () => {
  if (createpw.value === confirmpw.value) {
    alerttext.innerText = "Password matched";
    alerticon.style.display = "none";
    alerttext.style.color = "#4070F4";
  } else {
    alerttext.innerText = "Password didn't matched";
    alerticon.style.display = "inline";
    alerttext.style.color = "#D93025";
  }
});

