/**
 * `Layout Page Component`.
 * @param {ReactNode} Childs component.
 * @return {JSX.Element} Wrapper Component.
 */

import { useEffect, useState } from 'react'
import Header from '../header'
import Footer from '../footer'
import { Loaders } from '../'
import type { LayoutProps } from '.'

const Default = ({ children, loading }: LayoutProps): JSX.Element => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return !loading && !isMounted ? (
    <Loaders.Default />
  ) : (
    <div className="container is-fluid">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Default
