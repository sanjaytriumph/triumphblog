import React from 'react';

import DashboardMenu from '../components/DashboardMenu';

const Dashboard = () =>{
    const username = sessionStorage.getItem('username');
    return <>
        <div className="row">
            <div className="col-md-3">
                <DashboardMenu/>
            </div>
            <div className="col-md-9">
                <div className="card">
                    <div className="card-header">
                        Dashboard
                    </div>
                    <div className="card-body">
                        <h2>Welcome, {username}</h2>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Dashboard