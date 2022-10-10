import { useState } from 'react'
import styles from './TodoForm.module.css'
/* правила для тегов из данного файла будут 
действовать только в данном компоненте TodoForm */
import Button from '../UI/Button'
/* мы импортировали компонент Button */

function TodoForm({ addTodo }) {
  /* 2 действие принимаем функцию как переменную
  которую будем использовать позже при submit формы */

  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    /* делаем все действия чтбы изежать при submit 
        перехода на другую страницу */
    addTodo(text)
    setText('')
    /* все это делаем для того чтобы текст 
        пропал из формы setText и позже добавляем
        текст в наш списко 2 действие AddTodo */
  }

  return (
    <div className={styles.todoFormContainer}>
      {/* добавляем див с классом
            для того чтобы все наши правила
            по тегам действовали только в данном
            компоненте */}
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {/* onChange значит значение из поля ввода 
            value это контролируемое поле ввода*/}
        <Button type="submit" title="Submit">
          Submit
        </Button>
        {/* Это наш компонент из папки ui */}
      </form>
    </div>
  )
}

export default TodoForm
