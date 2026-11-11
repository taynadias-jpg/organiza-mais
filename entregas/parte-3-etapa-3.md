# Parte 3 — Etapa 3: Front-end integrado

Arquivos desta parte:
- `frontend/index.html`: estrutura da página e formulário.
- `frontend/css/style.css`: aparência responsiva.
- `frontend/js/app.js`: comunicação com a API usando Fetch.

## O que funciona
1. A página consulta as tarefas com `fetch()` usando GET.
2. O formulário envia os dados com POST.
3. O envio usa `Content-Type: application/json` e `JSON.stringify()`.
4. A lista é atualizada depois do cadastro, sem recarregar a página.
5. Há validação dos campos, mensagens de erro e busca por tarefa ou matéria.

## Como executar o projeto completo
1. Abra o terminal na pasta principal do projeto.
2. Instale as dependências: `pip install -r requirements.txt`.
3. Inicie o servidor: `python app.py`.
4. Deixe o terminal do Flask aberto.
5. Abra outro terminal na pasta principal e execute: `python -m http.server 5500`.
6. Abra no navegador: `http://127.0.0.1:5500/frontend/`.

Também é possível abrir `frontend/index.html` com a extensão Live Server do VS Code. O Flask precisa continuar em execução na porta 5000.

## Teste esperado
- Ao abrir a página, a lista mostra as tarefas que já estão no banco.
- Ao preencher e salvar o formulário, a tarefa é gravada no SQLite.
- A nova tarefa aparece na lista sem atualizar a página manualmente.
- Se o Flask estiver desligado, a página mostra uma mensagem de conexão.

## Limite
A interface permite cadastrar e consultar tarefas, conforme as rotas implementadas na Etapa 2. Edição e exclusão não fazem parte das rotas desta entrega.
