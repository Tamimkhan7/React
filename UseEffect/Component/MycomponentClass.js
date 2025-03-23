import React from 'react';

class mycomponent extends React.Component {

    state = {
        count: 0,
        date: new Date(),
    }

    // now using function
    //this funciton work one time
    componentDidMount() {
        const { count } = this.state;
        document.title = `Clicked ${count} times`;
        setInterval(this.tick, 1000); //for first time calling run timer
    }
    //then this function work for updating the value
    componentDidUpdate() {
        const { count } = this.state;
        document.title = `Clicked ${count} times`;
    }

    addclick = () => {
        // setstate find previous state value and then we will be update the value 
        // previous value theke count ar value ta destructure kore rekhe dilam
        this.setState(({ count }) => ({
            count: count + 1,
        }));
    };


    // now use tick fuction which updating the current value of the date 

    tick = () => {
        this.setState({
            date: new Date(),
        });
    };

    render() {

        const { date } = this.state;

        return (
            <div>
                {/*  toLocaleDateString Get a date as a string, using locale conventions: */}
                <p>  Time: {date.toLocaleDateString()}</p>
                <p>
                    <button type='button' onClick={this.addclick}>Click</button>
                </p>
            </div>
        );
    }
}

export default mycomponent;