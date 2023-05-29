import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

  const products = [
    {
      id: 'p1',
      title: 'Red Shirt',
      price: 29.99,
      description: 'A nice red shirt',
    },
    {
      id: 'p2',
      title: 'Blue Pants',
      price: 49.99,
      description: 'A pair of comfortable blue pants',
    },
    {
      id: 'p3',
      title: 'Black Shoes',
      price: 69.99,
      description: 'A stylish pair of black shoes',
    },
    {
      id: 'p4',
      title: 'Green Jacket',
      price: 99.99,
      description: 'A warm and cozy green jacket',
    },
  ];
  

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
