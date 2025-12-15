import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProductDisplay } from './ProductDisplay';

const product = {
  id: 'p1',
  name: 'Laptop',
  price: 999.99,
  description: 'Great laptop',
  inStock: true,
};

describe('ProductDisplay', () => {
  it('renders product details and handles add to cart', () => {
    const onAddToCart = vi.fn();

    render(
      <ProductDisplay
        product={product}
        showDescription
        showStockStatus
        onAddToCart={onAddToCart}
      />
    );

    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('Great laptop')).toBeInTheDocument();
    expect(screen.getByText('In Stock')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Add to Cart'));
    expect(onAddToCart).toHaveBeenCalledWith('p1');
  });
});