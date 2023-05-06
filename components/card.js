export const card = (object) => {
  return ` <div class ="test">
  <div class= "box1">
  <div class="card text-center" style="width: 18rem;">
    <h5 class="card-header">${object.name}</h5>
    <div class="card-body">
      <h5 class= "card-text">${object.house}</h5>
      <button class="btn btn-danger" id="delete--${object.id}">Expel</button>

    </div>  
  </div>
  </div>
  </div>
 `;
};
