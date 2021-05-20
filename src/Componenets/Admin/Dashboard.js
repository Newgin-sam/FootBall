import React from 'react';
import AuthHOC from '../HOC/AuthHOC';
import AdminLayout from '../HOC/AdminLayout';

const Dashboard = (props) => {
    return (
        <AdminLayout title="dashboard">

            <div className="user_dashboard">
                <div>
                    This is your dashboard
                </div>    

            </div>

        </AdminLayout>
    );
};

export default AuthHOC(Dashboard);