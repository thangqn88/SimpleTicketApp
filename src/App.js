import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForms from "./components/TicketForms";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./components/TicketList";
import { sortingTicket } from "./utilities/sorting";

function App() {
  const initialTickets = {
    tickets: [],
    editingTicket: null,
    sortPreference: "High to low",
  };
  const [state, dispatch] = useReducer(ticketReducer, initialTickets);
  const sortedTickets = sortingTicket(state.tickets, state.sortPreference);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForms dispatch={dispatch} editingTicket={state.editingTicket} />
        {state.tickets.length > 0 && (
          <div className="result">
            <h2>All Tickets</h2>

            <select
              value={state.sortPreference}
              onChange={(e) =>
                dispatch({ type: "SET_SORTING", payload: e.target.value })
              }
            >
              <option value="High to low">High to low</option>
              <option value="Low to high">Low to high</option>
            </select>

            <TicketList
              tickets={sortedTickets}
              dispatch={dispatch}
              sortPreference={state.sortPreference}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
