/**
 * `Cart Shop Component`.
 * @return {JSX.Element} Component.
 */

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Product from '@/models'
import { Buttons } from '@/components/'
import { AppStore } from '@/states/redux/store'

const CartShop = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [showCart, setShowCart] = useState<boolean>(false)
  const cartState = useSelector((store: AppStore) => store.cartShop)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const showList = () => setShowCart(!showCart);

  return (
    <span data-testid="cart_shop">
      <Buttons.Simple
        data-testid="btn-cart_shop"
        loading={!isMounted}
        onClick={showList}
        endIcon={{ icon: 'cart-shopping' }}
      />
      <div className={`modal${showCart ? ' is-active' : ''}`} role="list-items" aria-hidden={showCart}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete" aria-label="close" onClick={showList} />
          </header>
          <section className="modal-card-body">
            {
              showCart && cartState.map(({ id, title, price }: Product) => (
                <p>
                  <Buttons.Simple
                    id={id}
                    endIcon={{ icon: 'cart-minus' }}
                  /> {title} {price}
                </p>
              ))
            }
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button className="button" onClick={showList}>Cancel</button>
          </footer>
        </div>
      </div>
    </span>
  )
}

export default CartShop
