# Example powered by Quantum Store: Classical Todo List

This source allows to do a comparation between the fashionable methodology redux and my new tech the action/state based "Quantum Store".

You'll can to verify the simplicity, cleaner, understoodable and friendly.

Quantum Store (qs), only needs 5 methods to work:
init, set, get, connect, disconnect

[![Edit quantum_example_todo_list](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/iwokloco/quantum-example-todo-list/tree/master/?codemirror=1&fontsize=14)


And here the same project with classic redux (write write write too mechanical and boring):
https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos

## How to Install Quantum Store: fucking easy.

npm install quantum-store

## How to use? : f****** easy. compared with redux. ¬¬!

### Init store

In the index.js create the json structure that you want:
```
qs.init({
  user: {
    id: -1,
    imgProfile: ''
  }
  todo: {
    filter: FILTER_ALL,
    list: [],
    lastId: 0
  },
  bla bla bla...
});
```

### Connect your React component to some global state

The global state is any property specified in root in the initialization json. In the previous example are: "user", "todo", ....

One component can be connected to multiple global store variables. 
When the component is connected to variable the magic happens. 
The arrow function specified get like in parameter the current state of this variable in store, and the return result is assigned to the component state. This causes a rerender of component automatically.

```
componentDidMount() {
  qs.connect("todo", this, (state) => { return { filter: state.filter } });
}
```

Remember specify the disconnection:

```
componentWillUnmount() {
  qs.disconnect("todo", this);
}
```  

### Get current values from store

let user = qs.get('user');

No more comments.

### Set values in store: <-- crazylly easy

Example of how update the current value of image profile of user:

```
    const currentUser = qs.get('user');
    qs.set('user', { ...currentUser, imgProfile: 'https://...jpg' });
  }
```  
...currentUser is needed to get a copy of another properties that you don't want modify.