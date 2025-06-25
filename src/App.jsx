import { useState } from 'react';
import style from './app.module.scss';
import Banner from './components/banner/Banner';
import Design from './components/design/Design';
import Work from './components/works/Work';

const App = () => {
    return (
        <div className={style.container}>
           <Banner />
           <Design />
           <Work/>  
        </div>
    );
}

export default App;
