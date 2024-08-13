import React from 'react';

interface UserItemProps {
  user: {
    id: number;
    name: string;
    email: string;
  };
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div className="user-item">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default UserItem;
