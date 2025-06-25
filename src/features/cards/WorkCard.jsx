import style from './workCards.module.scss';

const WorkCard = ({ image, title, text }) => {
  return (
    <div className={style.work}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <span>{text}</span>
    </div>
  )
}

export default WorkCard