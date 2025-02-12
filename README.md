# Pregue Online

Um assistente web para criação de sermões expositivos, estudos teológicos guiados por "Orientação Pedagógica" da Taxonomia de Bloom e por fim Aplicando Diretrizes Educacionais, Baseadas nos Fundamentos Nazareno 4C's, sendo:

"Os 4C’s Nazarenos são princípios educacionais que guiam a formação integral do indivíduo, alinhando-se aos valores cristãos. Cada um deles tem um papel fundamental no processo de ensino e discipulado:

Contexto: A educação deve considerar o ambiente cultural, social e espiritual dos alunos, garantindo que o aprendizado seja relevante e aplicável à sua realidade.

Caráter: O ensino deve promover a formação ética e moral, desenvolvendo virtudes cristãs e incentivando uma vida de santidade.

Conteúdo: A base do ensino deve ser sólida, com fundamentos bíblicos e acadêmicos bem estruturados, promovendo conhecimento e crescimento espiritual.

Competência: A educação deve capacitar os alunos a aplicarem o conhecimento adquirido, desenvolvendo habilidades práticas e liderança servidora para impactar o mundo ao seu redor.


Essas diretrizes são essenciais para uma abordagem educacional transformadora, que prepara indivíduos não apenas para o sucesso acadêmico, mas também para uma vida de serviço e compromisso com Deus e com a sociedade.

Além disso, integra um assistente administrativo para o Manual da Igreja do Nazareno, que seu foco e dar suporte a todos que integrem a administração da igreja do Nazareno, seja a nível local, distrital ou nacional.

## Objetivo

O objetivo do Pregue Online é auxiliar pregadores, estudantes da Bíblia e pessoas que buscam crescimento espiritual na criação de sermões expositivos e temáticos, estudos teológicos e devocionais, fornecendo suporte na análise textual, organização de ideias e inspiração, e permitindo o acesso ao Manual da Igreja do Nazareno.

## Funcionalidades

*   **Seleção Bíblica:** Permite ao usuário selecionar um livro e capítulo da Bíblia através de uma lista.
*   **Ferramentas de Análise Textual:**
    *   Fornece ferramentas de análise textual com o objetivo de auxiliar o usuário na familiarização do texto com base no conceito de "Folhas de Familiarização".
    *   Utiliza perguntas guiadas para auxiliar o usuário na análise e reflexão sobre o texto.
    *   Incentiva o usuário a identificar ideias principais, palavras-chave e outros elementos cruciais do texto.
*   **Geração de Proposição:** Sugere frases e ideias para a proposição do sermão, mas a decisão final é do usuário.
*   **Esboço de Sermão/Estudo/Devocional:** Oferece um modelo para estruturar o sermão, estudo ou devocional, com áreas para introdução, texto bíblico, proposição, desenvolvimento, conclusão e oração.
*   **Assistente Administrativo:**
    *   Permite pesquisar o conteúdo do Manual da Igreja do Nazareno.
    *   Oferece respostas diretas a dúvidas sobre o Manual e links para seções e artigos relacionados.

## Tecnologias Utilizadas

*   **Frontend:**
    *   React (para a interface do usuário).
    *   HTML, CSS, JavaScript.
*   **Backend:**
    *   Node.js com Express (para a API).
    *   SQLite (para o banco de dados).

## Como rodar localmente

1.  **Clone o repositório:**
    *   Abra seu terminal e use o comando `git clone <URL do seu repositório GitHub>` para clonar o projeto.
2.  **Instale as dependências:**
    *   Navegue para a pasta raiz do projeto (`pregue-online`).
    *   Execute `npm install` para instalar as dependências do `package.json` raiz.
3.  **Inicie o Backend:**
    *   Navegue para a pasta `backend`.
    *   Execute `npm install` para instalar as dependências do backend.
    *   Execute `npm run dev` para iniciar o servidor backend.
4.  **Inicie o Frontend:**
    *   Abra outro terminal e navegue para a pasta `frontend`.
    *   Execute `npm install` para instalar as dependências do frontend.
    *   Execute `npm run dev` para iniciar o frontend.
5.  **Acesse a Aplicação:**
    *   Abra seu navegador e acesse `http://localhost:5173` (ou a porta que o frontend indicar).

## Próximos Passos

*   Implementar a interface de chat com perguntas guiadas para familiarização.
*   Adicionar uma API para buscar o texto da Bíblia.
*   Desenvolver a funcionalidade de geração da proposição e esboço.
*   Aprimorar a interação com a base de dados do Manual.
*   Adicionar mais ferramentas e funcionalidades com o tempo.

## Contribuição

Sinta-se à vontade para contribuir com o desenvolvimento deste projeto! Abra issues para reportar bugs ou sugerir melhorias e envie pull requests com suas alterações.

## Licença

Este projeto está sob a licença MIT.