export default function NewsCard({img, title, ingress}){
    return(
        <article >
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{ingress}</p>
        </article>
    )
}