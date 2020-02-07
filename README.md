### React form as controlled component 

In a React form, you want the server to know about every new character or deletion, as soon as it happens. That way, your screen will always be in sync with the rest of your application.

In React, when you give an <input /> a value attribute it BECOMES controlled. It stops using its internal storage. 

A controlled component is a component that does not maintain any internal state. Since a controlled component has no state, it must be controlled by someone else.

If you ask it for information about itself, it will have to get that information through props.