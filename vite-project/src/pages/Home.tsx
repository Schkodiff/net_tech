import React, { PureComponent, ReactNode } from 'react'
import { Button } from '../components/Button'
import { Text } from '../components/Text'

interface Props {}
interface State {}

class Home extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <>
            <div>Home</div>
            <div>
                <Button color = "primary" size = "large" title="Bint it"/>
                <Button color = "secondary" size = "large" title="Glorp"/>
                <Text size = "text-base" color = "primary" align = "text-right" title = "Boat goes binted"/>
            </div>
            </>
        )
    }
}

export default Home
