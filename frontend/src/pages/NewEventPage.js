import { json, redirect } from "react-router";
import EventForm from "../components/EventForm";

function NewEventPage() {
    return <EventForm method="post"/>
}

export default NewEventPage

