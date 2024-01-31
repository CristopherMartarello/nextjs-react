export default function Titulo(props) {

    if (props.pequeno) {
        return (
            <>
                <p>{props.main}</p>
                <p>{props.secondary}</p>
            </>
        )
    }

    return (
        <>
            <h1>{props.main}</h1>
            <h2>{props.secondary}</h2>
        </>
    )
}