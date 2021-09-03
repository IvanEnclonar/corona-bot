import React from 'react';
import "./AdminLogin.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function AdminLogin() {
    return(
        <div className="AL__Body">
            <div className="AL__Header">
                Admin Login
            </div>
            <div className="AL__Form">
                <div className="AL__Field AL__Margin">
                    <TextField id="outlined-basic" label="User Name" variant="outlined" />
                </div>
                <div className="AL__Field">
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                </div>
                <div className="AL__Field">
                    <Button variant="contained" color="primary">Login</Button>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;