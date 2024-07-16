import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state

  const [planets, setPlanets] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get(urlPlanets)
    .then(response => {
      setPlanets(response.data);
    })
    .catch(error => {
      console.error('These are not the planets you are looking for:', error);
    });

    axios.get(urlPeople)
    .then(response => {
      setPeople(response.data);
    })
    .catch(error => {
      console.error('These are not the people you are looking for:', error);
    });
  }, []);
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {people.map(person => (
      /* ❗ Map over the data in state, rendering a Character at each iteration */
      <Character key={person.id} person={person} planets={planets} />
      ))}
    </div>
  );
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
