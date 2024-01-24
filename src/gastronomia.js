document.addEventListener("DOMContentLoaded", function() {

    fetch("../gastronomia.xml")
        .then((Response) => Response.text())
        .then((data) => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");

            const gastronomia = xmlDoc.querySelectorAll("prato");

            const tableBody = document.getElementById("menuBody");

            gastronomia.forEach((prato) =>{
                const nome = prato.querySelector("nome").textContent;
                const ingredientes = prato.querySelector("ingredientes").textContent;
                const tempPrep = prato.querySelector("tempPrep").textContent;

                const row = document.createElement("tr");
                row.innerHTML = `<td>${nome}</td><td>${ingredientes}</td><td>${tempPrep}</td>`;
                tableBody.appendChild(row);
            })
        })
        .catch((error) => console.error("Erro ao carregar XML:", error));
});