import Highlighter from "react-highlight-words";



import { CREATE_TODO, REMOVE_TODO,MARK_COMPLETED } from './actions';


export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isComplete: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter(todo => todo.text !== text);
    }
    case MARK_COMPLETED: {

      const{ text }= payload;
      console.log("Click");
        return <h1 style="style=color:red">{text}</h1> 
      
      /*const { text } = payload;
      return (<Highlighter  searchWords={text}  autoEscape={true} text={text} />);
    */}
   
    default: {
      return state;
    }
  }
};
