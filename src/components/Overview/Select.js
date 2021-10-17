import React from 'react'
import Select from 'react-select';

const Filter = () => {
    const options = [
        { value: 'Game', label: 'Game' },
        { value: 'Player', label: 'Player' },
        { value: 'Team', label: 'Team' }
      ]
    return (
        <div className="select-wrapper">
                <h3>Overall Overview</h3>
                <div className="select-values">
                  <Select options={options} defaultValue={{ label: options[0].label,value:options[0].value}}/>
            </div>
        </div>
    )
}

export default Filter
