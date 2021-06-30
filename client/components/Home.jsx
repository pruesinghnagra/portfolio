import React, {useState} from 'react'

function Home () {
    const [welcome, setWelcome] = useState('Hey Grrrl.')

    function handleMean () {
        setWelcome('Hey Bitch.')
    }

    function handleNice () {
        setWelcome('Hey Sugar.')
    }

    return (  
        <section className="w-full bg-green-200">
            <h1 className='text-puce text-massive font-main' onMouseOver={handleMean} onMouseLeave={handleNice}>{welcome}</h1>
        </section>
    )
}

export default Home
