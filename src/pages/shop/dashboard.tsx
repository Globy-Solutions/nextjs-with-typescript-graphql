/**
 * `Shop ShopDashboard`.
 * @return {ReactNode} Shop Page.
 */

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import Product from '@/models'
import { productAdapter } from '@/adapters/'
import { Layouts, Cards } from '@/components/'
import { products } from '@/services/public.service'
import useFetchAndLoad from '@/hooks/useFetchAndLoad'
import { addItemToCart } from '@/states/redux/reducers/cartShop.reducer'

const ShopDashboard = (): JSX.Element => {
    const dispatch = useDispatch();
    const { loading, callEndpoint } = useFetchAndLoad();
    const [items, setItems] = useState<Product[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await callEndpoint(products());
            data.forEach((product: Product) => setItems(
                prev => [...prev, productAdapter(product)])
            );
        })()
    }, []);

    const add = (e: any) => {
        const { id, title, price } = items.find(
            (prod: Product) => prod.id === Number(e.target.id)
        );
        dispatch(addItemToCart({ id, title, price }))
    }

    return (
        <Layouts.Shop loading={loading}>
            {items.length > 0 && items.map(item => (
                <Cards.Product key={item.id} {...item} actions={{ add }} />
            ))}
        </Layouts.Shop>
    )
}

export default ShopDashboard;
