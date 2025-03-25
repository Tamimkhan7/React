import style from './Assets/Css/logo.modde.Css';
import { useState } from 'react';

export default function Logo() {

    const [glassColor, setGlesscolor] = useState('black');

    // pickcolor randomly

    const pickColorRandomly = () => {
        const colors = ["red", "green", "yellow", "blue", "orange"];
        const color = colors[Math.floor(Math.random() * colors.length())];
        return color;
    }

    return (
        <div className={style.logo}>
            <div className="hair">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153.16 126.87">.....
            </div>

            <div className={style.glasses}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.63 42.68">...
            </div>

            <div className={style.play}>
                <button type="button" onClick={() => setGlesscolor(pickColorRandomly)}>Colorsize Glass</button>
                <button type="button" onClick={() => setGlesscolor('black')}>Reset Glass</button>
            </div>
        </div>
    );
}