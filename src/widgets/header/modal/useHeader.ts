import { useState } from 'react';

export default function useHeader() {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpened(prev => !prev);
    };

    return { isMenuOpened, toggleMenu };
}
