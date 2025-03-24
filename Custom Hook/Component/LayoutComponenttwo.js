import { useEffect, useState } from "react";

export default function LayoutComponentOne() {

    const [onSmallScreen, setOnSmallScreen] = useState(false);

    const checkScreenSize = () => {
        setOnSmallScreen(window.innerWidth < 768);
    };

    useEffect(() => {
        checkScreenSize();
        // In JavaScript, addEventListener("resize", callbackFunction) attaches a callback function to the "resize" event on the window object, triggering the function whenever the browser window is resized
        window.addEventListener("resize", checkScreenSize);

        // now cleaning of the windows
        return () => window.removeEventListener('resize', checkScreenSize);

    }, []);

    return (
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small' : 'large'} device</h1>
        </div>
    );
}