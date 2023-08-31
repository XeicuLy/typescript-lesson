import './App.css';

const name = 'Hello';
let username = 'World';
let dummyNum = 2;
let bool = true;
let array1 = [true, false, true];
let array2 = [0, 1, 'hello'];

interface NAME {
  first: string;
  last?: string;
}

let nameObj: NAME = { first: 'Yamada' };

const increment = (x: number, y: number): number => {
  return x + y;
};

function App() {
  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
