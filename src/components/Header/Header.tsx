import React from 'react';

/**
 * This is the <Header /> component for showing navbar, side-drawer etc. 
 * # Its imported into <Layout /> HOC
 */


type PropsFromParents = {

}

type AllProps = PropsFromParents;


type State = {
    
}

export class Header extends React.Component<AllProps, State> {

    render() {
        return (
            <h1>Header</h1>
        )
    }

}

export default Header;