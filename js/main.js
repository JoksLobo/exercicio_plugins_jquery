$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: ('(11) 12345-6789')
    })

    $("#cpf").mask('000-000-000-00', {
        placeholder: ('123-456-789-12')
    })

    $('#cep').mask('00000-000', {
        placeholder: ('12345-6789')
    })

    $('form').validate({
        rules:{
            nome: {
                required:true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required:true
            },
            cpf: {
                required: true
            },
            endereço: {
                required: true
            },
            cep: {
                required: true
            }
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            
            }
        }
    })
})