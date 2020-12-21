import React from 'react';
import { StateContext } from '../State';

import NavigationBar from '../components/NavigationBar';
import TicketDetails from '../components/TicketDetails';
import TicketUpdatesTable from '../components/TicketUpdatesTable';
import TicketTable from '../components/TicketTable';

const TicketsView = () => {
    const context = React.useContext(StateContext);

    return (
        <div className='tickets-view'>
            <div>
                <section id='ticket-details'>
                    <TicketDetails />
                </section>

                <section id='ticket-updates'>
                    <TicketUpdatesTable />
                </section>
            </div>

            <section id='ticket-table'>
                <TicketTable />
            </section>
        </div>
    );
}

export default TicketsView;
