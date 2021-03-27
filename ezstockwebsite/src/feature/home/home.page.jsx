import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">    
                <p className="headline">Welcome to the SandBox Checkout page!</p>
                
                <table width="100%">
                    <tr>
                        <td width="50"><img width="96" height="64" src="https://i.imgur.com/KdVvcnU.jpg" /></td>
                        <td width="300">Heineken Beer</td>
                        <td width="50">$3.00</td>                        
                    </tr>
                    <tr>
                        <td><img width="96" height="64" src="https://media-verticommnetwork1.netdna-ssl.com/wines/tiger-440925_e.jpg" /></td>
                        <td>Tiger Beer</td>
                        <td>$2.00</td>                        
                    </tr>
                </table>
                <p/>
                <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">

                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="business" value="sb-9jd7n3606747@business.example.com" />
                    <input type="hidden" name="upload" value="1"/>

                    <input type="hidden" name="item_name_1" value="Heineken Beer" />
                    <input type="hidden" name="amount_1" value="3.00" />
                    <input type="hidden" name="item_name_2" value="Tiger Beer" />
                    <input type="hidden" name="amount_2" value="2.00" />
                    <input className="punch" type="submit" value="Checkout" />
                </form>
            </div>            
        );
    }
}

export default HomePage;