// Task 1

// var itemsArray = [
//     { name: "juice", price: "50", quantity: "3" },
//     { name: "cookie", price: "30", quantity: "9" },
//     { name: "shirt", price: "880", quantity: "1" },
//     { name: "pen", price: "10", quantity: "2", }
// ];

// var totalOfJuice = itemsArray[0].price * itemsArray[0].quantity
// var totalOfCookie = itemsArray[1].price * itemsArray[1].quantity
// var totalOfShirt = itemsArray[2].price * itemsArray[2].quantity
// var totalOfPen = itemsArray[3].price * itemsArray[3].quantity
// var totalAmount = totalOfJuice + totalOfCookie + totalOfShirt + totalOfPen
// document.write("Total of Juice: " + totalOfJuice + "<br>")
// document.write("Total of Cookie: " + totalOfCookie + "<br>" )
// document.write("Total of Shirt: " + totalOfShirt + "<br>")
// document.write("Total of Pen: " + totalOfPen + "<br>" )
// document.write("Total Amount: " + totalAmount)

// Task 2

// var item = {
//     name : "Hamza",
//     email: "shah@gmail.com",
//     pasword: "******",
//     age: 21,
//     gender: "Male",
//     city: "karachi",
//     country: "Pakistan"

// };
// if ("age" in item && "country" in item === true) {
//     document.write("Age and country is in object"+ "<br>")
// }
// else{
//     document.write("nothing" + "<br>")
// }
// if ("firstName" in item && "lastName" in item === true) {
//     document.write("First name and Last name is in object" + "<br>")
// }
// else {
//     document.write("First name and Last name is not in object" + "<br>")
// }

// Task 3

// function Citizen (name, age, city, mail, country ) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.mail = mail;
//     this.country = country;
// }
// var citizen1 = new Citizen ("Hamza", 19, "Karachi", "shah@gmail.com", "Pakistan")

// Task 4

let citizenData = [];
const addData = () => {
  let citizenName = document.getElementById("nameField").value;
  let gender = document.getElementById('male').value;
  console.log(gender)
//  let female = document.getElementById('female').value;
//   let gender;
  if (gender.checked) {
    gender = 'male'
  }
  else {
    gender = 'female'
  }
  let adress = document.getElementById('adressField').value;
  let education = document.getElementById('educationField').value;
  let arrOfEducation = [];
  // for (var i = 0; i < education.lenght; i++) {
  //   if (education[i].checked) {
  //     arrOfEducation[i].push(education[i].value)
  //   }
  // } 
  let profession = document.getElementById('professionField').value;
  // let arrOfProfession = [];
  // for (var i = 0; i < profession.lenght; i++) {
  //   if (profession[i].checked) {
  //     arrOfProfession[i].push(profession[i].value)
  //   }
  // } 
 
  let userData = {
    "name" : citizenName,
    "gender" : gender,
    "adress": adress,
    "education" : education,
    "profession" : profession
  }
  citizenData.push(userData);
  console.log(citizenData);
}

const citizens = () => {
  let population = document.getElementById('population');
  console.log(population);
  population.innerHTML = `Population of town ${citizenData.length}`;
}







// Practice

// var form = document.getElementById("form");
// function handleForm() { 
//   addData();
//   citizens();
// };

// function data () {
  // addData();
  // citizens();
// };


// let data = document.querySelector('.submit');
// // let data = document.getElementById("submit");
// data.addEventListener("click", function () {
//   addData();
//   citizens();
// });


// document.getElementById('submit').addEventListener("submit", (event) => {
//     event.preventDefault()
//     addData();
//     citizens();
//   }) 


// let data = document.querySelector("s");
// data.addEventListener("click", (event) => {
//   event.preventDefault()
//   addData();
//   citizens();
// }) 