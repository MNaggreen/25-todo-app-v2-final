/* npm install uuid пакет для генерации уникальных
 идентификаторов и ниже импортируем*/

import { useState } from 'react'
/* сначала глобальные импорты */

import { v4 as uuidv4 } from 'uuid'

/* потом локальные импорты */
/* import TodoList from './components/TodoList/TodoList.js' 
такой путь очень длинный */
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'
import './App.css'

/* рекомендуется создавать приложение сначала без стилей
апотом уже стилизовать и позиционировать размечать
 */
function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
      /* генерируем случайный идентификатор 
      из нашего нового пакета
      порядок свойств в обекте може быть любой */
    }
    setTodos([...todos, newTodo])
  }
  /*   создаем функцию которая будет добавлять обьект
  newTodo в список в данной функции мы берем массив 
  деструктуризируем его для
удобства и доавляем туда наш текст */

  const deleteTodoHandler = (id) => {
    /* функция которая по двойному клику на задачу
    удаляет её */
    setTodos(todos.filter((todo) => todo.id !== id))
    /* параметр функции фильтр это id
    элемента если значение (todo.id равно id) правдиво фильтр все оставляет
    если нет то элемент будет удален*/
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : /* разделяем обьект на свойства и перезаписываем его
        свойсто использую spread оператор
        меняем значение на противоположнок с помоью не 
        !todo.isCompleted */

            { ...todo }
        /* иначе создаем новый обьект */
      })
    )
  }
  /* функция которая делает принажатии 
  на галочку задачу выполненой */

  const resetTodosHandler = () => {
    setTodos([])
    /* при нажатии на кнопку reset 
  мы удалеям содержимое массива todos
  тем самым очищая наше приложение */
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }
  /* !todo.isCompleted всегда возвращает
противоположное значение
т.е. если false То !todo возращает true
а filter оставляет все значения с true
И значит все выполненые задачи
удалятся а не выполненные остануться */

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length
  /* с помощью фильтра отбираем завершенные задачами
  и потом просто сохраняем его длину в переменную */

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {/* 1 действие передаем функцию как свойство в файл
      todoform  */}
      {todos.length > 0 && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          /* конвертируем наше переменную в логическую
          т.е. если ноль false если больше true*/
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      {/* если длина нашего списка 
    с задачами больше одно
    то кнопки появятся */}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
        /* получиться опять значение наоборот
        если есть завершеные задачи то мы показываем тоесть true
        из CompletedTodosExist привращается в false
        и кнопка показывается */
      />
      {/* 1 действие передаем наш список как переменную в файл TodoList.js */}
      {/* передаем нашу функцию которая удаляет элемент из массива */}
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} 
        ${completedTodosCount > 1 ? 'todos' : 'todo'}`}</h2>
        /* показываем текст с нашим счетчиком если длинна массива
        больше 0 и потом есили длина массива равна 1 то показываем
        в конце todo если больше то todos показываем */
      )}
    </div>
  )
}

export default App
/* react-icons ri это раздел на сайте remix icons 
оттуда мы будем брать наши иконки*/

/* пишем npm install react-icons */
