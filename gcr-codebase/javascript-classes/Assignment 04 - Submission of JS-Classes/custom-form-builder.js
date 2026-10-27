class FormBuilder {
  constructor(containerId, fields) {
    this.container = document.getElementById(containerId);
    this.fields = fields;
    this.form = null;
  }

  render() {
    const fieldsHtml = this.fields
      .map(
        (field, index) => `
          <div>
            <label for="field-${index}">${field.label}</label><br>
            <input type="${field.type}" id="field-${index}">
          </div>
          <br>`
      )
      .join("");

    this.container.innerHTML = `
      <form id="dynamicForm">
        ${fieldsHtml}
        <button type="submit">Submit</button>
      </form>`;

    this.form = this.container.querySelector("#dynamicForm");

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = this.getFormData();
      console.log("Form data:", data);
      document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    });
  }

  getFormData() {
    const data = {};

    this.fields.forEach((field, index) => {
      const input = this.form.querySelector(`#field-${index}`);
      data[field.label] = input.type === "checkbox" ? input.checked : input.value;
    });

    return data;
  }
}

const fields = [
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" },
  { type: "number", label: "Age" },
];

const builder = new FormBuilder("formContainer", fields);
builder.render();