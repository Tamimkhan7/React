import React from 'react';
// import todo from './components/todoclass';
import todo from './Component/todo';
import todo from './Component/counter';



export default class App extends React.Component {
    render() {
        return (
            <div className='app'>
                {/* <todo /> */}
                <counter />
            </div>
        );
    }
}