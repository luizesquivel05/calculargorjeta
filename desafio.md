Projeto: Calculadora de Gorjeta

Descrição: Vamos criar uma calculadora de gorjeta, onde os usuários podem inserir o valor total da conta e selecionar a porcentagem de gorjeta desejada. O site irá calcular automaticamente a quantia da gorjeta e exibir o valor total da conta, incluindo a gorjeta.

Tecnologias utilizadas: HTML, CSS e JavaScript.

Passos para a implementação da MVP:

1. Estrutura HTML:
   - Crie um arquivo HTML chamado "index.html".
   - Dentro do `<body>`, adicione um cabeçalho `<h1>` com o título "Calculadora de Gorjeta".
   - Crie um formulário `<form>` com os seguintes elementos:
     - `<label>` com o texto "Valor Total da Conta: ".
     - `<input>` do tipo "number" com um `id` como "valor-total".
     - `<label>` com o texto "Porcentagem de Gorjeta: ".
     - `<input>` do tipo "number" com um `id` como "porcentagem-gorjeta".
     - `<button>` com o texto "Calcular" e um `id` como "calcular-gorjeta".
   - Adicione uma `<div>` com um `id` como "resultado" para exibir o valor total da conta com a gorjeta.

2. Estilização CSS:
   - Crie um arquivo CSS chamado "style.css".
   - Estilize o cabeçalho `<h1>` para dar destaque ao título.
   - Defina um estilo para o formulário, alinhando os elementos verticalmente.
   - Aplique estilos aos `<label>`, `<input>` e `<button>` para torná-los mais atraentes.
   - Estilize a `<div>` de resultado para destacar o valor total da conta.

3. Lógica JavaScript:
   - Crie um arquivo JavaScript chamado "script.js" e vincule-o ao arquivo HTML.
   - No arquivo JavaScript, crie uma função chamada "calcularGorjeta" que será chamada quando o botão "Calcular" for clicado.
   - Dentro da função, recupere os valores dos campos de entrada usando os `id` correspondentes.
   - Calcule a quantia da gorjeta multiplicando o valor total da conta pela porcentagem de gorjeta e dividindo por 100.
   - Calcule o valor total da conta com a gorjeta adicionando a quantia da gorjeta ao valor total da conta.
   - Atualize o conteúdo da `<div>` de resultado com o valor total da conta formatado.
   - Adicione a função "calcularGorjeta" como manipulador de evento para o botão "Calcular" usando o método `addEventListener`.

4. Testando a MVP:
   - Abra o arquivo HTML no navegador.
   - Insira um valor válido no campo "Valor Total da Conta" e outro valor válido no campo "Porcentagem de Gorjeta".
   - Clique no botão "Calcular" e verifique se o valor total da conta com a gorjeta é exibido corretamente na `<div>` de resultado.

--------------------------------- ENGLISH VERSION -----------------------------------------------------
Project: Tip Calculator

Description: Let's create a tip calculator where users can input the total bill amount and select the desired tip percentage. The website will automatically calculate the tip amount and display the total bill amount including the tip.

Technologies used: HTML, CSS, and JavaScript.

Steps for MVP implementation:

1. HTML Structure:
   - Create an HTML file called "index.html".
   - Inside the `<body>`, add an `<h1>` heading with the title "Tip Calculator".
   - Create a `<form>` with the following elements:
     - `<label>` with the text "Total Bill Amount: ".
     - `<input>` of type "number" with an `id` attribute like "total-amount".
     - `<label>` with the text "Tip Percentage: ".
     - `<input>` of type "number" with an `id` attribute like "tip-percentage".
     - `<button>` with the text "Calculate" and an `id` attribute like "calculate-tip".
   - Add a `<div>` with an `id` attribute like "result" to display the total bill amount with the tip.

2. CSS Styling:
   - Create a CSS file called "style.css".
   - Style the `<h1>` heading to make it visually appealing.
   - Define a style for the form, aligning the elements vertically.
   - Apply styles to the `<label>`, `<input>`, and `<button>` elements to make them visually attractive.
   - Style the result `<div>` to highlight the total bill amount.

3. JavaScript Logic:
   - Create a JavaScript file called "script.js" and link it to the HTML file.
   - In the JavaScript file, create a function called "calculateTip" that will be called when the "Calculate" button is clicked.
   - Inside the function, retrieve the values from the input fields using their corresponding `id` attributes.
   - Calculate the tip amount by multiplying the total bill amount by the tip percentage and dividing by 100.
   - Calculate the total bill amount with the tip by adding the tip amount to the total bill amount.
   - Update the content of the result `<div>` with the formatted total bill amount.
   - Add the "calculateTip" function as an event handler for the "Calculate" button using the `addEventListener` method.

4. Testing the MVP:
   - Open the HTML file in a browser.
   - Enter a valid value in the "Total Bill Amount" field and another valid value in the "Tip Percentage" field.
   - Click the "Calculate" button and verify if the total bill amount with the tip is correctly displayed in the result `<div>`.