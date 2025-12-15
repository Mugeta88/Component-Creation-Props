import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { UserProfileCard } from './UserProfileCard';

const user = {
  id: '1',
  name: 'John Doe',
  email: 'john@test.com',
  role: 'Engineer',
};

describe('UserProfileCard', () => {
  it('renders user info and handles edit', () => {
    const onEdit = vi.fn();

    render(
      <UserProfileCard user={user} showEmail showRole onEdit={onEdit}>
        <span>Extra info</span>
      </UserProfileCard>
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@test.com')).toBeInTheDocument();
    expect(screen.getByText('Engineer')).toBeInTheDocument();
    expect(screen.getByText('Extra info')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Edit Profile'));
    expect(onEdit).toHaveBeenCalledWith('1');
  });
});
