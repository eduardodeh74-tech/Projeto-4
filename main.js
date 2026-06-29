$(function () {

    $('#telefone').mask('(00) 00000-0000');

    $('#form-contato').validate({

        rules: {

            nome: {
                required: true,
                minlength: 3
            },

            email: {
                required: true,
                email: true
            },

            telefone: {
                required: false
            },

            mensagem: {
                required: true,
                minlength: 10
            }

        },

        messages: {

            nome: {
                required: "Informe seu nome.",
                minlength: "Digite pelo menos 3 caracteres."
            },

            email: {
                required: "Informe seu e-mail.",
                email: "Digite um e-mail válido."
            },

            mensagem: {
                required: "Digite uma mensagem.",
                minlength: "A mensagem deve ter pelo menos 10 caracteres."
            }

        },

        submitHandler: function(form){

            alert("Mensagem enviada com sucesso!");

            form.reset();

        }

    });

});