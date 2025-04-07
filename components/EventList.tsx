"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const EventList = () => {
  const events = useQuery(api.events.getQuery);
  console.log("events", events);
  return <div>EventList</div>;
};

export default EventList;
