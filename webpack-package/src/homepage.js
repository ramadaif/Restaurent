const loadHomepage = () => {
    const content = document.querySelector("#content");

    const div = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome To Our Restaurant";

    const paragraph = document.createElement("p");
    paragraph.textContent =
        "Welcome to our wonderful restaurant! We serve delicious food made with fresh ingredients.";

    div.appendChild(heading);
    div.appendChild(paragraph);

    content.appendChild(div);
};

export default loadHomepage;