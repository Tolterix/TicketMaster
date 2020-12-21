import React from 'react';
import { Redirect } from 'react-router-dom';
import { StateContext } from '../State';

const TicketTable = () => {
    const context = React.useContext(StateContext);

    var tickets;
    React.useEffect(async () => {
        var response = await fetch(
            `http://localhost:8080/tickets?userID=${context.user.id}\
                &view=${context.tickets.view}`
        );

        tickets = await response.json();
    });

    const handleClick = (event) => {
        context.setState({
            ...context,
            tickets: {
                ...context.tickets,
                selected: Number(event.currentTarget.value)
            }
        });
    }

    return (
        <table>
            <h1>Tickets</h1>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Updated At</th>
            </tr>
            {
                !tickets
                ? null
                : tickets.map(ticket => {
                    return (
                        <tr key={ ticket.id } value={ ticket.id }
                            onClick={ handleClick }>
                            <td>{ ticket.id }</td>
                            <td>{ ticket.title }</td>
                            <td>{ ticket.status }</td>
                            <td>{ ticket.createdAt }</td>
                            <td>{ ticket.updatedAt }</td>
                        </tr>
                    );
                })
            }
        </table>
    );
}

export default TicketTable;
