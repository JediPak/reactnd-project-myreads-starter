import React, { Component } from 'react'

class Options extends Component {
    state = {
        options: [
            {
                display: 'Currently Readin',
                value: 'currentlyReading'
            },
            {
                display: 'Want to Read',
                value: 'wantToRead'
            },
            {
                display: 'Read',
                value: 'read'
            },
            {
                display: 'None',
                value: 'none'
            },
        ]
    }

    optionSelected = (e) => {
        console.log(e.target.value);
        console.log(e.target.value + ' was selected');
    }

    render() {
        const { options } = this.state;
        console.log(options);
        return (
            <div className="book-shelf-changer">
                <select onChange={(e) => this.optionSelected(e)}>
                    <option key='move' value='move' disabled>Move to..</option>
                    {options.map((option) =>
                        <option
                            key={option.value}
                            value={option.value}>
                            {option.display}
                        </option>
                    )}
                </select>
            </div>
        )
    }
}

export default Options