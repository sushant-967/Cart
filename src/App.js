import React from 'react';
import CartItem from './CartItem';

function App() {
  function showAlert() {
    alert("Hello brother!");

}
  return (
    
    <div className="App">
    
      <CartItem/>
      <div >
                    <button onClick={showAlert}>button</button>
                </div>
    </div>
  );
}

export default App;
