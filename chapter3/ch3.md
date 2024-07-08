# Intrface and Control Flow

Avoid writing type annotation when ts can infer the same type .
Ideal Ts code has a type annotation in functino/Method signature but not on local variables in their bodies.

Consider using explict annotations for object literals to enable exess property checking ensure errors are reported close to where they occur.

Don't annotate function return type unless the function has multiple returns for d/t part of public API , or you want it to return a named type.

Ts , a variable's type is generally determined when it is first introduced.

## Understand How a variable gets it's type

At runtime every variable has a single value. But at static analysis time , when a ts is checking the code a variable has a set of possible values namely its types.

when you initialize a variables with a constant but dont provide a type , the type ckecker needs to decide on one. In other words , it needs to decide a set of possible values form the single values , the process is known as widening.

There is a handy trick if you want ts to infer a tuple type instead of an array type , but still allow the type of each element in the tuple to widen to it's base type / best common type

```javascript
    function typle<T extends unknowen[]>(...elements :T) {return elements }

    const arr3 = tuple (1,2,3)
    // ^? const arr3 : [number , number, number]
    const mix = tuple(4,"Five" , true)
    // ^? const mix : [number , string, boolean]


```

### satisfies :

Satisfies ensures that a value , well , satifies the requirments of a type and guides inferences by preventing ts from inferring a wider type

```javascript
    type Point = [number , number]
    const capitals1 = {ny:[-73.987987, -73.987987 ], ca:[-73.987987, -73.987987 ]}

    const capital2 ={ny:[-73.987987, -73.987987 ], ca:[-73.987987, -73.987987 ]} satisfies Record<string, Point>;

```

## Type narrowing

Narowing or 'Refinement' is the process by which ts goes from a broad typ eto a more specific one, Perhaps the most common example of this is null checking

```javascript
    const elem = document.getElementById('what-time-is-it')
    if(elem) {
        elem.innerHTML = 'Party Time'.blink()l
    }else{
        alert("No Element #What-time-is-it")
    }
```

TS Doesnt understand the has and get method of a Map.

### nullish coalescing (??)

is a logical operator that returns right hand side operand when its left side opperand is null or undefined otherwise it returns the right side opperand.
