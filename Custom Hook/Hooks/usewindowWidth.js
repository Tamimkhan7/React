import { useEffect, useState } from "react";


const useWindowWidth = (onscreensize) => {

    const [onSmallScreen, setOnSmallScreen] = useState(false);


    useEffect(() => {
        checkScreenSize();

        const checkScreenSize = () => {
            setOnSmallScreen(window.innerWidth < onscreensize);
        };
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);

    }, [onscreensize]);

    return onSmallScreen;
}

export default useWindowWidth;