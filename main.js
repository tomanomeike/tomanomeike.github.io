const person = {
  name: "Obaseki Nosa",
  location: "Lagos"
};

window.localStorage.setItem("user", JSON.stringify(person));
console.log(person);
