$('header button').click(function(){
    $('form').slideDown();
})
$('#botão-cancelar').click(function(){
    $('form').slideUp();
})

$('form').on('submit', function(e){
    e.preventDefault();
    const adicionarlocaldaimagem = $('#nova-imagem').val();
    const novoitem = $(`<li style="display: none"></li>`);
    $(`<img src="${adicionarlocaldaimagem}"/>`).appendTo(novoitem);
    $(`
        <div class="overlay-image-link">
            <a href="${adicionarlocaldaimagem}"  target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoitem);
        $(novoitem).appendTo(`ul`);
        $(novoitem).fadeIn(1000);
        $(`#nova-imagem`).val('')
})
