import React from 'react';
import mycomponent from './Component/MycomponentClass';

export default class App extends React.Component {
    render() {
        return (
            <div className='app'>
                {/* <div>We shall learn useEffect() today</div> */}
                {/* calling mycomponetclass file for the running */}
                <mycomponent />
            </div >
        );
    }
}