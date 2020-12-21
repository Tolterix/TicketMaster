import React from 'react';
import { StateContext } from '../State';

const TicketUpdatesTable = () => {
    const context = React.useContext(StateContext);

    var ticketUpdates;
    React.useEffect(async () => {
        var response = await fetch(
            `http://localhost:8080/tickets/${context.tickets.selected}`
        );

        ticketUpdates = await response.json();
    });

    return (
        <table>
            <h1>Updates</h1>
            <tr>
                <th>Description</th>
                <th>Updated By</th>
                <th>Updated At</th>
            </tr>
            {
                !ticketUpdates
                ? null
                : ticketUpdates.map((update) => {
                    return (
                        <tr>
                            <td>{ update.description }</td>
                            <td>{ update.updatedBy }</td>
                            <td>{ update.updatedAt }</td>
                        </tr>
                    );
                })
            }
        </table>
    );
}

export default TicketUpdatesTable;
