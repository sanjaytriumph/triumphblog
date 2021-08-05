import React from 'react';

import DashboardMenu from '../../components/DashboardMenu';
import EditPost from '../../components/EditPost';

const EditPostPage = () =>{
    return <>
        <div className="row">
            <div className="col-md-3">
                <DashboardMenu/>
            </div>
            <div className="col-md-9">
                <div className="card">
                    <div className="card-header">
                       Edit Post
                    </div>
                    <div className="card-body">
                        <EditPost/>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default EditPostPage