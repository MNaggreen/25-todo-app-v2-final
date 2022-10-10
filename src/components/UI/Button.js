import styles from './Button.module.css'

function Button(props) {

const {onClick,
children /* точто будет отображаться внутри кнопки */,
title /* точто будет отображаться при наведении на кнопку */,
disabled = false /* активность кнопки по умолчанию Активна */} = props
/* здесь мы выполнили деструктуризацию обекта props Отдельно */
/* так рекомендуется делать чтобы получить все свойства
которые передаються из других файлов */
  return (
    <button
      {...props}
      /* тут мы получем дополнительные свойства
      из TodoForm 
      а ниже просто фиксированные свойства
      но не все т.е. мы берем с помощью деструктуризации
      кстати свойства ниже можно далить и ничего не сломается*/
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

/* то что мы пишем в теге button будет передаваться как children */

export default Button
