import React from 'react';
import { connect } from 'react-redux';

export const Dashboard = ({ groups }) => ( 
 <div>
    <h2>Dashboard</h2>
    {groups.map(group => {        
      return <div>{group.name}</div>
    })}
  </div>
);

function mapStateToProps(state) {
  return { groups: state.groups };
}

export const ConnnectedDashboard = connect(mapStateToProps)(Dashboard);
