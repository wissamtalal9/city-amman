
import React, { Component } from 'react'

export class SearchForm extends Component {


    render() {
        return (
            <div class="divForms">
                <form onSubmit={this.props.handleSubmit}>
                    <input  type="text" 
                            placeholder="Please enter a city name..."
                            onChange={this.props.handleLocation}
                            />
                    <input type="submit" value="Explorer"/>
                </form>
            </div>
        )
    }
}

export default SearchForm