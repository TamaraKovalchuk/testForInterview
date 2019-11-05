import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getList, getUserData } from './action/getList';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "ID", field: "id"
      }, {
        headerName: "Name", field: "name"
      }, {
        headerName: "Email", field: "email"
      }],
      gridOptions: {
        onRowClicked: this.rowOnClick
      },
      open: false,
    }
  }

  componentDidMount() {
    this.props.getAllDatalist();
  }
  
  render(){
    return (
       <div 
        className="ag-theme-balham main"
        style={{ 
        height: '500px', 
        width: '700px' }} 
      >
        <AgGridReact
          gridOptions={this.state.gridOptions}
          pagination={true}
          paginationPageSize={3}
          columnDefs={this.state.columnDefs}
          rowData={this.props.dataList}>
        </AgGridReact>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"User Details"}</DialogTitle>
          <DialogContent>
            <div> Name: {this.props.userData.name}</div>
           <div>First: {this.props.userData.username}</div>
           <div>Phone: {this.props.userData.phone}</div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
      </Dialog>
      </div>
    )
  }
  
  rowOnClick = (agEvent)=> {
    this.handleClickOpen();
    this.props.getUserData(agEvent.data.id);
  }

  handleClickOpen = () => {
    this.setState({
        open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
  });
  };
}

export default connect(
  state => ({
    dataList: state.dataList.allUsers,
    userData: state.dataList.oneUser,
  }),
  dispatch => ({
    getAllDatalist: () => {
      dispatch(getList());
    },
    getUserData:(id) => {
      dispatch(getUserData(id));
    },
  })
)(App);
