import { useState } from 'react';
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import avatar from './assets/user.png';

const user = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'Engineer',
  avatarUrl: avatar,
};

const product = {
  id: 'p1',
  name: 'Wireless Headphones',
  price: 149.99,
  description: 'Great sound and battery life.',
  inStock: true,
  imageUrl: 'https://via.placeholder.com/600x400',
};

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = (productId: string) => {
    console.log('Added to cart:', productId);
    setShowAlert(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8" >
      {showAlert && (
        <div className="mx-auto max-w-3xl">
          <AlertBox
            type="success"
            message="Product added to cart!"
            onClose={() => setShowAlert(false)}
          >
            You can now continue using the application.
          </AlertBox>
        </div>
      )}

      <div className="mt-10 grid grid-cols-1 place-items-center gap-8 md:grid-cols-2">
        <UserProfileCard user={user} showEmail showRole />

        <ProductDisplay
          product={product}
          showDescription
          showStockStatus
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
}

export default App;
