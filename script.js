const submit = document.querySelector('button[type="button"]');

submit.addEventListener("click", function () {
  const createP = document.createElement("p");
  const nameForm = document.getElementById('name')
  const nameValue = nameForm.value;
  const skillSelect = document.getElementById("skill");
  const skillValue = skillSelect.value;


  const header = document.querySelector('header');
  const h2 = document.querySelectorAll('h2')
  const footer = document.querySelector('footer');
  footer.style.backgroundColor = "#ffb11b"
  header.style.backgroundColor = "#ffb11b";
  for(let i = 0; i< h2.length;i++){
    h2[i].style.color = "#ffb11b"
  }
  const textP = document.createTextNode(`Hello, ${nameValue}! You've selected ${skillValue}`);
  createP.appendChild(textP);
  submit.after(createP);
});
