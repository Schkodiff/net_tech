import React, { PureComponent, ReactNode } from 'react'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { Input } from '../components/Input'

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
                <Button color = "primary" size = "large" title="Boat" onClick={()=>alert("goes binted")}/>
                <Text size = "text-base" color = "primary" align = "text-right" title = "Boat goes binted"/>
                <Input size="large" borderColor="primary" placeholder="Hello"/>
            </div>
            </>
        )
    }
}

export default Home
