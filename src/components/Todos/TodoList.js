import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList(props) {
  /* 2 действие принимаем наш список из app.js и перебираем его ниже */
  const { todos, deleteTodo, toggleTodo } = props
  /* делаем присваивание и сразу деструктуризацию
  из props т.е. мы получим массив todos из нашего
  app.js*/

  return (
    <div className={styles.todoListContainer}>
      {todos.length === 0 && <h2>Todo list is empty</h2>}
      {/* если длина массива равна 0 то мы показываем данный текст */}
      {/* можно также с помощью оператора не проверить длину
    {!todos.length && <h2>Todo list is empty</h2>} */}

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
      {/* передаем массив и делим его на обькты
      каждый обект будет называться todo
      и далее передаем в todo наш обект*/}
    </div>
  )
}
/* передаем deleteTodo функцию и индекс из todos.map сразу в todo.js */
/* передаем строки из списка в файл Todo - тут мы перемещаемся по всему списку todo и возвращаем
каждую строку из массива todo работает как i в цикле
for i in Range() 
index нужен чтобы программа коректно ыводила все строки*/
export default TodoList
