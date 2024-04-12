import MapComponent from "./Map";
import React, { useState } from 'react';

const Form = () => {
    const [address, setAddress] = useState<string>('');

    const handleLocationSelect = (selectedAddress: string) => {
      setAddress(selectedAddress);
    };
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      console.log('Dirección enviada:', address);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <MapComponent onLocationSelect={handleLocationSelect} />
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          <button type="submit">Enviar Dirección</button>
        </form>
      </div>
    );
}

export default Form
