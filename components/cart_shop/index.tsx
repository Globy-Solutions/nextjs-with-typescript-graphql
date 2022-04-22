/**
 * `Cart Shop Component`.
 * @return {JSX.Element} Component.
 */

import { useEffect, useState } from 'react'
import { Loaders, Buttons } from '../'

const CartShop = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [showCart, setShowCart] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const showList = () => setShowCart(!showCart)

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
            Content
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
