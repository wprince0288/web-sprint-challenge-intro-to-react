import React, { useState } from 'react'

function Character({ person, planets }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  const [showHomeworld, setShowHomeworld] = useState(false);
  
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };

  return (
    <div className="character-card" onClick={toggleHomeworld}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className="character-name">{person.name}</h3>
      {showHomeworld && <p>
        <span className="character-planet">{planets.find(planets => planets.id === person.homeworld).name}</span>
      </p>}
    </div>
  )
}

export default Character
