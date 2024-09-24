import React, { useEffect, useState } from 'react';
import './NewCollection.css';
import Item from './Item';

function NewCollection() {
  const [new_collections, setNew_collections] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/newcollections')
      .then((response) => response.json())
      .then((data) => setNew_collections(data))
      .catch((error) => console.error('Error fetching collections:', error));
  }, []); // Empty array ensures this runs only once on component mount

  return (
    <div className='newcollection'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {new_collections.map((item) => (
          <Item
            key={item.id} // Use a unique key if available, like `item.id`
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollection;
