import { ButtonHTMLAttributes, ReactChild } from 'react'
import Linked from './linked'
import Simple from './simple'
import type { Icon } from '../icon'
export { Linked, Simple }

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactChild
  endIcon?: Icon
  href?: string
  loading?: boolean
  startIcon?: Icon
}
