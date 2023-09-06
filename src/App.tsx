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

// typeof

let msg: string = 'Hi';
let msg2: typeof msg;
msg2 = 'hello';

let animal = { cat: 'small cat' };
let newAnimal: typeof animal = { cat: 'big cat' };

// keyof

type KEYS = {
  primary: string;
  secondary: string;
};

let key: keyof KEYS;
key = 'primary';

// typeof + keyof

const SPORTS = {
  soccer: 'Soccer',
  baseball: 'Baseball',
};

let keySports: keyof typeof SPORTS;
keySports = 'soccer';

// enum

enum OS {
  Windows,
  Mac,
  Linux,
}

interface PC {
  id: number;
  OSType: OS;
}

const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};

const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

// 型の互換性

const comp1 = 'test';
let comp2: string = comp1;

let comp3: string = 'test';
// let comp4: 'test' = comp3;

let funcComp1 = (x: number) => {};

let funcComp2 = (x: string) => {};

// funcComp1 = funcComp2;
// funcComp2 = funcComp1;

function App() {
  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
