import style from './Assets/Css/logo.modde.Css';

export default function Logo() {
    return (
        <div className={style.logo}>
            <div className="hair">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153.16 126.87">.....
            </div>

            <div className={style.glasses}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.63 42.68">...
            </div>

            <div className={style.play}>
                <button type="button" >Colorsize Glass</button>
                <button type="button">Reset Glass</button>
            </div>
        </div>
    );
}