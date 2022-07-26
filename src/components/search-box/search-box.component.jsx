import { Component } from 'react'
import "./search-box.styles.css"

class SerachBox extends Component {
    render() {
        return(
            <input 
                className={`search-box ${this.props.className}`}
                type='search'
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />
         )
    }
}

export default SerachBox