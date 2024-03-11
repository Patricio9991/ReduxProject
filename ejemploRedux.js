const app= {
    todos: [{
      text: 'Comer',
      completed: true
    }, {
      text: 'Hacer ejercicio',
      completed: false
    }],
    visibilityFilter: 'SHOW_COMPLETED'
}

const accion1 = { type: 'ADD_TODO', text: 'Ir a nadar a la piscina' }
const accion2 = { type: 'TOGGLE_TODO', index: 1 }
const accion3 = { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }


function visibilityFilter(state = 'SHOW_ALL', action) {
   
    if (action.type === 'SET_VISIBILITY_FILTER') {
        console.log("entro por aca con action.type de acctio3")
      return action.filter;
    } else {
        console.log("entro por aca")
      return state;
    }
}


//visibilityFilter('SHOW_ALL',accion3)


function todos(state = [], action) {
    switch (action.type) {
    case 'ADD_TODO':
        
      return state.push({ text: action.text, completed: false });
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        action.index === index ?
          { text: todo.text, completed: !todo.completed } :
          todo
     )
    default:
      return state;
    }

}

const estado = []
// todos(estado,accion1)

// console.log(estado)

function todoApp(state = {}, action) {
    return {
      todos: todos(state.todos, action),
      visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    };
}

todoApp(app,accion1)

console.log( app.todos )


