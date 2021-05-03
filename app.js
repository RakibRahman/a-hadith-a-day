const output = document.getElementById("output");
const btn = document.querySelector("#btn");

function outputArea() {
  const random = Math.floor(Math.random(30 - 1) * 10);
  console.log(random);

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

function generateHadis() {
  output.innerHTML = `<p>আবূ হুরায়রা (রাঃ) থেকে বর্ণিতঃ</p>

<p>তিনি বলেন, রাসূলুল্লাহ (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম) বলেছেন, “যে ব্যাক্তি জ্ঞানার্জনের জন্য কোন পথে চলে, আল্লাহ্‌ তার জন্য জান্নাতের পথ সহজ করে দেন।”</p>

<p>হাদিসের রেফারেন্সঃ মুসলিম ২৬৯৯</p>

<p>হাদিসের মানঃ সহিহ হাদিস</p>`;
}

function init() {
  generateHadis();
  btn.addEventListener("click", outputArea);
}
init();
