import { beforeEach, describe, vi, it, afterEach, expect } from 'vitest';
import { type CartItemsType, useCartContext } from 'entities/cart';
import { useHeader } from 'widgets/header/modal';
import { render, screen } from '@testing-library/react';
import { Header } from 'widgets/header';
import user from '@testing-library/user-event';

const mockCartItems: CartItemsType[] = [
    {
        id: 1,
        quantity: 2,
        price: 250,
    },
    {
        id: 2,
        quantity: 2,
        price: 200,
    },
];

vi.mock('@iconify/react', () => ({
    Icon: ({ icon, width, height, className }: any) => (
        <div
            data-testid={`icon-${icon}`}
            data-width={width}
            data-height={height}
            className={className}
        />
    ),
}));

vi.mock('entities/cart', () => ({
    useCartContext: vi.fn(),
}));

vi.mock('features/product-category-list', () => ({
    ProductCategoryList: ({ toggleMenu }: any) => (
        <div data-testid="product-category-list">
            <button onClick={toggleMenu}>ToggleMenu</button>
        </div>
    ),
}));

vi.mock('react-router', () => ({
    Link: ({ to, children, className, ...props }: any) => (
        <a href={to} className={className} {...props}>
            {children}
        </a>
    ),
}));

vi.mock('/assets/logo/logo.svg', () => ({
    default: () => 'mocked-logo.svg',
}));

vi.mock('shared/config', () => ({
    navEnums: {
        home: '/',
        headphones: '/headphones',
        earphones: '/earphones',
        speakers: '/speakers',
    },
}));

vi.mock('widgets/header/modal', () => ({
    useHeader: vi.fn(),
}));

const mockUseCartContext = vi.mocked(useCartContext);
const mockUseHeader = vi.mocked(useHeader);

describe('Header component', () => {
    const defaultCartContext = {
        isCartOpened: false,
        cartItems: [],
        showCart: vi.fn(),
        hideCart: vi.fn(),
        addToCart: vi.fn(),
        onRemoveAll: vi.fn(),
        onProductQuantityIncrement: vi.fn(),
        onProductQuantityDecrement: vi.fn(),
        onResetAll: vi.fn(),
    };

    const defaultUseHeaderValue = {
        isMenuOpened: false,
        toggleMenu: vi.fn(),
        setIsMenuOpened: vi.fn(),
        navigateToHome: vi.fn(),
    };

    beforeEach(() => {
        mockUseCartContext.mockReturnValue(defaultCartContext);
        mockUseHeader.mockReturnValue(defaultUseHeaderValue);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    describe('basic rendering', () => {
        it('should render logo', () => {
            render(<Header />);
            const logoElement = screen.getByAltText(/company logo/i);
            expect(logoElement).toBeInTheDocument();
        });

        it('should render cart', () => {
            render(<Header />);
            const cartElement = screen.getByRole('button', { name: /view cart/i });
            expect(cartElement).toBeInTheDocument();
        });
        it('should render nav links', () => {
            render(<Header />);
            expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
            expect(screen.getByRole('link', { name: /headphones/i })).toBeInTheDocument();
            expect(screen.getByRole('link', { name: /earphones/i })).toBeInTheDocument();
            expect(screen.getByRole('link', { name: /speakers/i })).toBeInTheDocument();
        });
        it('renders mobile menu button', () => {
            render(<Header />);

            const menuButton = screen.getByLabelText('mobile menu');
            expect(menuButton).toBeInTheDocument();
        });
    });

    describe('Mobile Menu Functionality', () => {
        it('should show hamburger icon when menu is closed', () => {
            mockUseHeader.mockReturnValue({ ...defaultUseHeaderValue, isMenuOpened: false });
            render(<Header />)
            const hamburgerElement = screen.getByTestId("icon-mdi:hamburger-menu")
            expect(hamburgerElement).toBeInTheDocument()
        });

        it('should show open icon when menu is open', () => {
            mockUseHeader.mockReturnValue({ ...defaultUseHeaderValue, isMenuOpened: true });
            render(<Header />)
            const hamburgerElement = screen.getByTestId("icon-mdi:hamburger-open")
            expect(hamburgerElement).toBeInTheDocument()
        });

        it("call toggleMenu when menu button is clicked", async () => {
            const mockToggleMenu = vi.fn()
            mockUseHeader.mockReturnValue({ ...defaultUseHeaderValue, toggleMenu: mockToggleMenu});
           const userEvent = user.setup()
            render(<Header />)
            const iconButton = screen.getByRole('button', { name: /mobile menu/i });
            await userEvent.click(iconButton);
            expect(mockToggleMenu).toHaveBeenCalledTimes(1)
        })

        it("hides mobile menu if isMenuOpened is false", async () => {
            mockUseHeader.mockReturnValue({ ...defaultUseHeaderValue,  isMenuOpened: false});
            render(<Header />);
            const mobileMenu = screen.queryByTestId('product-category-list');
            expect(mobileMenu).toBeInTheDocument();
            expect(mobileMenu).not.toBeVisible()
        })
    });

    describe("Cart functionality", () => {
        it("shows cart without badge when cart is empty", () => {
            render(<Header/>)
            const cartElement = screen.getByRole('button', { name: /view cart/i });
            expect(cartElement).toBeInTheDocument();
            expect(screen.queryByText(0)).not.toBeInTheDocument()
        })

        it("shows badge when cart is not empty", () => {
            mockUseCartContext.mockReturnValue({ ...defaultCartContext, cartItems: mockCartItems });
            render(<Header />)
            const cartElement = screen.getByRole('button', { name: /view cart/i });
            expect(cartElement).toBeInTheDocument();
            expect(screen.queryByText(2)).toBeInTheDocument()
        })
        it("calls showCart when cart button is clicked", async () => {
            const mockShowCart = vi.fn();
            mockUseCartContext.mockReturnValue({...defaultCartContext, showCart: mockShowCart})
            user.setup()
            render(<Header />)
            const cartElement = screen.getByRole('button', { name: /view cart/i });
            await user.click(cartElement);
            expect(mockShowCart).toHaveBeenCalledTimes(1)
        })
    })
});
