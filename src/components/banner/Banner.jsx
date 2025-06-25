import style from './banner.module.scss';
import banner from '../../imgs/banner.png';

const Banner = () => {
    return (
        <section className={style.container}>
            <div className={style.description}>
                <h3>Branding | Image making </h3>
                <h1>Visual Designer</h1>
                <p>
                    This is a template Figma file, turned into code using Anima. 
                    Learn more at AnimaApp.com
                </p>
                <button>Contact</button>
            </div>
            <div className={style.bg_banner}>
                <img src={banner} alt="banner_img" />
            </div>
        </section>
    );
}

export default Banner;
