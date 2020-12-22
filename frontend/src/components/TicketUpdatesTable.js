import React from 'react';
import { StateContext } from '../State';

const TicketUpdatesTable = () => {
    const context = React.useContext(StateContext);

    var ticketUpdates = [
        { description: "Contacted customer", updatedBy: "Jared Shue", updatedAt: "Today" },
        { description: "Contacted customer", updatedBy: "Jared Shue", updatedAt: "Today" },
        { description: "Contacted customer", updatedBy: "Jared Shue", updatedAt: "Today" },
        { description: "Contacted customer", updatedBy: "Jared Shue", updatedAt: "Today" },
    ];
    React.useEffect(async () => {
        var response = await fetch(
            `http://localhost:8080/tickets/${context.tickets.selected}`
        );

        ticketUpdates = await response.json();
    });

    return (
        <div className="table-responsive">
            <table className="table table-bordered" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Updated By</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>
            </table>
        </div>
    );
}

export default TicketUpdatesTable;
