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
      <Searchbar onSubmit={handleSubmit} />
      <Exercises exercises={exercises} />
    </>
  );
}

export default App;
