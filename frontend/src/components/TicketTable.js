import React from 'react';
import { Redirect } from 'react-router-dom';
import { StateContext } from '../State';

const TicketTable = () => {
    const context = React.useContext(StateContext);

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

    const changeTicket = (event) => {
        context.setState({tickets: {...context.tickets, selected: event.target.value}})
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
                        context.tickets.queue.length < 0
                        ? null
                        : context.tickets.queue.map((ticket, i) => {
                            return (
                                <tr key={ ticket.id } value={ ticket.id }
                                    onClick={ handleTicketSelect }>
                                    <td>
                                        {
                                            i === context.tickets.selected
                                            ? <input type="radio" name="selection" value={ ticket.id } checked />
                                            : <input type="radio" name="selection" onChange={changeTicket} value={ ticket.id }/>
                                        }
                                    </td>
                                    <td>{ ticket.id }</td>
                                    <td>{ ticket.title }</td>
                                    <td>{ ticket.status }</td>
                                    <td>{ ticket.created_at }</td>
                                    <td>{ ticket.updated_at }</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    );
}

export default TicketTable;
