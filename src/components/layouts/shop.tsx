/**
 * `Layout Page Component`.
 * @param {ReactNode} Childs component.
 * @return {JSX.Element} Wrapper Component.
 */

import { useEffect, useState } from 'react'
import Footer from '../footer'
import { CartShop, Loaders } from '../'
import type { LayoutProps } from '.'

const Shop = ({ children, loading }: LayoutProps): JSX.Element => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect(() => {
    setTimeout(() => setIsMounted(true), 2000)
  }, [])
  return !loading && !isMounted ? (
    <Loaders.Default />
  ) : (
    <div className="container is-fluid">
      <CartShop />
      {children}
      <Footer />
    </div>
  )
}
export default Shop
