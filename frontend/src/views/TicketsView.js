import React from 'react';
import { StateContext } from '../State';

import TicketDetails from '../components/TicketDetails';
import TicketTable from '../components/TicketTable';

const TicketsView = () => {
    const context = React.useContext(StateContext);

    return (
        <div className='tickets-view'>
            <div>
                <section id='ticket-details'>
                    {
                        context.tickets.selected
                        ? <TicketDetails ticketID={context.tickets.selected} />
                        : null
                    }
                </section>

                <section id='ticket-updates'>

                </section>
            </div>

            <section id='ticket-table'>
                <TicketTable />
            </section>
        </div>
    );
}

export default TicketsView;
