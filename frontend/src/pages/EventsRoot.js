import { Fragment } from "react"
import { Outlet } from "react-router"
import EventsNavigation from "../components/EventsNavigation"

function EventsRoot() {
    return <Fragment>
        <EventsNavigation/>
        <Outlet/>
    </Fragment>
}

export default EventsRoot