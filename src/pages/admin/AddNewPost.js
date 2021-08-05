import React from 'react';
import AddPost from '../../components/AddPost';

import DashboardMenu from '../../components/DashboardMenu';

const AddNewPost = () =>{
    return <>
        <div className="row">
            <div className="col-md-3">
                <DashboardMenu/>
            </div>
            <div className="col-md-9">
                <div className="card">
                    <div className="card-header">
                        Add New Post
                    </div>
                    <div className="card-body">
                        <AddPost/>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default AddNewPost