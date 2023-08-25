const form = document.querySelector("form");
const query = document.getElementById("query");
const response = document.getElementById("response");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch("/search", {
    method: "POST",
    body: JSON.stringify({ query: query.value }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.text())
    .then((data) => {
      response.innerHTML = data;
    });
});
