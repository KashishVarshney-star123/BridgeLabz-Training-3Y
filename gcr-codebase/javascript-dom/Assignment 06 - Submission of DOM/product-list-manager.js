const productForm = document.getElementById("productForm");
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");
const message = document.getElementById("message");

let editingItem = null;

function showMessage(text, isError = false) {
  message.textContent = text;
  message.classList.toggle("error", isError);
}

function createProductItem(name) {
  const item = document.createElement("li");
  item.className = "product-item";

  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = name;

  const editButton = document.createElement("button");
  editButton.className = "edit-btn";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "Delete";

  item.append(nameSpan, editButton, deleteButton);
  return item;
}

function startEdit(item) {
  if (editingItem && editingItem !== item) {
    saveEdit(editingItem);
  }

  const nameSpan = item.querySelector(".product-name");
  nameSpan.contentEditable = "true";
  nameSpan.focus();

  item.querySelector(".edit-btn").textContent = "Save";
  item.classList.add("editing");
  editingItem = item;
}

function saveEdit(item) {
  const nameSpan = item.querySelector(".product-name");
  const newName = nameSpan.textContent.trim();

  if (newName === "") {
    item.remove();
    showMessage("Empty product removed", true);
  } else {
    nameSpan.textContent = newName;
    nameSpan.contentEditable = "false";
    item.querySelector(".edit-btn").textContent = "Edit";
    item.classList.remove("editing");
    showMessage(`Saved: "${newName}"`);
  }

  editingItem = null;
}

productForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = productInput.value.trim();

  if (name === "") {
    showMessage("Please enter a product name", true);
    return;
  }

  productList.appendChild(createProductItem(name));
  productInput.value = "";
  productInput.focus();
  showMessage(`"${name}" added`);
});

productList.addEventListener("click", (event) => {
  const item = event.target.closest(".product-item");

  if (!item) {
    return;
  }

  if (event.target.classList.contains("delete-btn")) {
    if (editingItem === item) {
      editingItem = null;
    }
    item.remove();
    showMessage("Product deleted");
  } else if (event.target.classList.contains("edit-btn")) {
    if (editingItem === item) {
      saveEdit(item);
    } else {
      startEdit(item);
    }
  }
});

productList.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.classList.contains("product-name")) {
    event.preventDefault();
    saveEdit(event.target.closest(".product-item"));
  }
});

document.addEventListener("click", (event) => {
  if (editingItem && !editingItem.contains(event.target)) {
    saveEdit(editingItem);
  }
});