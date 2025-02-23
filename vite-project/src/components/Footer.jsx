import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
            <a href='/about'>About </a>
            <a href='/blog'>Blog </a>
            </>
        )
    }
}

export default Footer