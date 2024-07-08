## The Guiding Pinciple of ts type system is to behave like runtime

-> the guiding prenciple of ts ts typing system is to that it shuld model js runtime behaviour

## Remember

--> Typescript is a superset of javascript : all js programss are syntactically valid Typescript prgoram but not all TS prgorams are valid js programs .

--> TS adds a static type system that models js;s runtime beheviours tries to spot code that will throw exeptions at runtime.

--> It is possible for code to pass the type checker but still throw at runtime.

--> Ts disallows some legal but questinable js constructs such as calling funciton with the wrong number of arguments

--> Type annotations tell ts your intent and help it distingush correct and incorrect code.

# noImplictAny :

controlls what ts does when it can't determine the type of a variable. This code is valid when noImplictAny is off

# strictNullChecks

controlls whether null and undefined are permissible value in every type

# Chapter 2

## Typescript's Type system

Ts can generate javascript ,but the type system is the main event . this is why you're using the language
