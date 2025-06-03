import { useEffect, useMemo, useState } from 'react';
import desktopHero from 'shared/assets/home/desktop/image-hero.jpg';
import mobileHero from 'shared/assets/home/mobile/image-hero.jpg';
import tabletHero from 'shared/assets/home/tablet/image-hero.jpg';

interface UseHeroTypes {
    bgImage: never;
}

export default function useHero(): UseHeroTypes {
    const [bgImage, setBgImage] = useState('');

    useEffect(() => {
        const setImage = () => {
            // console.log(mobileHero);
            const width = window.innerWidth;
            if (width >= 1024) {
                setBgImage(desktopHero);
            } else if (width >= 576) {
                setBgImage(tabletHero);
            } else {
                setBgImage(mobileHero);
            }
        };

        setImage(); // set on load

        window.addEventListener('resize', setImage); // update on resize
        return () => window.removeEventListener('resize', setImage);
    }, []);

    return useMemo(() => ({ bgImage }), [bgImage]);
}
