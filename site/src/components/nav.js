import "../App.css"
import img6 from '../components/img6.png'
import { Link } from 'react-router-dom';
function NavBar() {
    return(
    <><nav class="navbar navbar-dark navbar-expand-lg bg-primary ">
    <Link to="../home" class="navbar-brand text-wrap">
    <img src={img6} alt="" width="50" border-radius= "30px" height="40" class="logo"/>
    SIGAA - Sistema Integrado de Gestão de Atividades Acadêmicas
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse justify-content-end" >
    <ul class="navbar-nav" >
    <li class="nav-item "><Link to="../home" class=" nav-link" >Apresentação</Link></li>
    <li class="nav-item"><Link to="../Projeto" class=" nav-link" >Projeto Pedagógico</Link></li>
    <li class="nav-item"><Link to="../noticias" class="nav-link" >Notícias</Link></li>
    <li class="nav-item"><Link to="../fetch" class="nav-link" >Fetch API</Link></li>
    <li class="nav-item"><Link  to="../Contatos" class="nav-link" >Contatos</Link></li>
    </ul>
  </div></nav></>);
};

export default NavBar;