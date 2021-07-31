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

function data() {
  var name = document.getElementById('nameField').value;
  var gender = document.getElementById('genderField').value;
  // var adress = document.getElementById('adressField').value;
  // var education = document.getElementById('educationField').value;
  // var profession = document.getElementById('professionField').value;
  function Plan(name, gender, adress, education, profession) {
    this.name = name;
    this.gender = gender;
    // this.sleepy = adress;
    // this.bashful = education;
    // this.sneezy = profession;
  }

    
  // document.write(name + '<br>');
  // document.write(gender + '<br>');
  // document.write(adress + '<br>');
  // document.write(education + '<br>');
  // document.write(profession + '<br>');
}

// function changeColor(newColor) {
//     var elem = document.getElementById('para').value;
//     elem.style.color = newColor;
//   }


// Youtube video

// https://www.youtube.com/watch?v=I_fVO_NzT2g
// var form = document.getElementById('form');
// form.addEventListner('submit', (event) =>{
//   event.preventDefault();
//   const request = new XMLHttpRequest();
//   request.onload = function () {
//     console.log(request.responseText);
//   };
// });




// youtube video

// https://www.youtube.com/watch?v=S944-epyYuI

// var form = document.getElementById('form')
// form.addEventListner('submit',function(event){
//   event.preventDefault()
//   var name = document.getElementById('nameField').nodeValue
//   console.log(name)
// })



// let user = document.getElementById("username").value;
// var gender = document.getElementById("gender").value
// var age = document.getElementById("adress").value
// var education = document.getElementById("education").value
// var profession = document.getElementById("profession").value

// console.log(user);
// function Citizen(name, gender, adress, education, profession) {
//     this.name = name;
//     this.gender = gender;
//     this.adress = adress;
//     this.education = education;
//     this.profession = profession;
// }

 