import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <nav class="bg-neutral-900 sticky">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center space-x-3">
                    <img src="src/assets/ChenLogo.svg" class="h-8" alt="Chen Ordnance Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Chen Ordnance</span>
                </a>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-row space-x-8">
                    <li>
                    <a href="/" class="dark:text-red-400">Главное</a>
                    </li>
                    <li>
                    <a href="/about" class="text-white hover:text-cyan-500">О нас</a>
                    </li>
                    <li>
                    <a href="/blog" class="text-white hover:text-cyan-500">Блог</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        )
    }
}

export default Header