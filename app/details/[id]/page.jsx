export default async function DetailsPage ({params}){
    const obj= await params;
    return(
        <div>
            <h1>Title: {params.title}</h1>
            <p>Text: {params.body}</p>
        </div>
    )
}