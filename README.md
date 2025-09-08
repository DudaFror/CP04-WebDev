# Gerenciador de Jogadoras de Futebol Feminino

Este é um projeto de **Web Development** desenvolvido em **HTML, CSS e JavaScript**, com o objetivo de gerenciar informações de jogadoras de futebol feminino.  

O sistema utiliza o **LocalStorage** do navegador para armazenar e manipular os dados, garantindo persistência entre sessões sem necessidade de banco de dados externo.

---

## 🚀 Funcionalidades

- **Inicialização**
  - Carrega um conjunto inicial de jogadoras no `LocalStorage` na primeira execução.

- **Listagem (Read)**
  - Exibe todas as jogadoras no formato de **cards**, com:
    - Foto
    - Nome
    - Posição
    - Clube
    - Estatísticas (gols, assistências, jogos)
  - Recurso de **favoritar jogadoras**, com um ícone (⭐/❤️) que marca como favorita e salva no `LocalStorage`.

- **Cadastro (Create)**
  - Formulário com campos: **nome, posição, clube, estatísticas e foto (URL)**.
  - Validação para não aceitar campos vazios.
  - Exibe alerta de feedback: *“Jogadora adicionada com sucesso!”*.

- **Edição (Update)**
  - Permite **modificar os dados de uma jogadora existente** (incluindo a foto).
  - Exibe alerta de feedback: *“Jogadora editada com sucesso!”*.

- **Remoção (Delete)**
  - Permite **excluir** uma jogadora da lista.
  - Exibe alerta de feedback: *“Jogadora removida com sucesso!”*.

---

## 🖼 Exemplo de Card

Cada jogadora é exibida em um card com layout semelhante a este:

![Exemplo de Card](attachment:3208524d-dc19-467b-b617-48fb27347b04:image.jpeg)

---

## 🛠 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **LocalStorage (persistência de dados no navegador)**
- **Live Server (para rodar localmente no VS Code)**

---

## 📂 Estrutura de Arquivos
  projeto-jogadoras/
  │── index.html # Página principal
  │── style.css # Estilos da aplicação
  │── script.js # Lógica em JavaScript
  │── imagens/ # (opcional) pasta para armazenar fotos locais


## Integrantes
- Eduarda de Castro RM 562184
- Vinicius Mafra RM 565916
- Matheus RM 561539 
