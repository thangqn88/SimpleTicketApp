export const sortingTicket = (tickets, sortPreference) => {
  switch (sortPreference) {
    case "High to low":
      return [...tickets].sort((a, b) => b.priority - a.priority);
    case "Low to high":
      return [...tickets].sort((a, b) => a.priority - b.priority);
    default:
      return tickets;
  }
};
