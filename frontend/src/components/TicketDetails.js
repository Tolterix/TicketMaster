import React from 'react';

const TicketDetails = ({ ticketID }) => {
    const [ ticket, setTicket ] = React.useState({
        id: '',
        status: '',
        title: '',
        description: '',
        category: '',
        submittedBy: '',
        createdAt: ''
    });

    React.useEffect(async () => {
        var data = await (await fetch(
            `http://localhost:8080/tickets/${ticketID}`
        )).json();
        
        await setTicket({ ...data });
    });

    return (
        <>
            <p>Ticket #: { ticket.id }</p>
            <p>Status: { ticket.status}</p>
            <p>Title: { ticket.title }</p>
            <p>Description: { ticket.description }</p>
            <p>Category: { ticket.category }</p>
            <p>Submitted By: { ticket.submittedBy }</p>
            <p>Created At: { ticket.createdAt }</p>
        </>
    );
}

export default TicketDetails;
