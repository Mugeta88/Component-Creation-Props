import { useState } from 'react';
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import avatar from './assets/user.png';

const user = {
  id: '1',
  name: 'Mark Winters',
  email: 'MWinters@gmail.com',
  role: 'Data Scientist',
  avatarUrl: avatar,
};

const product = {
  id: 'p1',
  name: 'VIZIO 43” Class Full HD 1080p LED Smart TV (VFD43M-08)',
  price: 149.99,
  description: 'Full HD resolution offers enhanced clarity, richer contrast, and true-to-life color through Full Array LED Backlight and Active Pixel Tuning.',
  inStock: true,
  imageUrl: 'https://i5.walmartimages.com/seo/VIZIO-43-Class-Full-HD-1080p-LED-Smart-TV-New-VFD43M-0804_c28f7f61-474f-4c5c-aae3-c44e70527636.e5799a314cdc1423a21064eca5509a6d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
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
