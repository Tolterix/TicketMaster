import React from 'react';
import { StateContext } from '../State';

const TicketDetails = () => {
    const context = React.useContext(StateContext);

    let specificTicket = context.tickets.queue.filter(i => i.id == context.tickets.selected)[0]
    
    return (
        <>
            {
                !specificTicket
                ? <div></div>
                : <div className="text">
                    <p>
                        <b>Ticket #: {specificTicket.id}</b>
                        <br/>
                        <b>Status: {specificTicket.status}</b>
                        <br/>
                        <b>Title: {specificTicket.title}</b>
                        <br/>
                        <b>Description: {specificTicket.description}</b>
                        <br/>
                        <b>Category: {specificTicket.category_id}</b>
                        <br/>
                        <b>Submitted By: {specificTicket.submitted_by}</b>
                        <br/>
                        <b>Created At: {specificTicket.created_at}</b>
                        <br/>
                    </p>
                </div>
            }
        </>
    );
}

export default TicketDetails;
