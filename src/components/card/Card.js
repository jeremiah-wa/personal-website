import './Card.css'

const Card = ({children, className, onClick}) => {
  return (
    <article className={'card ' + (className ? className : '')} onClick={onClick}>
        {children}
    </article>
  )
}

export default Card