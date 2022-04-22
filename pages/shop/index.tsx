/**
 * `Shop Test Page`.
 * @return {ReactNode} Wrapper Component.
 */

 import React, { ReactNode, useEffect, useState } from 'react'
import { Layouts, Cards } from '@/components/'

const items = [
    {
        id: 40,
        title: 'Facundo',
        subtitle: '@facundo-cachan',
        date: '31-07-1981'
    },
    {
        id: 22,
        title: 'Ivo',
        subtitle: '@ivo-paolantonio',
        date: '09-09-1999'
    },
    {
        id: 18,
        title: 'Valentino',
        subtitle: '@valentino-cachan',
        date: '11-06-2003'
    }
]
 const ShopPage = (): ReactNode => {
     const [loading, setLoading] = useState<boolean>(true)
     useEffect(()=>{
         setLoading(!loading)
     }, [])
     return (<Layouts.Shop loading={loading}>{items.map(item => <Cards.Simple key={item.id} {...item} />)}</Layouts.Shop>)
 }
  
  export default ShopPage
  