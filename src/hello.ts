// type Point = {
//   x: number;
//   y: number;
// }
type Point = {
  x?: number;
  y: number;
};

let point: Required<Point> = { x: 1 };
console.log(point);

type blah = Record<string, { num: number; str: string }>;
const nameAge: blah = {
  ll: { num: 21, str: 'twenty-one' },
  bb: { num: 22, str: 'twenty-two' },
};

type bob = Pick<Point, 'x'>;
const ai: bob = { x: 1 };
// omit num
type Primitive = string | bob;
const value: Exclude<Primitive, string> = { x: 1 };

type FunctionType = (p: { x: number; z: number }) => { x: number; y: number };
const point: ReturnType<FunctionType> = {
  x: 1,
  y: 2,
};
const entryPoint: Readonly<Parameters<FunctionType>[0]> = {
  x: 1,
  z: 1,
};
entryPoint.x = 'hh';

type Person = {
  name: string;
  age: number;
};

type PersonMap = { [key: number]: number };

function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${person}: ${property}`);
}
const isFine = true;
const happy = isFine ?? 'unknown';

let firstName: string = 'Dylan';

const json = JSON.parse('55');

const firstNames: string[] = [];
firstNames.push('Jack');

const names: readonly string[] = [];
names.push('Jack');
type ourTuple = [number, boolean, string];

const a: ourTuple = [5, true, 'a'];
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The real God'];
const graph: [x: number, y: number] = [12, 12];
const [x, y] = graph;
type Rn = { isRenjun: boolean; model: string };
interface RNN {
  isRenjun: boolean;
  model?: string;
}

const car: Rn = { isRenjun: true, model: 'red' };

const carPark: {
  [index: string]: number
} = {};
carPark.car1 = 25;
carPark[24] = 3;
console.log(carPark);
enum Direction {
  North,
  East,
  South,
  West
}

let currentDirection = Direction.North;

console.log(currentDirection);

interface BaseType {
  h: number,
  w: number
}

interface Colored extends BaseType {
  color: string
}

type BaseType = {
  h: number,
  w: number
};

function printStatusCode(code: string | number){
  console.log(`My status code is ${code}`);
}
function gr(h?: number, ren:string = 'green') {
  console.log('hi')
}

function gg({x: number, y:number}){
  console.log('hi');
}

type nana = {x: number, y:number}

function gg({x, y} : nana){
  console.log('hi');
}

console.log(gg({1,2}));

function add(a: number, b: number, ...rest: number)
// spread out the elements of an array into a new context
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
// rest operator - merge a list of function arguments into an array
function sum(...args: number[]) {
  let total = 0;
  for (let args of arr){
    total += args;
  }
  return total;
}
console.log(sum(1,2,3,4))

type func = (value: number) => number;

let x: unknown = 'hello';
console.log((x as string).length);
console.log((<string>x.length));

// public - allow access to this class member from anywhere
// private - only allow access to the class member from within the class
class Friend {
  protected myFriend: string;
  public constructor(myFriend: string) {
    this.myFriend = myFriend;
  }

  public getMyFriend(): string {
    return this.myFriend;
  }
}
const friend = new Friend('hhh');
console.log(friend.getMyFriend());
// protected allow access for class that inherit or the class itself to access this variable
// or method within the same module
interface Cook {
  cook: () => void;
}

class BestFriend extends Friend implements Cook{
  public constructor(myFriend: string) {
    super(myFriend);
  }
  public getMyBestFriend(){
    return this.myFriend;
  }
  public cook() {
    console.log('cook dinner');
  }
}

class BestMate extends BestFriend{
  public constructor(myFriend: string){
    super(myFriend);
  }

  public override cook() {
    console.log('best');
  }
}
const mate = new BestMate('has');
console.log(mate.cook());

abstract class Soul {
  public abstract getSoul(): string;
  public toString(){
    return 'str';
  };
}
class MySoul implements Soul{
  public getSoul(){
    return 'my Soul';
  }
}
// doesn't have any properties that need to be initialised when an instance of a class is created
// typescript will create an implicit constructor
const thing = new MySoul();
console.log(thing.getSoul());



