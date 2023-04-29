const students = [
  { id: 1, name: "Harry Potter", house: "Gryffindor" },
  {
    id: 2,
    name: "Ron Weasley",
    house: "Gryffindor",
  },
  {
    id: 3,
    name: "Hermione Granger",
    house: "Gryffindor",
  },
  {
    id: 4,
    name: "Draco Malfoy",
    house: "Slytherin",
  },
];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const cardsOnDom = (students) => {
  let domString = "";

  students.forEach((student) => {
    const card = `<div class = "card text-center" style="width: 18rem;>
    <h5 class ="card-header">${student.name}</h5>
    <div class="card-body">
      <h5 class="card-text">${student.house}</h5>
    </div>
    </div>`;
    domString += card;
  });
  renderToDom("#app", domString);
};

const showAllButton = document.querySelector("#showAll");

showAllButton.addEventListener("click", () => {
  cardsOnDom(students);
});
