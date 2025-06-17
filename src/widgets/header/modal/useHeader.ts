import { type Dispatch, type SetStateAction, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

interface UseHeaderTypes {
    isMenuOpened: boolean;
    toggleMenu: () => void;
    setIsMenuOpened: Dispatch<SetStateAction<boolean>>;
    navigateToHome: () => void;
}

export default function useHeader(): UseHeaderTypes {
    const navigate = useNavigate();
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

    useEffect(() => {
        const setMenuType = () => {
            const width = window.innerWidth;
            if (width >= 1024) setIsMenuOpened(false);
        };
        window.addEventListener('resize', setMenuType); // update on resize
        return () => window.removeEventListener('resize', setMenuType);
    }, []);

    const toggleMenu = useCallback(() => {
        setIsMenuOpened(prev => !prev);
    }, []);

    const navigateToHome = useCallback(() => {
        navigate('/');
    }, [navigate]);

    return { isMenuOpened, toggleMenu, setIsMenuOpened, navigateToHome };
}
