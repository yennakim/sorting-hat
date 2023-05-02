export const card = (object) => {
  return ` <div class ="test">
  <div class= "box1">
  <div class="card text-center firstYears" style="width: 18rem;">
    <h5 class="card-header">${object.name}</h5>
    <div class="card-body">
      <h5 class= "card-text">${object.house}</h5>
      <button class="btn btn-danger" id="delete--${object.id}">Expel</button>

    </div>  <div class ="box2">
  <div class="card text-center voldyArmy" style="width: 18rem;">
    <h5 class="card-header">${object.name}</h5>
    <div class="card-body">
      <h5 class= "card-text">${object.house}</h5>
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>

  `;
};
