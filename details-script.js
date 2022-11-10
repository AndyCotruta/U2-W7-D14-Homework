const eventId = new URLSearchParams(window.location.search).get("eventId");
console.log("Product Id is: " + eventId);

window.onload = async () => {
  await fetchData();
  createProductCard();
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
    "https://striveschool-api.herokuapp.com/api/product/" + eventId,
    options
  );
  const productObject = await response.json();
  console.log(productObject);
  createProductCard(productObject);
};

const createProductCard = (productObject) => {
  const rowContainer = document.querySelector(".row");
  rowContainer.innerHTML = `
         <div class="col-6">
                
           
    <div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src=${productObject.imageUrl} alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Name: ${productObject.name}</h5>
          <p class="card-text">Brand: ${productObject.brand}</p>
          <p class="card-text">Price: ${productObject.price}</p>
        <p class="card-text">Description: ${productObject.description}</p>
        <p class="card-text"><small class="text-muted">Id: ${productObject._id}</small></p>
      </div>
    </div>
  </div>
   </div>
</div>`;
};
