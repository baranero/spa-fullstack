import { Fragment } from "react"
import { Outlet } from "react-router"
import MainNavigation from "../components/MainNavigation"

function RootLayout() {
  return <Fragment>
    <MainNavigation/>
    <Outlet/>
  </Fragment>
}

export default RootLayout