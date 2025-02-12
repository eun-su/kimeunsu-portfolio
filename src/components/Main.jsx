import React from 'react'

const Main = ({ children }) => {
    return (
        <main className='main' id="main" role="main">
            { children }
        </main>
    )
}

export default Main