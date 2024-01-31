export default function SomaUm(props) {
    //props.numero++; não posso fazer isso porque props são somente leitura!
    reuturn(
        <div>
            <h1>{props.numero}</h1>
        </div>
    );
}