import React from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const companyIds = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>Top Products</h1>
      {companyIds.map(companyId => (
        <ProductList key={companyId} companyId={companyId} />
      ))}
    </div>
  );
};

export default App;
