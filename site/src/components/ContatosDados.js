

function ContatosDados () {
    return(<>
    <section class="text-center p-5">
        <h2 class="bg-secondary">ENTRE EM CONTATO CONOSCO!</h2>
    <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">DIGITE SEU EMAIL DE CONTATO</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nome@exemplo.com" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">DESCREVE SE QUESTIONAMENTOS ABAIXO E CLIQUE EM ENVIAR. ASSIM QUE POSSÍVEL ENTRAREMOS EM CONTATO !</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
        <button type="button " class="btn btn-warning">Enviar</button>
      </form>
    </section>
    </>);
};

export default ContatosDados;