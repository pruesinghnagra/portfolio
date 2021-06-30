import React, {useState, useEffect} from 'react'

function Home () {
    const [welcome, setWelcome] = useState('Hey Grrrl.')

    function handleMean () {
        setWelcome('Hey Bitch.')
    }

    function handleNice () {
        setWelcome('Hey Sugar.')
    }

    useEffect(() => {
    const interval = setInterval(() => {
        setWelcome('Portfolio.')
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (  
        <section className="bg-green-200 p-8 border-black m-8 border-8">
            <h1 className='text-puce text-massive font-main' onMouseOver={handleMean} onMouseLeave={handleNice}>{welcome}</h1>
        </section>
    )
}

export default Home
