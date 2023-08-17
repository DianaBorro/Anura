type Props = {
  onSubmit: (muscle: string) => void;
};

const Searchbar = ({ onSubmit }: Props) => {
  // const [muscle, setMuscle] = useState('');
  // const [exercises, setExercise] = useState<Exercise[]>([]);

  // const handleSubmit = async () => {
  //   const responseData = await fetchMuscleFromAPI(muscle);

  //   setExercise(responseData);
  //   console.log(
  //     'response from fetchthingie in handlesubmit',
  //     responseData[0].difficulty
  //   );
  // };

  // const handleSubmit = async () => {
  //   try {
  //     const responseData: Exercise[] = await fetchMuscleFromAPI(muscle);
  //     setData(responseData);
  //     console.log('response from fetchMuscleFromAPI in handleSubmit', responseData);
  //   } catch (error) {
  //     console.error('Error occurred:', error);
  //   }
  // };
  let chosenMuscle: string;
  return (
    <>
      {console.log('right after return inside')}
      <label htmlFor="searchBar">What would you like to train today?</label>
      <input
        type="text"
        id="searchBar"
        placeholder="Search..."
        onChange={(e) => {
          chosenMuscle = e.target.value;
        }}
      />
      <button
        onClick={() => {
          console.log('this is chosen muscle', chosenMuscle);

          onSubmit(chosenMuscle);
        }}
      >
        submit
      </button>

      {/* <Exercises exercises={exercises[0]} /> */}
    </>
  );
};

export default Searchbar;
