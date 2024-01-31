import * as Styled from "./integracao2.module.css";

export default function integracao2() {
    return(
        <div id={Styled.integracao2}>
            <div className={Styled.vermelha}>Texto #01</div>
            <div className={Styled.azul}>Texto #02</div>
            <div className={Styled.branca}>Texto #03</div>
        </div>
    );
}