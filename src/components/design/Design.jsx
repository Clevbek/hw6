import style from './design.module.scss';
import service1 from '../../imgs/Skills1.png';
import service2 from '../../imgs/Skills2.png';
import service3 from '../../imgs/Skills3.png';
import service4 from '../../imgs/Skills4.png';
import Services from '../../features/services/Services';

const Design = () => {

    const services = [
        {
            id: 1,
            img: service1,
            title: 'Product Design',
            description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'
        },
        {
            id: 2,
            img: service2,
            title: 'Visual Design',
            description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'
        },
        {
            id: 3,
            img: service3,
            title: 'Art Direction',
            description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'
        },
        {
            id: 4,
            img: service4,
            title: 'UI/UX',
            description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'
        }
    ];

    return (
        <section className={style.container}>
            {
                services && 
                services.map(service => (
                    <Services 
                        key={service.id}
                        img={service.img} 
                        title={service.title} 
                        description={service.description}
                    />
                ))
            }
        </section>
    );
}

export default Design;
