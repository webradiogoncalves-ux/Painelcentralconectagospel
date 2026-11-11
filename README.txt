# Painel Central Conecta Gospel — primeira estrutura

Esta pasta contém a primeira interface responsiva do painel, preparada para publicação como site estático no Render.

## O que já funciona nesta prévia
- Navegação entre as áreas do painel.
- Visual adaptável para computador e celular.
- Cadastro visual das duas rádios.
- Seleção de rádio e lista de músicas de demonstração separada por rádio no navegador.
- Formulário visual para cadastrar endereços de site e transmissão.

## Importante
Esta é somente a primeira camada visual. Ela ainda NÃO autentica usuários, NÃO salva configurações em servidor, NÃO envia áudio e NÃO controla transmissões reais. A lista de músicas é temporária e existe apenas no navegador aberto.

## Publicação sem CMD
1. Extraia o ZIP no computador.
2. No GitHub pelo navegador, crie um repositório novo.
3. Envie os arquivos e pastas desta pasta para a raiz do repositório (o `index.html` deve ficar na raiz).
4. No Render, crie um **Static Site** conectado a esse repositório.
5. Use `public` como Publish Directory se enviar o conteúdo da pasta `public` para a raiz do repositório; ou deixe `.` se mantiver `public` como subpasta e configure conforme a estrutura escolhida.

Para a próxima etapa, precisamos confirmar os endereços atuais dos dois sites e dos dois streams, além de verificar como cada servidor recebe o áudio. Não coloque senhas de transmissão em arquivos públicos do site.
