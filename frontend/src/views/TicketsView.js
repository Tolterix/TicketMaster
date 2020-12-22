import React from 'react';
import { StateContext } from '../State';

import TicketDetails from '../components/TicketDetails';
import TicketUpdatesTable from '../components/TicketUpdatesTable';
import TicketTable from '../components/TicketTable';

const TicketsView = () => {
    const context = React.useContext(StateContext);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <canvas height="0px" width="1000px"></canvas>
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Ticket Details
                            </h6>
                        </div>
                        <div className="card-body">
                            <TicketDetails />
                        </div>
                    </div>

                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Ticket Updates
                            </h6>
                        </div>
                        <div className="card-body">
                            <TicketUpdatesTable />
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <canvas height="0px" width="1000px"></canvas>

                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Tickets
                            </h6>
                        </div>
                        <div className="card-body">
                            <TicketTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicketsView;
