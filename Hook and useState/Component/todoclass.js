import React from 'react';


class todo extends React.Component {
    state = {
        todo: '',
        warning: null,
    }

    handleInput = (e) => {
        const inputvalue = e.target.value;
        // The includes() method returns true if a string contains a specified string.
        //Otherwise it returns false.
        //The includes() method is case sensitive.
        const warning = inputvalue.includes('.js') ? 'You need javascript skill to complete the task. Do you have it?' : null;

        this.setState({
            todo: inputvalue,
            warning,
        });
    };
    render() {
        const { todo, warning } = this.state;

        return (
            <div>
                <p>{todo}</p>
                <p>
                    {/* handleinput go through the value of the todo value and its modified it */}
                    <textarea name='todo' value={todo} onChange={this.handleInput} />
                </p>
                <hr />
                <h2>{warning || "Good Choice!"}</h2>
            </div>
        );
    }
}

export default todo;