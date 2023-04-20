import React, { useEffect, useState } from 'react'

function Weather ({ location }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=35e032361968a668ca687692aecfed21`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (err) {
                setError(err);
                console.log(err.message)
            }
        }
        fetchData();
    },[location])

    if(data===null) {
        return <p>Loading</p>
    }

    if (error) {
        return (
            <>
                <h1>Invalid city, check possible typos. Refresh and search again.</h1>
            </>
        )
    }
    
    return (
        <main className="flex-grow flex flex-col justify-between">
            <section className="flex flex-col items-center">
                <h2 className="text-2xl font-medium text-zinc-700">{data.name}</h2>
                <h1 className={`text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${data.main.temp > 15 ? 'from-amber-400 to-orange-600' : 'from-sky-700 to-blue-900'}`}>{data.main.temp.toFixed()}°C</h1>
                <h3 className="text-xl font-medium">{data.weather[0].main}</h3>
            </section>
            <section>
                <ul className="px-5 py-7 bg-zinc-50 divide-y-[0.5px] divide-zinc-400 rounded-t-lg">
                    <li className="flex justify-between text-lg font-medium py-3 text-zinc-500">
                        <h4>Humidity</h4>
                        <p>{data.main.humidity}%</p>
                    </li>
                    <li className="flex justify-between text-lg font-medium py-3 text-zinc-500">
                        <h4>Real feel</h4>
                        <p>{data.main.feels_like.toFixed()}°C</p>
                    </li>
                    <li className="flex justify-between text-lg font-medium py-3 text-zinc-500">
                        <h4>Wind speed</h4>
                        <p>{data.wind.speed}m/s</p>
                    </li>
                    <li className="flex justify-between text-lg font-medium py-3 text-zinc-500">
                        <h4>Pressure</h4>
                        <p>{data.main.pressure}hPa</p>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Weather;