import { useEffect, useState } from "react"
import NewsCard from "./NewsCard"
import CatNav from "./CatNav"

export default function Main(){
    //723d4a99948b4e1ca6db8f68dc8fd46b
    const [news, setNews] = useState([])
    const [filter, setFilter] = useState("All")
    const [resultat, setResultat] = useState([])
    const navCat = [...new Set(news.map((e) => e.source.name))]


    const getNews = async() =>{
        const response = await fetch('https://newsapi.org/v2/everything?q=last-of-us&pageSize=20&apiKey=DIN-NØKKEL')
        const data = await response.json()
        setNews(data.articles)
        setResultat(news?.filter(items => items?.source?.name === filter))
    }

    console.log(resultat)

    useEffect(() =>{
        getNews()
    },[filter])

    const handleFilter = (event)=>{
        console.log(event.target.innerHTML)
        setFilter(event.target.innerHTML)
    }

    const handleReset =() =>{
        setFilter("All")
    }

    return (
        <>
            <h2>Her kommer nyheter</h2>
            <CatNav navCat={navCat} handleFilter={handleFilter} handleReset={handleReset}/>
            {resultat.length <= 0 ? news?.map((item, index) =>(
                <NewsCard key={index} img={item.urlToImage} title={item.title} ingress={item.description} />
            )) : resultat?.map((item, index) =>(
                <NewsCard key={index} img={item.urlToImage} title={item.title} ingress={item.description} />
            )) }
        </>
    )
}