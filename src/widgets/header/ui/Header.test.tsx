import { describe, vi, it } from 'vitest';
import type { CartItemsType } from 'entities/cart';

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
const mockShowCart = vi.fn()
vi.mock("entities/cart/modal/cartContext", () => ({
 useCartContext: () => ({
     showCart: mockShowCart,
     cartItems: mockCartItems
 })
}))

// describe("Header Component", () => {
//     describe("initial render and state", () => {
//         it("should render with menu closed", () => {
//             render(<Header />);
//             // Add assertions to verify the menu is closed by default
//             // For example:
//             // expect(screen.queryByTestId("menu")).not.toBeInTheDocument();
//         })
//     })
// })