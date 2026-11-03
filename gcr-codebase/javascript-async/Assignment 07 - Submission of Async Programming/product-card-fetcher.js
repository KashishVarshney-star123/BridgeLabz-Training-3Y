const API_URL = "https://fakestoreapi.com/products";

const status = document.getElementById("status");
const retryButton = document.getElementById("retryButton");
const productGrid = document.getElementById("productGrid");

function logProduct(product) {
  console.log(`Product: ${product.title}`);
  console.log(`Price: $${product.price.toFixed(2)}`);
  console.log(`Image: ${product.image}`);
  console.log("");
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const image = document.createElement("img");
  image.className = "product-image";
  image.src = product.image;
  image.alt = product.title;
  image.loading = "lazy";

  const title = document.createElement("h2");
  title.className = "product-title";
  title.textContent = product.title;

  const price = document.createElement("p");
  price.className = "product-price";
  price.textContent = `$${product.price.toFixed(2)}`;

  card.append(image, title, price);
  return card;
}

async function loadProducts() {
  status.textContent = "Loading products...";
  status.classList.remove("error");
  retryButton.hidden = true;
  productGrid.replaceChildren();

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }

    const products = await response.json();

    products.forEach(logProduct);
    products.forEach((product) => productGrid.appendChild(createProductCard(product)));

    status.textContent = `${products.length} products loaded`;
  } catch (error) {
    console.error("Fetch failed:", error);
    status.textContent = "Failed to load products. Please try again.";
    status.classList.add("error");
    retryButton.hidden = false;
  }
}

retryButton.addEventListener("click", loadProducts);

loadProducts();