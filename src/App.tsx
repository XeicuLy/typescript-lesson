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

// Intersection Types

type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: 'Tokyo',
  username: 'xxx',
  password: 'yyy',
};

// Union Types

let value: boolean | number;
value = true;
// value = '10';
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, 'hello'];

// Literal Types

let company: 'Facebook' | 'Google' | 'Amazon';
company = 'Amazon';
// company = 'Apple';
let memory: 256 | 512;
memory = 256;
// memory = 128;

function App() {
  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
