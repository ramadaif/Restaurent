const loadMenu = () => {
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Our pizza menu";

    content.appendChild(title);

    const pizzas = [
         {
            name: "Margherita",
            price: "$10",
            description: "Tomato sauce, mozzarella, and fresh basil."
        },
        {
            name: "Pepperoni",
            price: "$12",
            description: "Mozzarella cheese and crispy pepperoni."
        },
        {
            name: "BBQ Chicken",
            price: "$14",
            description: "Grilled chicken, BBQ sauce, mozzarella, and red onions."
        },
        {
            name: "Vegetarian",
            price: "$13",
            description: "Mushrooms, bell peppers, onions, olives, and mozzarella."
        },
        {
            name: "Meat Lovers",
            price: "$15",
            description: "Pepperoni, sausage, beef, and mozzarella."
        }
    ];

    pizzas.forEach((pizza) => {
        const pizzadiv = document.createElement("div");

        const name = document.createElement("h2");
        name.textContent = pizza.name;

        const price = document.createElement("p");
        price.textContent = pizza.price;

        const description = document.createElement("p");
        description.textContent = pizza.description;
        pizzadiv.appendChild(name);
        pizzadiv.appendChild(price);
        pizzadiv.appendChild(description);
        content.appendChild(pizzadiv);
    });
}
export default loadMenu;
