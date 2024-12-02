import React, { useEffect, useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import { useCart } from '../context/CartContext';

const Home: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-8">
      <ProductGrid
        products={products}
        onAddToCart={(id) => {
          const product = products.find((p: any) => p.id === id);
          if (product) addToCart({ ...product, quantity: 1 });
        }}
      />
    </div>
  );
};

export default Home;
