import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">    
                Welcome to the Home Page!    
            </div>
        );
    }
}

export default HomePage;