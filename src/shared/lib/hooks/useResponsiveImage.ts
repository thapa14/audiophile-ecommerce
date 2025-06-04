import { useEffect, useMemo, useState } from 'react';

interface UseResponsiveImageReturn {
    bgImage: string;
}

interface UseResponsiveImageOptions {
    mobile: string;
    tablet: string;
    desktop: string;
}

export function useResponsiveImage({
    mobile,
    tablet,
    desktop,
}: UseResponsiveImageOptions): UseResponsiveImageReturn {
    const [bgImage, setBgImage] = useState('');

    useEffect(() => {
        const setImage = () => {
            // console.log(mobileHero);
            const width = window.innerWidth;
            if (width >= 1024) {
                setBgImage(desktop);
            } else if (width >= 576) {
                setBgImage(tablet);
            } else {
                setBgImage(mobile);
            }
        };

        setImage(); // set on load

        window.addEventListener('resize', setImage); // update on resize
        return () => window.removeEventListener('resize', setImage);
    }, [desktop, mobile, tablet]);

    return useMemo(() => ({ bgImage }), [bgImage]);
}
