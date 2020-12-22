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
                    <div className="text">
                        <p>
                            <b>Ticket #:</b>
                            <br></br>
                            <b>Status:</b>
                            <br></br>
                            <b>Title:</b>
                            <br></br>
                            <b>Description:</b>
                            <br></br>
                            <b>Category:</b>
                            <br></br>
                            <b>Submitted By:</b>
                            <br></br>
                            <b>Created At:</b>
                        </p>
                    </div>
                )
                : (
                    <div className="text-center">

                    </div>
                )
            }
        </>
    );
}

export default TicketDetails;
