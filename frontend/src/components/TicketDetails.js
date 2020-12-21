import React from 'react';
import { StateContext } from '../State';

const TicketDetails = () => {
    const context = React.useContext(StateContext);

    var ticket;
    React.useEffect(async () => {
        var response = await fetch(
            `http://localhost:8080/tickets/${context.tickets.selected}`
        );

        ticket = await response.json();
    });

    return (
        <>
            {
                !ticket
                ? (
                    <>
                        <p>Ticket #:</p>
                        <p>Status:</p>
                        <p>Title:</p>
                        <p>Description:</p>
                        <p>Category:</p>
                        <p>Submitted By:</p>
                        <p>Created At:</p>
                    </>
                )
                : (
                    <>
                        <p>Ticket #: { ticket.id }</p>
                        <p>Status: { ticket.status }</p>
                        <p>Title: { ticket.title }</p>
                        <p>Description: { ticket.description }</p>
                        <p>Category: { ticket.category }</p>
                        <p>Submitted By: { ticket.submittedBy }</p>
                        <p>Created At: { ticket.createdAt }</p>
                    </>
                )
            }
        </>
    );
}

export default TicketDetails;
