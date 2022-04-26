import { Fragment } from 'react'

import MainNavigation from './mainNavigation'

export default function Layout (props) {
  const { children } = props

  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  )
}
