import React from "react";

import DashboardMenu from "../../components/DashboardMenu";
import EditPost from "../../components/EditPost";

const EditPostPage = (props) => {
  return (
    <>
      <div class="container-fluid">
        <div className="row">
          <div className="col-md-3 dashboardmenu-col pt-3">
            <DashboardMenu />
          </div>
          <div className="col-md-9 dashboarditem-col pt-3">
            <div className="card">
              <div className="card-header">Edit Post</div>
              <div className="card-body">
                <EditPost apiurl={props.apiurl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPostPage;
