import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { AlertBox } from './AlertBox';

describe('AlertBox', () => {
  it('renders message and handles close', () => {
    const onClose = vi.fn();

    render(
      <AlertBox type="success" message="Saved" onClose={onClose}>
        <span>Extra</span>
      </AlertBox>
    );

    expect(screen.getByText('Saved')).toBeInTheDocument();
    expect(screen.getByText('Extra')).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('Close alert'));
    expect(onClose).toHaveBeenCalled();
  });
});
