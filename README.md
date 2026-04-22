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
