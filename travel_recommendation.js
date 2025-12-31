const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const resultsBox = document.getElementById("results");

// Datos simulados de recomendaciones
const recommendations = [
    "Paris - City of Love",
    "Tokyo - Modern and Traditional",
    "New York - The Big Apple",
    "Sydney - Beaches and Opera House",
    "Rome - History and Culture",
    "Chile - Patagonia Adventure"
];

// Ejecutar búsqueda
searchBtn.addEventListener("click", () => {
    const keyword = searchInput.value.toLowerCase().trim();
    resultsBox.innerHTML = "";

    if (keyword === "") {
        resultsBox.style.display = "none";
        return;
    }

    const results = recommendations.filter(item =>
        item.toLowerCase().includes(keyword)
    );

    if (results.length === 0) {
        resultsBox.innerHTML = "<p>No recommendations found.</p>";
    } else {
        results.forEach(item => {
            const p = document.createElement("p");
            p.textContent = item;
            resultsBox.appendChild(p);
        });
    }

    resultsBox.style.display = "block";
});

// Restablecer búsqueda
clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    resultsBox.innerHTML = "";
    resultsBox.style.display = "none";
});
