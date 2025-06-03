import { useState } from 'react';

interface UseHeaderTypes {
    isMenuOpened: boolean;
    toggleMenu: () => void;
}

export default function useHeader(): UseHeaderTypes {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpened(prev => !prev);
    };

    return { isMenuOpened, toggleMenu };
}
