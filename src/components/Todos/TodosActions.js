import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

import Button from '../UI/Button'
/* .. выйти из папки Todos в папку components 
и лальше просто в папки зайти */

import styles from './TodosActions.module.css'

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  /* деструктуризаия на месте */
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reseset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>

      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
