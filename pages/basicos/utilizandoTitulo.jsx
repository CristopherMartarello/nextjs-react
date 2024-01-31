import Titulo from '../../components/Titulo';

export default function utilizandoTitulo() {
    return (
        <div>
            <Titulo main="Página de Cadastro" secondary="Incluir, alterar e excluir coisas!" />
            <Titulo main="Página de Login" secondary="Informe o seu email e senha!" pequeno={true}/>
        </div>
    );
}