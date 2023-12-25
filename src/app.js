const sheet = document.querySelector(".sheet");
const button = document.querySelector(".button");

const Storage = () => {
  localStorage.setItem("lines", sheet.innerHTML);
};

const Show = () => {
  if (localStorage.getItem("lines")) {
    sheet.innerHTML = localStorage.getItem("lines");
  }
};

Show();

button.addEventListener("click", () => {
  let container = document.createElement("div");
  container.className = "relative my-4 p-5 h-20 bg-white rounded-md max-w-md focus:outline-none";
  container.style.height = "100px"; // Set the desired height
  container.style.overflowY = "auto"; // Add scroll effect for vertical overflow

  let line = document.createElement("p");
  line.className = "p-3 mb-4 focus:outline-none";
  line.setAttribute("contenteditable", "true");

  const img = document.createElement("img");
  img.className = "absolute bottom-2 r-2 h-5 opacity-60 cursor-pointer";
  img.setAttribute("src", "bin.jpg");
  img.setAttribute("alt", "Image");

  container.appendChild(line);
  container.appendChild(img);
  sheet.appendChild(container);

  Storage();
});

sheet.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    Storage();
  } else if (e.target.tagName === "P") {
    Storage();
  }
});
