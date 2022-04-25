/**
 * `Simple Button Component`.
 * @return {JSX.Element} Button Component.
 */

import type { Props } from '.'
import Icon from '../icon'

const Simple = (props: Props): JSX.Element => {
  const {
    children,
    endIcon,
    loading,
    startIcon,
    ...rest
  } = props;
  return loading ? (<Icon icon='loader' />) : (
    <button
      {...rest}
    >
      {startIcon && <Icon key={startIcon.key} icon={startIcon.icon} />}
      {children}
      {endIcon && <Icon key={endIcon.key} icon={endIcon.icon} />}
    </button>
  )
}

export default Simple
