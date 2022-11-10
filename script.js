window.onload = async () => {
  await fetchDataAndCreate();
};

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjE3NGQ0YmUzZDAwMTU4NDVmZDgiLCJpYXQiOjE2NjgwODQwODUsImV4cCI6MTY2OTI5MzY4NX0.MapzsHsuOI4oDxyaxmbyKlcQABzHZEmYIe6EqNu6KJ8",
  },
};

const fetchDataAndCreate = async () => {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    options
  );
  const list = await response.json();
  console.log(list);
  list.forEach(createProductCard);
};

const createProductCard = (list) => {
  const rowContainer = document.querySelector(".row");
  rowContainer.innerHTML += `<div class="col-sm-6 col-md-4 col-xl-3 mt-2">
          <div class="card">
            <img src=${list.imageUrl} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${list.name}</h5>
              <p class="card-text">${list.brand}</p>
                 <p class="card-text">${list.description}</p>

            <div class="card-buttons">
    <a href="./details.html?eventId=${list._id}"><button class="btn btn-primary view-details-button">View Details</button></a>
    <p class="card-text">${list.price}$</p>
  </div>
            </div>
          </div>
        </div>`;
};

// const viewDetailsButtons = document.querySelectorAll(".view-details-buttons");
// for (let viewDetailsButton of viewDetailsButtons) {
//     viewDetailsButton.addEventListener("click", () => {
//         window.location.search =
//     });
// }
