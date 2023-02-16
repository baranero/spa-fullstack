import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventsPage, {loader as eventsLoader} from "./pages/Events";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventDetailPage, {loader as eventDetailLoader} from "./pages/EventDetailPage"
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
      {path: ':eventId', element: <EventDetailPage/>, loader: eventDetailLoader},
      {path: 'new', element: <NewEventPage/>},
      {path: ':eventId/edit', element: <EditEventPage/>},
    ]}

  ]}

])

function App() {
  return <RouterProvider router={router} />
}

export default App;
