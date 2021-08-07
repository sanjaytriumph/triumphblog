import React from 'react';
import AddPost from '../../components/AddPost';

import DashboardMenu from '../../components/DashboardMenu';

const AddNewPost = (props) =>{
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
                        <AddPost apiurl={props.apiurl}/>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default AddNewPost