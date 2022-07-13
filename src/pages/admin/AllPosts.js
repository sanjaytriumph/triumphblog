import React from "react";
import AdminPostList from "../../components/admin/AdminPostList";

import DashboardMenu from "../../components/DashboardMenu";

const AllPosts = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 dashboardmenu-col pt-3">
            <DashboardMenu />
          </div>
          <div className="col-md-9 pt-3 dashboarditem-col">
            <div className="card">
              <div className="card-header">Add New Post</div>
              <div className="card-body">
                <AdminPostList apiurl={props.apiurl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPosts;
