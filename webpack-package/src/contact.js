const loadContact = () => {
    const content = document.querySelector("#content");

    const div = document.createElement("div");

    const contact = document.createElement("h1");
    contact.textContent = "Contact Us!"

    const description = document.createElement("p");
    description.textContent ="We would love to hear from you"

    const phone = document.createElement("p");
    phone.textContent = "📞 Phone: 01012345678";

    const email = document.createElement("p");
    email.textContent = "📧 Email: pizzapalace@gmail.com";
    
    const address = document.createElement("p");
    address.textContent = "📍 Address: Cairo, Egypt";

    div.appendChild(contact);
    div.appendChild(description);
    div.appendChild(phone);
    div.appendChild(email);
    div.appendChild(address);

    content.appendChild(div);
}
export default loadContact;