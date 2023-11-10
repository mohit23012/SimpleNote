const sheet = document.querySelector(".sheet");
const button = document.querySelector(".button");
let line = document.querySelectorAll("line");

const Storage = () => {
  localStorage.setItem("line", "sheet.container.innerHTML");
};

const Show = () =>{
    sheet.innerHTML = localStorage.getItem('lines');
}
Show();

button.addEventListener("click", () => {
  // Create a container div for better structure
  let container = document.createElement("div");
  container.className =
    "relative my-4 p-3 h-20 bg-white rounded-md max-w-md focus:outline-none";

  // Create a paragraph for text content
  let line = document.createElement("p");
  line.className = "mb-4 focus:outline-none";
  line.setAttribute("contenteditable", "true");

  // Create an image with alt text
  const img = document.createElement("img");
  img.className = "absolute bottom-2 right-2 h-5 opacity-60 cursor-pointer ";
  img.setAttribute("src", "bin.jpg");
  img.setAttribute("alt", "Image");

  // Append the img to the line to the container to the sheet
  sheet.appendChild(container).appendChild(line).appendChild(img);

  Storage();
});

sheet.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.parentElement.remove();
    Storage();
  } else if (e.target.tagName === "p") {
    line = document.querySelectorAll("line");
    line.forEach((l) => {
      l.onkeyup = () => {
        Storage();
      };
    });
  }
});
