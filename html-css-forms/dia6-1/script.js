window.onload = function () {
    function estadosBrasileiros() {
        let estados = document.getElementById('estado')
        let arrayOfStates = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

        for (let index = 0; index < arrayOfStates.length; index += 1) {
            let createOptions = document.createElement('option');
            estados.appendChild(createOptions).innerText = arrayOfStates[index];
            estados.appendChild(createOptions).value = arrayOfStates[index];
        }
    }
    estadosBrasileiros();

    let inputs = {
        name: {
            maxlength: 40,
            required: true,
        },
        email: {
            maxlength: 50,
            required: true,
        },
        cpf: {
            maxlength: 11,
            required: true,
        },

        endereco: {
            maxlength: 200,
            required: true,
        },
        cidade: {
            maxlength: 28,
            required: true,
        },
        resumo: {
            maxlength: 1000,
            required: true,
        },
        cargo: {
            maxlength: 40,
            required: true,
        },
        descricao: {
            maxlength: 500,
            required: true,
        },
        data: {
            type: 'date',
            required: true,
        },
        tipoMoradia: {
            type: 'radio',
            required: true,
        },
        estado: {
            type: 'select',
            required: true,
        },




    }

    // function validationInputs(inputHtml, inputName){
    //     if(inputHtml.value.length > inputs[inputName].minlength){
    //         console.log('Error')
    //     }
    // }
    function getSelectedOption(select) {
        return select.options[select.selectedIndex];
    }
    function dateValidation(input) {

        let regex = /^\d\d\/\d\d\/\d\d\d\d$/;

        if (!regex.test(input.value)) {
            return 'Formato inválido'

        }

        let splitted = input.value.split('/');
        let day = splitted[0];
        let month = splitted[1];
        let year = splitted[2];

        if (day < 0 || day > 30) {
            return 'Dia inválido'

        }

        if (month < 0 || month > 12) {
            return 'Mês inválido'

        }

        if (year < 0) {
            return 'Ano inválido'

        }

        return true;
    }


    function renderErrorMessages(messages){
        let form = document.querySelector('#cv-form');
        let messageDiv = document.createElement('div');
        messageDiv.className = 'error';
        form.prepend(messageDiv);
      
        for(let message of messages){
          let p = document.createElement('p');
          p.innerText = message;
      
          messageDiv.appendChild(p);
        }
    }
    function formValidation() {
        let errorValidation = []
        
        for (let input in inputs) {
            let inputForm = document.querySelector('[name=' + input + ']')

            if (!inputs[input].type && inputForm.value.length > inputs[input].maxlength) {
                errorValidation.push('campo inválido ' + input + ': O tamanho máximo permitido é ' + inputs[input].maxlength)
            }

            if (!inputs[input].type && inputs[input].required && inputForm.value.length === 0) {
                errorValidation.push(input + ' é obrigatório!');
            }

            if (inputs[input].type && inputs[input].type === 'date') {
                if (dateValidation(inputForm) !== true) {
                    errorValidation.push(input + ': ' + dateValidation(inputForm))
                }
            }
            if (inputs[input].type && inputs[input].type === 'select') {
                let option = getSelectedOption(inputForm);
                if (inputs[input].required && (!option || option.disabled)) {
                    errorValidation.push(input + ': opção selecionada inválida!')
                }
            }
            if (inputs[input].type && inputs[input].type === 'radio') {
                let checked = document.querySelector(`[name=${input}]:checked`)
                console.log(ch)
                if (checked === null) {
                    errorValidation.push(input + ': selecione pelo menos uma opção!')
                }

            }


            // validationInputs(inputForm, input)
        }

        return errorValidation
        // console.log(nameForm)
    }







    function defaultRendering(input){
        let p = document.createElement('p');
        p.innerText = input.value;
      
        return p;
      }
      
      function radioRendering(input){
        let p = document.createElement('p');
        let name = input.getAttribute('name');
        let checked = document.querySelector(`[name=${name}]:checked`);
      
        if(checked){
          p.innerText = checked.value;
        }
      
        return p;
      }
      
      function selectRendering(input){
        let p = document.createElement('p');
        let option = getSelectedOption(input)
        p.innerText = option.value;
        
        return p;
      }
      
      let renderStrategies = {
        default: defaultRendering,
        radio: radioRendering,
        select: selectRendering,
      }
    function renderData(){
        let dataDiv = document.createElement('div');
        dataDiv.className = 'data';
      
        let form = document.querySelector('#cv-form');
        form.prepend(dataDiv);
      
        for(let name in inputs){
          let inputType = inputs[name].type;
          let input = document.querySelector(`[name=${name}]`);
      
          let element;
      
          if(renderStrategies[inputType]){
            element = renderStrategies[inputType](input, dataDiv)
          } else {
            element = renderStrategies.default(input, dataDiv)
          }
      
          dataDiv.appendChild(element);
        }
      }


    function formSubmitted(event) {
        event.preventDefault();
        const errorValidation = formValidation()
        if (errorValidation.length>0 ){
            return renderErrorMessages(errorValidation)
        }
        return renderData();
    
        

    }


    let submitButton = document.querySelector('.buttonSubmit')
    submitButton.addEventListener('click', formSubmitted)


}



