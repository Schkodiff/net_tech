import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <footer class="bg-neutral-900 fixed bottom-0 w-full">
                <div class="w-full max-w-screen-xl mx-auto py-8">
                    <div class="flex items-center justify-between">
                        <a href="/" class="flex items-center space-x-3">
                            <img src="src/assets/ChenLogo.svg" class="h-8" alt="Chen Ordnance Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Chen Ordnance</span>
                        </a>
                        <ul class="flex flex-wrap items-center text-sm text-neutral-400">
                            <li>
                                <a href="/about" class="hover:underline me-6">О нас</a>
                            </li>
                            <li>
                                <a href="/blog" class="hover:underline me-6">Блог</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline me-6">Политика конфиденциальности</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 mx-auto border-neutral-700" />
                    <span class="block text-sm text-center text-neutral-400">© 2025 <a href="/" class="hover:underline">Chen Ordnance</a>. All Rights Reserved.</span>
                </div>
            </footer>
        )
    }
}

export default Footer