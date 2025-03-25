
// akhn ami update size dile oh somossa nai, all working are correctly 

export default function LayoutComponentOne(onscreensize) {

    const onSmallScreen = useWindowWidth(700); //onSmallScreen useWindowWidth ar modde ace,,, oita just ami access korteci


    return (
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small' : 'large'} device</h1>
        </div>
    );
}