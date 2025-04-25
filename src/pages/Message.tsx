import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Message extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <p>Message</p>
        )
    }
}

export default Message