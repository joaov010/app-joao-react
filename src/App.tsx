import React from 'react';
import MyForm from './MyForm';
import NumberList from './NumberList';
import UserList from './UserList';

const App: React.FC = () => {
  return (
    <div>
      <h1>App react</h1>
      <div style={{ marginBottom: '20px' }}>
        <MyForm />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <NumberList />
      </div>
      <UserList />
    </div>
  );
};

export default App;
