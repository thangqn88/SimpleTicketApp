import React from "react";
import TicketItem from "./TicketItem";

export default function TicketList({ tickets, dispatch, sortPreference }) {
  const sortedTickets = [...tickets].sort((a, b) => {
    if (sortPreference === "High to low") {
      return b.priority - a.priority;
    } else {
      return a.priority - b.priority;
    }
  });
  return (
    <div className="ticket-list">
      {sortedTickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} dispatch={dispatch} />
      ))}
    </div>
  );
}
