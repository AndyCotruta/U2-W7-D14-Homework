window.onload = async () => {
  await fetchData();
};

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjE3NGQ0YmUzZDAwMTU4NDVmZDgiLCJpYXQiOjE2NjgwODQwODUsImV4cCI6MTY2OTI5MzY4NX0.MapzsHsuOI4oDxyaxmbyKlcQABzHZEmYIe6EqNu6KJ8",
  },
};

const fetchData = async () => {
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
    <button class="btn btn-primary add-button">View Details</button>
    <p class="card-text">${list.price}$</p>
  </div>
            </div>
          </div>
        </div>`;
};
