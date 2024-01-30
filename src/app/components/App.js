'use client'

import Header from "./Header"
import Sidebar from "./Sidebar"

export default function App({ children }) {
    return (
        <div>
            <div className='mr-32'>
                <Header />
                <main className='p-4'>{children}</main>
            </div>
            <Sidebar />
        </div>
    )
}
