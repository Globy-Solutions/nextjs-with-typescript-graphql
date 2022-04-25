import { fireEvent, render, screen } from '@testing-library/react';
import { CartShop } from '@/components/';

beforeEach(() => render(<CartShop />))

describe('Cart Shop', () => {
    test('Default cart button & list items', async () => {
        [
            screen.getByTestId('cart_shop'),
            screen.getByRole('list-items')
        ].forEach((el) => {
            expect(el).toBeTruthy();
            expect(el).toBeInTheDocument();
        })
    });
    test('Default cart list', async () => {
        const list = screen.getByRole('list-items');
        const btn = screen.getByTestId('btn-cart_shop');
        fireEvent.click(btn);
        expect(list.classList.contains('is-active')).toBeTruthy()
    })
})
