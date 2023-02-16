import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventsPage, {loader as eventsLoader} from "./pages/Events";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventDetailPage from "./pages/EventDetailPage"
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";

const router = createBrowserRouter([
  {path: '/', element: <RootLayout/>,
  children: [
    {index: true, element: <HomePage/>},
    {path: 'events', element: <EventsRoot/>, children: [
      {index: true, element: <EventsPage/>, loader: eventsLoader},
      {path: ':eventId', element: <EventDetailPage/>},
      {path: 'new', element: <NewEventPage/>},
      {path: ':eventId/edit', element: <EditEventPage/>},
    ]}

  ]}

])

function App() {
  return <RouterProvider router={router} />
}

export default App;
