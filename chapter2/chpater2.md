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

 The samllest set is the empty set which contains no value. It corresponds to the never type in Typescript . B/c  it's domain is empty , no values are assignable to a variable with a never type 

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
   birth:Date;
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
const Cylinder = (radius: number , height:number) => ({radius , height});

```



A class and an enum constructs introduces both a type and a value . Reaturn g to the first example , for instance Cylinder could have been a class 

```javascript 

class Cylinder {
   radius: number;
   height: number;

   constractor(radius:number, height:number){
      this.radius = radius;
      this.height= haight;
   }
}

function calculateVolume(shape:unknowen) {
   if(shape instanceof Cylinder){

      shape // (paramert) shape : Cylinder
      shape.radius // (parameter Cylinder.radius: number)
   }
}
```

## typeof
In a type context , type of takes a value and reatuns its Typescript type.

typeof is a javascript runtime typeof operator
it reatuns a stirng containging the runtime type of the symbol  it is not the same as ts type

typeof has only 8 possible return value

String , number ,n boolean , undefined , object , function , symbol and bigint .

```javascript
 const people = ['nah' , 'home' , 'deb'].map((name):Person => ({name})) //type is Person[]
```


Every type is subtype of unknown so assertsion of involving are always ok. 


Primitives are distingushed form objects by being immutable na not having methods. 

The Implicit vlaue  assinging to a primitive value becomes undefined 

```javascript 
x = 'hello'
x.language = "English"
console.log(x.language) //undefined 
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

For new code where you are need to pick a style , the general thumb is to use interface where possible , using type either where it's required (eg union types)  or has a cleaner syntax (eg function types) 

--> an interface can extend a type and type can extend an interface 
```javascript 

interface IStateWithPop extends TState {
population: number;
}
type TStateWithPop = IState & { population: number; };

```



---> A class can implement either an interface or a simple type

```javascript 
 
 class StateT  implements Tstate {
   name: string ='';
   capital: string = '';
 }

 class StateI implements IState {
   name: string = '';
   capital: string = ''
 }

```

Finally both type and interface can be recursive 


an interface can extend some types but not this one. Extending union types can sometimes be usefull. If you have separate types for Input and output variables and mapped from name to varibales 

```javascript 

type Input ={}
type Output = {}
interface VariableMap {
   [name:string] : Input | Output;
}


//  or you might want a type attaches the name to the variable. 

type NamedVariable = (Input | Output ) & {name: string}
```

