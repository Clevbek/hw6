import style from './services.module.scss';

const Services = ({img, title, description}) => {
    return (
        <div className={style.service}>
            <div className={style.img}>
                <img src={img} alt="" />
            </div>
            
            <div className={style.description}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Services;
