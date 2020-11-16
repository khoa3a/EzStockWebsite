import React from 'react';
import { getUser, removeUserSession } from '../../non-feature/helpers/session.helper';

class StockPage extends React.Component {
    constructor(props) {
        super(props);        
    }

    // handle click event of logout button
    handleLogout = () => {
        removeUserSession();
        this.props.history.push('/login');
    }

    render() {
        const user = getUser();
        return (
            <div>
                Welcome {user} to the Stock information page!<br /><br />
                <input type="button" onClick={this.handleLogout} value="Logout" />
            </div>
        );
    }
}

export default StockPage;