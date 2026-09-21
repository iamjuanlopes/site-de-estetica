# Espaço Aurora — modelo de landing pra clínica de estética

Landing de uma página feita pela **Éden** como modelo de demonstração.

> **A clínica não existe.** Nome, endereço, telefone, preços, avaliações e
> depoimentos são fictícios, criados só pra mostrar como a página de uma
> clínica real ficaria. Nenhum dado aqui é de uma pessoa ou empresa de verdade.

## Como abrir

Abra `index.html` no navegador. Não precisa de servidor, build nem instalação.

## Como adaptar pra uma clínica real

Mexa em **um arquivo só**: `data/clinica.js`. Lá estão nome, WhatsApp,
Instagram, endereço, horários, selos, serviços (com preço e duração), passos,
depoimentos e perguntas frequentes.

Fora isso:

- **Fotos** — troque os arquivos de `img/` mantendo os nomes. Cada foto tem uma
  versão menor pro celular (`-400`, `-480`, `-600`, `-800`); mantenha as duas.
- **Cores e fontes** — as variáveis no topo de `css/style.css` (`--nude`,
  `--creme`, `--escuro`, `--serif`, `--sans`).

`index.html` e `js/app.js` não precisam de ajuste.

## Estrutura

```
index.html        estrutura da página
css/style.css     cores, fontes e layout (escrito mobile-first)
js/app.js         monta as seções a partir de data/clinica.js
data/clinica.js   tudo que muda de uma clínica pra outra
img/              fotos, cada uma em duas resoluções
```

## Celular

A página é construída a partir da largura de celular. Conferida a 390px: sem
rolagem lateral, botões de largura total, alvos de toque de 44px ou mais, e o
botão flutuante do WhatsApp respeitando a barra inferior do iPhone.

## Fotos

Banco de imagens do [Unsplash](https://unsplash.com) (uso livre, inclusive
comercial). Numa clínica real, entram as fotos dela — foto de banco em site de
negócio local é percebida na hora.
