import { ReactNode } from 'react';
import Default from "./default";
import Shop from "./shop";
export { Default, Shop };

export type LayoutProps = {
    children: ReactNode
    loading?: boolean
  }