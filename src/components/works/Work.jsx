import WorkCard from '../../features/cards/WorkCard';
import image from '../../imgs/Rectangle4.png';
import style from './work.module.scss';

const Work = () => {
    const items = [
        {
            id: 1,
            image: image,
            texts: {
                title: 'Project title',
                text: 'UI, Art drection'
            }
        },
        {
            id: 2,
            image: image,
            texts: {
                title: 'Project title',
                text: 'UI, Art drection'
            }
        },
        {
            id: 3,
            image: image,
            texts: {
                title: 'Project title',
                text: 'UI, Art drection'
            }
        },
        {
            id: 4,
            image: image,
            texts: {
                title: 'Project title',
                text: 'UI, Art drection'
            }
        },
        {
            id: 5,
            image: image,
            texts: {
                title: 'Project title',
                text: 'UI, Art drection'
            }
        },
        {
            id: 6,
            image: image,
            texts: {
                title: 'Project title',
                text: 'UI, Art drection'
            }
        },
    ]

    return (
        <section className={style.work__parent}>
            <h2>Latest work</h2>
            <div className={style.work__content}>
            {items?.map((item) => {
                return <WorkCard
                    text={item.texts.text}
                    title={item.texts.title}
                    image={item.image}
                />
            })}
            </div>
        </section>
    );
}

export default Work;
