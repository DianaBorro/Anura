import './style/App.css';
import Searchbar from './searchbar';
import { useState } from 'react';
import { fetchMuscleFromAPI } from './api';
import { Exercise } from './types';
import Exercises from './Exercises';

function App() {
  // const [muscle, setMuscle] = useState('');
  const [exercises, setExercise] = useState<Exercise[]>([]);

  const handleSubmit = async (muscle: string) => {
    const responseData = await fetchMuscleFromAPI(muscle);

    setExercise(responseData);
    console.log(
      'response from fetchthingie in handlesubmit',
      responseData[0].difficulty
    );
  };

  return (
    <>
      {/* <header>
        <ul className="nav-bar__list">
          <li className="nav-bar__list__item">
            <a href="/">Home</a>
          </li>
          <li className="nav-bar__list__item">
            <a href="https://github.com/DianaBorro">GitHub</a>
          </li>
        </ul>
      </header> */}
      <Searchbar onSubmit={handleSubmit} />
      <Exercises exercises={exercises} />
    </>
  );
}

export default App;
