# Stage Music

Build atual: **v0.4.0**  
Data: **22/04/2026 12:17**

## Fase atual
**Fase 4 — Pré-login funcional + liberação do editor**

## O que esta build entrega
- pré-página da Inserir Cifra funcional
- escolha real entre modo online e modo local
- sessão persistente em armazenamento local do navegador
- fluxo pronto para Firebase Auth com `js/firebase-config.js`
- botão Google preparado para Firebase e fallback demo quando as chaves ainda não foram preenchidas
- editor inicial protegido por sessão em `inserir-cifra.html`
- projeto mantido pronto para GitHub + Vercel

## Como testar
1. Abra `login-cifra.html`.
2. Escolha **Online** e use qualquer e-mail com senha mínima de 6 caracteres, ou clique em **Continuar offline**.
3. O app libera o editor `inserir-cifra.html`.
4. Para autenticação real, preencha `js/firebase-config.js` com as credenciais do seu projeto Firebase.

## Publicação
1. Extraia o ZIP.
2. Suba a pasta no GitHub.
3. Conecte o repositório à Vercel.
4. Faça deploy.

## Próxima fase
**Fase 5 — Salvamento local de cifras e rascunhos**


## Estado atual
- Fase atual: **Fase 5**
- Build: **v0.5.0 | 22/04/2026 19:36**
- O editor já salva cifras localmente e mantém rascunhos automáticos no navegador.
- A página Buscar Cifra já pesquisa a biblioteca offline do dispositivo.

## Fluxo local disponível
1. Entre em **Inserir Cifra** pelo modo local ou online.
2. Digite título, artista, tom, BPM, tags, notas e conteúdo.
3. O rascunho será salvo automaticamente no navegador.
4. Clique em **Salvar cifra local** para mandar a música para a biblioteca offline.
5. Use **Buscar Cifra** para localizar as cifras salvas localmente.
