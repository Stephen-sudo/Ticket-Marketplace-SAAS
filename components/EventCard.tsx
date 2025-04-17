import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useUser } from "@clerk/nextjs";
import { Id } from "@/convex/_generated/dataModel";
import { useRouter } from "next/navigation";

const EventCard = ({ eventId }: { eventId: Id<"events"> }) => {
  const { user } = useUser();
  const router = useRouter();
  const event = useQuery(api.events.getById, { eventId });
  const availability = useQuery(api.events.getEventAvailability, { eventId });

  const userTickets = useQuery(api.tickets.getUserTickets, {
    eventId,
    userId: user?.id ?? "",
  });

  return <div>EventCard</div>;
};

export default EventCard;
