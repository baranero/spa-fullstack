import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventsPage, {loader as eventsLoader} from "./pages/Events";
import NewEventPage, {action as newEventAction} from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventDetailPage, {loader as eventDetailLoader, action as deleteEventAction} from "./pages/EventDetailPage"
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {path: '/', element: <RootLayout/>, errorElement: <ErrorPage/>,
  children: [
    {index: true, element: <HomePage/>},
    {path: 'events', element: <EventsRoot/>, children: [
      {index: true, element: <EventsPage/>, loader: eventsLoader},
      {
        path: ':eventId',
        id: 'event-detail',
        loader: eventDetailLoader,
        children: [
          {index: true, element: <EventDetailPage/>,
        action: deleteEventAction},
          {path: 'edit', element: <EditEventPage/>},
        ]
      },
      {path: 'new', element: <NewEventPage/>, action: newEventAction},
    ]}

  ]}

])

function App() {
  return <RouterProvider router={router} />
}

export default App;
