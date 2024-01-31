export default function lista2 () {
    const el = gerarLista();
    return(
        <div>
            {el}
        </div>
    );
}

export function gerarLista(final = 10) {
    const elementos = [];
    for(let i = 1; i <= final; i++) {
        elementos.push(<span>{i}</span>);
    }

    return elementos;
}