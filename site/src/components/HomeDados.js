import img7 from '../components/img7.png'
import "../App.css"
function HomeDados(){
    return(
        <>
        <header class="text-center">
        <h2 class="">CURSO DE ANÁLISE E DESENVOLVIMENTO DE SISTEMAS / EAJ</h2>
        <h2 class="bg-info">APRESENTAÇÃO</h2>
    </header>
    <section>
            <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                    <figure class="figure align-items-center">
                        <img src={img7} width = "400" height = "200" class="figure-img img-fluid rounded" alt="..." />
                      </figure>
                </div>
                <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                  <p className='just'>O Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) tem como objetivo a formação de profissionais capazes de compreender o processo de construção e reconstrução do conhecimento no domínio da análise e desenvolvimento de sistemas e, dessa forma, realizar atividades de concepção, especificação, projeto, implementação, avaliação, suporte e manutenção de sistemas computacionais, orientando sua ação na sociedade em geral e no mundo do trabalho em particular para a busca de soluções para o setor produtivo (notadamente o setor primário da economia) e para a melhoria da qualidade de vida das populações. Os profissionais formados atuarão na área de análise e desenvolvimento de sistemas, podendo exercer atividades no campo da análise de sistemas, engenharia de software, gerência de projetos e administração de bancos de dados.
                    Além da formação geral em Tecnologia em Análise e Desenvolvimento de Sistemas, o curso tem objetivo de promover a integração entre as ciências agrárias e a denominada Tecnologia da Informação (TI) com suas diversas subáreas, obtendo-se assim uma gama de benefícios e ampliação do espectro de formação profissional em nível superior, considerando que um curso desta natureza permitirá ao egresso propor soluções tecnológicas em software e/ou hardware para as ciências agrárias ou, usando uma nomenclatura mais específica e mercadológica, para a cadeia do agronegócio e da agricultura familiar, sendo, nesse sentido estratégico para o desenvolvimento regional e nacional. Tais objetivos baseiam-se na formação de Tecnólogos com capacidade técnico-científica e visão integral, ética e humanística, comprometidos com o bem estar da sociedade envolvida e com o desenvolvimento sustentável, exercendo todas as competências relacionadas à profissão.</p>
              </div>
            </div>
            </div>
          </section></>
    );
};
export default HomeDados;