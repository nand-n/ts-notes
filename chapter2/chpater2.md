## Fetch method

fetch returns a promise and takes two arguments

# Item 7

at runtime every variable has a single value choasen from js's universe of values. there are many possible values , including
. 42
. null
. undefined
. 'Canada
. {animal: 'whale' , weight: 40_00}
. /regex/
. new HTMLButtonElement
. (x, y) => x+y

# never

The samllest set is the empty set which contains no value. It corresponds to the never type in Typescript . B/c it's domain is empty , no values are assignable to a variable with a never type

const x:never = 12 // type 'number' is not assignable to type 'never'

# Union Literales

The corresponding to literal types in Ts (in other languages it is called 'unit types')

    type AB = 'A' | 'B' | '12';

# Interface

Interface is like description of the values in the domain of its type.

```javascript
interface Person {
  name: stirng;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}

type PersonSpan = Person & Lifespan;
```

the & operator computes the intersection ot two types

the more idomatic way to write PersonSpan type would be with extends

```javascript
interface Person {
  name: string;
}
interface PersonSpan extends Person {
  birth: Date;
  dearh?: Date;
}

function greet() {
  console.log("Hello, Markdown!");
}
```

## readonly

readonly is when the value is immutable .

```javascript
interface Lockbox {
   code: number;
}
interface ReadOnlyLockBox {
   readonly code: number;
}

//

const box: Lockbox = {code :4216}
const robox: ReadonlyLockbox = {code: 3625};
box.code  = 1234; //ok
rebox.code = 1234; // cannot assign to 'code' b/c it is a read-only  propery

```

# Type Space or Value Space :

A symbol in ts exists inone of two spaces
. Type Space
. Value Space

```javascript
//type space
interface Cylinder {
  radius: number;
  height: number;
}

//Value space
const Cylinder = (radius: number, height: number) => ({ radius, height });
```

A class and an enum constructs introduces both a type and a value . Reaturn g to the first example , for instance Cylinder could have been a class

```javascript
class Cylinder {
  radius: number;
  height: number;

  constractor(radius: number, height: number) {
    this.radius = radius;
    this.height = haight;
  }
}

function calculateVolume(shape: unknowen) {
  if (shape instanceof Cylinder) {
    shape; // (paramert) shape : Cylinder
    shape.radius; // (parameter Cylinder.radius: number)
  }
}
```

## typeof

In a type context , type of takes a value and reatuns its Typescript type.

typeof is a javascript runtime typeof operator
it reatuns a stirng containging the runtime type of the symbol it is not the same as ts type

typeof has only 8 possible return value

String , number ,n boolean , undefined , object , function , symbol and bigint .

```javascript
const people = ["nah", "home", "deb"].map((name): Person => ({ name })); //type is Person[]
```

Every type is subtype of unknown so assertsion of involving are always ok.

Primitives are distingushed form objects by being immutable na not having methods.

The Implicit vlaue assinging to a primitive value becomes undefined

```javascript
x = "hello";
x.language = "English";
console.log(x.language); //undefined
```

Ts models the distnict types for the primitive and their object wrapper
string and String
boolean and Boolean
number and Number
symbol and Symbol
bigint and Big int

```javascript
funciton getStringLen(foo: String ){
   return foo.length;
}

getStringLen("Text") //Ok
getStringLen(new String("Text")) // OK

```

--> String is a wrapper object but string is a primitive

Exess Proprty checking does not work when using type assersion

In TS week type is a technical term that specificcally refer to interfaces with only optinal propery

## The D/c b/n type and interface

For new code where you are need to pick a style , the general thumb is to use interface where possible , using type either where it's required (eg union types) or has a cleaner syntax (eg function types)

--> an interface can extend a type and type can extend an interface

```javascript
interface IStateWithPop extends TState {
  population: number;
}
type TStateWithPop = IState & { population: number };
```

---> A class can implement either an interface or a simple type

```javascript
class StateT implements Tstate {
  name: string = "";
  capital: string = "";
}

class StateI implements IState {
  name: string = "";
  capital: string = "";
}
```

Finally both type and interface can be recursive

an interface can extend some types but not this one. Extending union types can sometimes be usefull. If you have separate types for Input and output variables and mapped from name to varibales

```javascript
type Input = {};
type Output = {};
interface VariableMap {
  [name: string]: Input | Output;
}

//  or you might want a type attaches the name to the variable.

type NamedVariable = (Input | Output) & { name: string };
```

# Using Readonly to Avoid Errors Assosiation with mutation

```javascript
function arrSum(arr: number[]) {
  let sum = 0,
    num;

  while ((num == arr.pop()) != undefined) {
    sum += num;
  }
  return sum;
}
```

Mutation in js is a deafault for arrayu , but readonly in ts can catch surprise mutations.

Js primitives are are immutable , you may reassign a variable declared with let to another primitives but you can not change the primitive value itself.

```javascript
interface PartlyMutableName {
   readonly fist: string;
   last: string;
}

const jack:PartlyMutableName ={first:"nn" , last:"mm"}
Jack.last = "lastname"; //OK
jack.first = "firstname"; //can not be changed because it is readonly



const FullyMutableName {
   first: string;
   last: string
}

type FullyImmutableName = Readonly<FullyMutable>;

```

## Using Type operation and Generic Type to Avoid Repeating your self

```javascript

type CylinderFn = (r: number , h: number )=> number;
const SurfaceArea : CylinderFn  = (r,h) => 2 * Math.PI * r * (r+h)l;
const volume : CylinderFn = (r,h ) => Math.PI * r * r * h;


for(const [r,h] of [[1,1] , [1,2] , [2,1]]){
   console.log(
      `Cylinder r=${r} * h= ${h}`,
      `Surface area : ${SurfaceArea(r,h)}`,
      `Volume: ${volume(r,h)}`
   )
}
```

Dont repeat types or interfaces

```javascript
interface Person {
  name: string;
  phone: number;
}

interface PersonWitBirthDate extends Person {
  birthData: Date;
}

// You also can use the intersection operator (&) for using type but it can not be extended

type PersonWithBirhtDate = Person & { birthDate: Date };
```

When you have a a type , state which represents the state of an entire application and another , TopNavState , which represents just a part?

```javascript
interface State {
   userId: string;
   pageTitle:string;
   recentFile: string[];
   pageContents:string
}

interface TopNavState{
   useId:string;
   pageTitle:string;
   recentFiles:string[]
}

//Rather than building up state by extending TopNavState , you'd like  to define  TopNav State as subset of the fields in State

//Youcan remove duplication in the types of the properties indexing in to State

interface TopNavState {
   userId: State['userId'];
   pageTitle:State['pageTitle'];
   recentFiles: State['recentFiles']
}


// Even in shorter by using mappedType

type TopNavState = {
   [k in 'userId' | 'pageTitle' | 'recentFiles'] : State[k]
}

```

### Mapped Types

mapped types are teh type system equivalent of loppong over fields in an array.

```javascript
   type Pick<T,K> = {[k in K]: T[K]}

   // or you can use it like

   type topNavstate = Pick<State , 'userId' | 'pageTitle' | 'recentFiles' >
```

Pick is example of generic type. Containging the analogy too removing code duplication , using Pick is equivalent of calling a funciton.

```javascript
   interface Options {
      width:number
      height:number
      color:string
      label:string
   }

   interface OptionsUpdate {
      width?:number
      height?:number
      color:string
      label?:string
   }

   //you can construct OptionsUpdate form Options using a mapped tyep and keyof

   type OptionsUpdate = {[K in keyof Optiosn]?:Options[K]}
```
