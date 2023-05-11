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