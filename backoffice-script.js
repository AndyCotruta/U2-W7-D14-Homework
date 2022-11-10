const productId = new URLSearchParams(window.location.search).get("productId");

const endpoint = productId
  ? "https://striveschool-api.herokuapp.com/api/product/" + productId
  : "https://striveschool-api.herokuapp.com/api/product/";
const method = productId ? "PUT" : "POST";

window.onload = async () => {
  if (productId) {
    const response = await fetch(endpoint);
    const eventObj = await response.json();

    const { name, description, brand, imageUrl, price } = newProductObj;

    console.log(time);

    document.getElementById("product-name").value = name;
    document.getElementById("product-description").value = description;
    document.getElementById("product-brand").value = brand;
    document.getElementById("product-image").value = imageUrl;
    document.getElementById("product-price").value = price;

    const deleteBtn = document
      .querySelector(".btn-danger")
      .classList.remove("d-none");
  }
};

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const newProductObject = {
      name: document.getElementById("product-name").value,
      description: document.getElementById("product-description").value,
      brand: document.getElementById("product-brand").value,
      imageUrl: document.getElementById("product-image").value,
      price: document.getElementById("product-price").value,
    };
    console.log(newProductObject);

    const response = await fetch(endpoint, {
      method: method,
      body: JSON.stringify(newProductObject),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjE3NGQ0YmUzZDAwMTU4NDVmZDgiLCJpYXQiOjE2NjgwODQwODUsImV4cCI6MTY2OTI5MzY4NX0.MapzsHsuOI4oDxyaxmbyKlcQABzHZEmYIe6EqNu6KJ8",
      },
    });
    if (!response.ok)
      throw new Error("generic error, something wrong with the fetch");

    const event = await response.json();
    if (productId) {
      alert("Product with id: " + event._id + "got edited successfully");
    } else {
      alert("Product created successfully, id is:  " + event._id);
    }
  } catch (error) {
    alert("Something wrong");
  }
};

const addButton = document.getElementById("add-order-button");
addButton.addEventListener("click", handleSubmit);
