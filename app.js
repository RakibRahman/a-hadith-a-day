let arr = [
  {
    id: 0,
    quality: "real",
    para: "kill me at the end",
  },
  {
    id: 1,
    quality: "original",
    para: "uuuuuuuuuuuuuuuu",
  },
  {
    id: 2,
    quality: "non existent",
    para: "yyyyyyyyyyyyy",
  },
  {
    id: 3,
    quality: "real",
    para:
      "কেউ হেদায়েতের দিকে আহ্বান করলে যতজন তার অনুসরণ করবে প্রত্যেকের সমান সওয়াবের অধিকারী সে হবে, তবে যারা অনুসরন করেছে তাদের সওয়াবের কোন কমতি হবে না।",
  },
];
const hadis = document.querySelector("#hadis");
const title = document.querySelector("#title");
const number = document.getElementById("number");
const btn = document.querySelector("#btn");
const generateHadis = () => {
  arr.sort((a, b) => 0.5 - Math.random());
  console.log(arr);

  arr.forEach((item, index) => {
    hadis.innerText = item.para;
    number.innerText = item.id;
  });
};

btn.addEventListener("click", generateHadis);