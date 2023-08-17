import { Exercise } from './types';
import './style/Exercises.css';

type ExercisePromtps = {
  exercises: Exercise[];
};

const Exercises = (exercises: ExercisePromtps) => {
  return (
    <>
      <h3>Exercises:</h3>
      {console.log('inside Exercises.tsx', exercises.exercises)}
      {/* <div>{exercises.exercises.difficulty}</div> */}
      <div className="exercises">
        {exercises.exercises.map((exercise) => {
          return (
            <>
              <div className="exercise">
                <div className="exercise__name">
                  <b>Name:</b> {exercise.name}
                </div>
                <div className="exercise__type">
                  <b>Type:</b> {exercise.type}
                </div>
                <div className="exercise__difficulty">
                  <b>Difficulty:</b> {exercise.difficulty}
                </div>
                <div className="exercise__muscle">
                  <b>Muscle:</b> {exercise.muscle}
                </div>
                <div className="exercise__equipment">
                  <b>Equipment:</b> {exercise.equipment}
                </div>
                <div className="exercise__instructions">
                  <b>Instructions:</b> {exercise.instructions}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Exercises;
