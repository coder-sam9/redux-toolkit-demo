import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = [
    {
      id: "p1",
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
      quantity: 0,
    },
    {
      id: "p2",
      title: "Another Product",
      price: 12,
      description: "This is another product - fantastic!",
      quantity: 0,
    },
    {
      id: "p3",
      title: "Smartphone",
      price: 599,
      description: "A high-end smartphone with the latest features.",
      quantity: 0,
    },
    {
      id: "p4",
      title: "Laptop",
      price: 999,
      description: "A powerful laptop for work and gaming.",
      quantity: 0,
    },
    {
      id: "p5",
      title: "Headphones",
      price: 199,
      description: "Noise-cancelling headphones with premium sound quality.",
      quantity: 0,
    },
    {
      id: "p6",
      title: "Smartwatch",
      price: 249,
      description:
        "A sleek smartwatch with fitness tracking and notifications.",
      quantity: 0,
    },
    {
      id: "p7",
      title: "Tablet",
      price: 399,
      description: "A lightweight tablet for entertainment and productivity.",
      quantity: 0,
    },
    {
      id: "p8",
      title: "Camera",
      price: 799,
      description: "A professional-grade camera for stunning photography.",
      quantity: 0,
    },
    {
      id: "p9",
      title: "Gaming Console",
      price: 499,
      description: "The latest gaming console for immersive gameplay.",
      quantity: 0,
    },
    {
      id: "p10",
      title: "Wireless Earbuds",
      price: 149,
      description: "True wireless earbuds with long battery life.",
      quantity: 0,
    },
    {
      id: "p11",
      title: "Monitor",
      price: 299,
      description: "A high-resolution monitor for crisp visuals.",
      quantity: 0,
    },
    {
      id: "p12",
      title: "Printer",
      price: 129,
      description: "A reliable printer for home and office use.",
      quantity: 0,
    },
    {
      id: "p13",
      title: "External Hard Drive",
      price: 89,
      description: "A portable hard drive for extra storage.",
      quantity: 0,
    },
    {
      id: "p14",
      title: "Keyboard",
      price: 59,
      description: "A mechanical keyboard for typing enthusiasts.",
      quantity: 0,
    },
    {
      id: "p15",
      title: "Mouse",
      price: 39,
      description: "An ergonomic mouse for comfortable use.",
      quantity: 0,
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} item={product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
