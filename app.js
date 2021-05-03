const output = document.getElementById("output");
const btn = document.querySelector("#btn");

(async function () {
  const fetchAPI = fetch(`https://bn-hadith-api.herokuapp.com/hadiths`);
  const response = await fetchAPI;
  const data = await response.json();
  console.log(data.length);
})();

function generateHadith() {
  const random = Math.floor(Math.random() * 30) + 1;
  const fetchAPI = fetch(
    `https://bn-hadith-api.herokuapp.com/hadiths/${random}`
  );
  fetchAPI
    .then((response) => response.json())
    .then((data) => {
      output.innerHTML = `
      <p class="name">${data.name}</p>
      <p class="description">${data.description}</p>
      <p class="info">হাদিসের রেফারেন্সঃ ${data.numbers}</p>
      <p class="info">হাদিসের মানঃ <span class="grade">${data.grade}</span></p>
      
      `;
      const gradeBG = document.querySelector(".grade");
      if (data.grade === "জাল হাদিস") {
        gradeBG.style.backgroundColor = "#f14";
        console.log("red");
      }
    });
}

function init() {
  generateHadith();
  // randomId();
  btn.addEventListener("click", generateHadith);
}
init();
