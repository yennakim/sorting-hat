import { card } from "./components/card.js";
import { students } from "./data/exampleData.js";
import { renderToDom } from "./renderToDom.js";
import { filterButtons } from "./components/filterButtons.js";

// RENDER FORM ON DOM ONCE BUTTON CLICKED
const showForm = () => {
  const formString = `<div class="card">
  <div class="card-body text-center">  
  <label for="floatingInput">Student Name:</label>
  <input
  type="text"
  class="form-control me-2"
  id="studentName"
  placeholder="Student Name"
  required
/>
         <button id="addStudent" class="btn btn-danger mb-3">Sort</button>
      </div>
         </div>
  </div>
`;
  renderToDom("#form", formString);
};

const showFormBtn = document
  .querySelector("#showFormBtn")
  .addEventListener("click", showForm);

// FORM FUNCTIONALITY
const form = document.querySelector("#form");

const addStudent = (e) => {
  e.preventDefault();

  const newStudentObj = {
    id: students.length + 1,
    name: document.querySelector("#studentName").value,
    house: randomHouse(),
  };
  students.push(newStudentObj);
  cardsOnDom(students);
  form.reset();
};

form.addEventListener("click", addStudent);

const randomHouse = () => {
  const randomNum = Math.floor(Math.random() * 4);
  switch (randomNum) {
    case 0:
      return "Gryffindor";
      break;
    case 1:
      return "Hufflepuff";
      break;
    case 2:
      return "Ravenclaw";
      break;
    case 3:
      return "Slytherin";
      break;
  }
};

// RENDER CARDS ON DOM
const cardsOnDom = (students) => {
  let domString = "";
  students.forEach((student) => {
    domString += card(student);
  });
  renderToDom("#app", domString);
};

// FILTER FUNCTION
const filter = (students, houseString) => {
  const houseArray = [];

  for (const student of students) {
    if (student.house === houseString) {
      houseArray.push(student);
    }
  }
  return houseArray;
};

// CREATE

// DELETE //

const app = document.querySelector("#app");

app.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    let voldyArmy = [];
    const [, id] = e.target.id.split("--");
    const index = students.findIndex((e) => e.id === Number(id));

    students.splice(index, 1);
    console.log(students);
    cardsOnDom(students);
  }
});

// Target buttons
const showAllButton = document.querySelector("#showAll");
const showGryffindor = document.querySelector("#gryffindor");
const showHufflepuff = document.querySelector("#hufflepuff");
const showRavenclaw = document.querySelector("#ravenclaw");
const showSlytherin = document.querySelector("#slytherin");

showAllButton.addEventListener("click", () => {
  cardsOnDom(students);
});

showGryffindor.addEventListener("click", () => {
  const gryffindorHouse = filter(students, "Gryffindor");
  cardsOnDom(gryffindorHouse);
});

showHufflepuff.addEventListener("click", () => {
  const hufflepuffHouse = filter(students, "Hufflepuff");
  cardsOnDom(hufflepuffHouse);
});

showRavenclaw.addEventListener("click", () => {
  const ravenclawHouse = filter(students, "Ravenclaw");
  cardsOnDom(ravenclawHouse);
});

showSlytherin.addEventListener("click", () => {
  const slytherinHouse = filter(students, "Slytherin");
  cardsOnDom(slytherinHouse);
});

const startApp = () => {
  // cardsOnDom(students);
};
startApp();
