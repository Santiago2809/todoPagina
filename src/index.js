import './styles.css';

import { Todo,TodoList } from './classes';
import { crearTodoHtml,contar } from './js/componentes';
// import { Todo } from './classes/todo.class.js';
// import { TodoList} from './classes/todo-list.class.js';

export const todoList = new TodoList();

// const tarea = new Todo('Aprender Javascript');
// todoList.nuevoTodo( tarea );

// // console.log( todoList );

// localStorage.setItem('mi-key','ABC1223');


// crearTodoHtml( tarea )

todoList.todos.forEach( todo => crearTodoHtml( todo ) );
console.log( todoList.todos ); 