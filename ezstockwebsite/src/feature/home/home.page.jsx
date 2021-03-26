import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">    
                Welcome to the SandBox Page!    

                <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">

                    <input type="hidden" name="cmd" value="_xclick" />
                    <input type="hidden" name="business" value="sb-9jd7n3606747@business.example.com" />

                    <input type="hidden" name="item_name" value="Heineken Beer 1" />
                    <input type="hidden" name="amount" value="10.00" /> 
                    <input type="submit" value="Paypal" />

                </form>
            </div>            
        );
    }
}

export default HomePage;