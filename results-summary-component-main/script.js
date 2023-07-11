/* // Carregar os dados do arquivo data.json
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // Manipular o DOM com os dados carregados
    const parameters = document.querySelector(".parameters");

    data.forEach((item) => {
      const container = document.createElement("div");
      container.classList.add("container");
      container.classList.add(getCategoryClass(item.category.toLowerCase()));

      const svg = document.createElement("svg");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("width", "20");
      svg.setAttribute("height", "20");
      svg.setAttribute("fill", "none");
      svg.setAttribute("viewBox", "0 0 20 20");

      const path = document.createElement("path");
      path.setAttribute(
        "stroke",
        getCategoryColor(item.category.toLowerCase())
      );
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-linejoin", "round");
      path.setAttribute("stroke-width", "1.25");
      path.setAttribute("d", item.icon);

      svg.appendChild(path);

      const p = document.createElement("p");
      p.innerHTML = `
        <span>${item.category}</span>
        <span class="bold">${item.score}</span>
        <span class="total">/ 100</span>
      `;

      container.appendChild(svg);
      container.appendChild(p);
      parameters.appendChild(container);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Função auxiliar para obter a classe CSS com base na categoria
function getCategoryClass(category) {
  switch (category) {
    case "reaction":
      return "container-red";
    case "memory":
      return "container-orange";
    case "verbal":
      return "container-green";
    case "visual":
      return "container-blue";
    default:
      return "";
  }
}

// Função auxiliar para obter a cor com base na categoria
function getCategoryColor(category) {
  switch (category) {
    case "reaction":
      return "#F55";
    case "memory":
      return "#FFB21E";
    case "verbal":
      return "#00BB8F";
    case "visual":
      return "#1125D6";
    default:
      return "";
  }
}
 */
