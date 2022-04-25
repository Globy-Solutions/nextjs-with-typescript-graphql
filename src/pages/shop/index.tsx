/**
 * `Shop Test Page`.
 * @return {ReactNode} Wrapper Component.
 */

import { Provider } from 'react-redux'
import ShopDashboard from './dashboard'
import { store } from '@/states/redux/store'

const ShopPage = () => (
    <Provider store={store}>
        <ShopDashboard />
    </Provider>
)

export default ShopPage;
