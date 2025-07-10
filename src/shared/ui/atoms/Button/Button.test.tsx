import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { describe, expect, it } from 'vitest';

describe('Button', () => {
    // it('prints available roles', () => {
    //     const { container } = render(
    //         <Button icon="mdi:cart" iconPlacement="start">
    //             Button
    //         </Button>
    //     );
    //     const roles = getRoles(container);
    //     console.log(roles);
    // });

    it('should render default button with children', () => {
        render(<Button>Button</Button>);
        const button = screen.getByText('Button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('bg-peru');
    });

    describe('Variants', () => {
        it('should render contained variant', () => {
            render(<Button variant="contained">Button</Button>);
            const button = screen.getByText(/button/i);
            expect(button).toHaveClass('bg-peru');
            expect(button).toHaveClass('text-white');
        });

        it('should render outlined variant', () => {
            render(<Button variant="outlined">Button</Button>);
            const button = screen.getByText(/button/i);
            expect(button).toHaveClass('bg-transparent');
            expect(button).toHaveClass('border-2');
            expect(button).toHaveClass('text-black');
        });

        it('should render text variant', () => {
            render(<Button variant="text">Button</Button>);
            const button = screen.getByText(/button/i);
            expect(button).not.toHaveClass('w-40 h-12');
        });
    });


    describe.skip('Icon Placement', () => {
        it('should render icon at the end by default', () => {
            render(<Button icon="mdi:cart">Button</Button>);
            const button = screen.getByText('Button');
            const icon = button.querySelector('svg');
            expect(icon).toBeInTheDocument();
            expect(button.lastChild).toBe(icon);
        });

        it('should render icon at the start when iconPlacement is start', () => {
            render(
                <Button icon="mdi:cart" iconPlacement="start">
                    Button
                </Button>
            );
            const button = screen.getByText('Button');
            const icon = button.querySelector('svg');
            expect(icon).toBeInTheDocument();
            expect(button.firstChild).toBe(icon);
        });

        it('should render icon at the end when iconPlacement is end', () => {
            render(
                <Button icon="mdi:cart" iconPlacement="end">
                    Button
                </Button>
            );
            const button = screen.getByText('Button');
            const icon = button.querySelector('svg');
            expect(icon).toBeInTheDocument();
            expect(button.lastChild).toBe(icon);
        });

        it('should not render icon when icon prop is not provided', () => {
            render(<Button>Button</Button>);
            const button = screen.getByText('Button');
            const icon = button.querySelector('svg');
            expect(icon).not.toBeInTheDocument();
        });
    });

});
