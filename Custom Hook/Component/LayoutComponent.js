import useWindowWidth from "../Hooks/usewindowWidth";

export default function LayoutComponenttwo() {

    const onSmallScreen = useWindowWidth(600); //onSmallScreen useWindowWidth ar modde ace,,, oita just ami access korteci

    return (
        <div className={onSmallScreen ? 'small' : 'large'}>
            <h1>This is another component</h1>
        </div>
    );
}