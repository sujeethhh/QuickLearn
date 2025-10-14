
import EventPageClient from "@/components/EventPageClient";
export default async function Events() {
  const onlineRes = await fetch("https://quicklearnsys.com/data/online_events.json", {
    cache: "no-store" // ensures fresh data every request
  });
  const onlineEvents = await onlineRes.json();

  // Fetch regular events
  const res = await fetch("https://quicklearnsys.com/data/events.json", {
    cache: "no-store"
  });
  const events = await res.json();

 return(
  <>
  <EventPageClient onlineEvents={onlineEvents} events={events}/>
  </>
 )
}
