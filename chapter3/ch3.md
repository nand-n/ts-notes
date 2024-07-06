# Intrface and Control Flow

Avoid writing type annotation when ts can infer the same type .
Ideal Ts code has a type annotation in functino/Method signature but not on local variables in their bodies.

Consider using explict annotations for object literals to enable exess property checking ensure errors are reported close to where they occur.

Don't annotate function return type unless the function has multiple returns for d/t part of public API , or you want it to return a named type.

Ts , a variable's type is generally determined when it is first introduced.

## Understand How a variable gets it's type

At runtime every variable has a single value. But at static analysis time , when a ts is checking the code a variable has a set of possible values namely its types.

when you initialize a variables with a constant but dont provide a type , the type ckecker needs to decide on one. In other words , it needs to decide a set of possible values form the single values , the process is knownenm as widening.
