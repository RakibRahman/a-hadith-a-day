const output = document.getElementById("output");
const btn = document.querySelector("#btn");

async function generateHadith() {
  const api = "https://bn-hadith-api.herokuapp.com/hadiths";
  const url = fetch(`https://bn-hadith-api.herokuapp.com/hadiths`);
  const response = await url;
  const idNumbers = await response.json();
  const index = idNumbers.length;
  const random = Math.floor(Math.random() * index) + 1;

  const fetchHadith = await fetch(`${api}/${random}`);
  const data = await fetchHadith.json();
  output.innerHTML = `
  <p class="name">${data.name}</p>
  <p class="description">${data.description}</p>
  <p class="info">হাদিসের রেফারেন্সঃ ${data.references}</p>
  <p class="info">হাদিসের মানঃ <span class="grade">${data.grade}</span></p>
  
  `;

  const gradeBG = document.querySelector(".grade");
  if (
    data.grade === "জাল হাদিস" ||
    data.grade === "দুর্বল হাদিস" ||
    data.grade === "মুনকার"
  ) {
    gradeBG.style.backgroundColor = "#f85b24";
  } else if (data.grade === "নির্ণীত নয়") {
    gradeBG.style.backgroundColor = "#f0ad4e";
  }
}

function init() {
  generateHadith();
  btn.addEventListener("click", generateHadith);
}
init();
