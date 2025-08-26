const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = () =>{
  const number = parseInt(input.value);

  if (isNaN(number)) {
    output.style.display = "block";
    output.style.backgroundColor = "#b58181";
    output.style.color = "red";
    output.style.border = "4px solid red";
    output.style.fontSize = "30px";
    return output.textContent = "Please enter a valid number";
  } if (number <=0) {
    output.style.display = "block";
    output.style.backgroundColor = "#b58181";
    output.style.color = "red";
    output.style.border = "4px solid red";
    output.style.fontSize = "30px";
    return output.textContent = "Please enter a number greater than or equal to 1";
  } else if (number >= 4000) {
    output.style.display = "block";
    output.style.backgroundColor = "#b58181";
    output.style.color = "red";
    output.style.border = "4px solid red";
    output.style.fontSize = "30px";
    return output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    output.style.display = "block";
    output.style.backgroundColor = "#483d63";
    output.style.color = "white";
    output.style.border = "4px solid white";
    output.style.fontSize = "30px";
    return output.textContent = roman(number);
  }
}

function roman(number) {
  const romanNumerals = [
    { num: 1000, value: "M" },
    { num: 900, value: "CM" },
    { num: 500, value: "D" },
    { num: 400, value: "CD" },
    { num: 100, value: "C" },
    { num: 90, value: "XC" },
    { num: 50, value: "L" },
    { num: 40, value: "XL" },
    { num: 10, value: "X" },
    { num: 9, value: "IX" },
    { num: 5, value: "V" },
    { num: 4, value: "IV" },
    { num: 1, value: "I" }
  ];

  let result = "";

  for (const{num, value} of romanNumerals) {
    while (number >= num){
      result += value;
      number -= num;
    }
  }
  return result;
} 

convertBtn.addEventListener("click", convertToRoman);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convertToRoman();
  }
})
