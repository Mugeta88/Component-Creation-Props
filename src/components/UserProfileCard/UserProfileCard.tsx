import React from 'react';
import type { UserProfileCardProps } from '../../types/index';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children
}) => {
  return (
    <div className="border rounded-xl shadow p-4 flex flex-col gap-3">
      <div className="flex items-center gap-4">
        {user.avatarUrl && (
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <h2 className="text-xl font-semibold">{user.name}</h2>
      </div>

      {showEmail && <p className="text-gray-600">{user.email}</p>}
      {showRole && <p className="text-gray-500">{user.role}</p>}

      {children}

      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-2 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};