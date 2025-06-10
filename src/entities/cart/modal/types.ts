export type CartInitialProps = {
    isCartOpened: boolean;
};

export type CartContextTypes = CartInitialProps & {
    showCart: () => void;
    hideCart: () => void;
};

export type ActionType = { type: string; payload: boolean };
