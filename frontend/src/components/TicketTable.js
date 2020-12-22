import React from 'react';
import { Redirect } from 'react-router-dom';
import { StateContext } from '../State';

const TicketTable = () => {
    const context = React.useContext(StateContext);

    var tickets = [
        { id: 1, title: "New Ticket", status: "New", createdAt: "Today", updatedAt: "Today"}
    ];
    React.useEffect(async () => {
        var response = await fetch(
            `http://localhost:8080/tickets?userID=${context.user.id}\
                &view=${context.tickets.view}`
        );

        tickets = await response.json();
    });

    const handleTicketSelect = (event) => {
        context.setState({
            ...context,
            tickets: {
                ...context.tickets,
                selected: Number(event.currentTarget.value)
            }
        });
    }

    const changeView = () => {
        context.setState({
            ...context,
            tickets: {
                ...context.tickets,
                view: (context.tickets.view + 1) % 2
            }
        });
    }

    return (
        <div className="table-responsive">
            <table className="table table-bordered" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !tickets
                        ? null
                        : tickets.map((ticket, i) => (
                            <tr key={ ticket.id } value={ ticket.id }
                                onClick={ handleTicketSelect }>
                                <td>
                                    {
                                        i === 0
                                        ? <input type="radio" name="selection" value={ ticket.id } checked />
                                        : <input type="radio" name="selection" value={ ticket.id }/>
                                    }
                                </td>
                                <td>{ ticket.id }</td>
                                <td>{ ticket.title }</td>
                                <td>{ ticket.status }</td>
                                <td>{ ticket.createdAt }</td>
                                <td>{ ticket.updatedAt }</td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    );
}

export default TicketTable;
