import React, { useEffect, useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import { useCart } from '../context/CartContext';
import { useCategory } from '../context/CategoryContext';
import { toast } from 'react-toastify';

const Home: React.FC = () => {
  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { selectedCategory } = useCategory();

  useEffect(() => {
    setLoading(true);
    const endpoint = selectedCategory
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : 'https://fakestoreapi.com/products';
  
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [selectedCategory]);
  

  const handleAddToCart = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      addToCart({ ...product, quantity: 1 });
      toast.success(`${product.title} added to cart!`);
    }
  };

  return (
    <div>
      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : (
        <ProductGrid products={products} onAddToCart={handleAddToCart} />
      )}
    </div>
  );
};

export default Home;
