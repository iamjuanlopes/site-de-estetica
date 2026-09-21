/* ==========================================================================
   Monta a página a partir de data/clinica.js.
   Não precisa mexer aqui pra adaptar o site a outra clínica.
   ========================================================================== */

/* No arquivo único as fotos viram data URI e ficam em window.IMAGENS. */
function foto(caminho) {
  if (window.IMAGENS && window.IMAGENS[caminho]) return window.IMAGENS[caminho];
  return caminho;
}

/* Link de WhatsApp com a mensagem já escrita */
function linkWpp(mensagem) {
  return 'https://wa.me/' + CLINICA.whatsapp + '?text=' + encodeURIComponent(mensagem || CLINICA.mensagemPadrao);
}

const ICONE_WPP =
  '<svg class="icone-wpp" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.24 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.22-.17-.47-.29Z"/></svg>';

/* ---------- topo e botões de WhatsApp ------------------------------------ */

function montarTopo() {
  /* a marca sai com a primeira palavra cheia e a segunda leve, como no modelo */
  const partes = CLINICA.nome.split(' ');
  const marca = partes.length > 1
    ? partes[0] + '<span>&nbsp;' + partes.slice(1).join(' ') + '</span>'
    : CLINICA.nome;

  document.querySelectorAll('[data-marca]').forEach(function (el) {
    el.innerHTML = marca;
  });

  document.querySelectorAll('[data-wpp]').forEach(function (el) {
    el.href = linkWpp(el.getAttribute('data-wpp') || '');
    el.target = '_blank';
    el.rel = 'noopener';
    if (el.hasAttribute('data-wpp-icone')) el.insertAdjacentHTML('afterbegin', ICONE_WPP);
  });
}

/* ---------- selos -------------------------------------------------------- */

function montarSelos() {
  document.getElementById('selos').innerHTML = CLINICA.selos
    .map(function (s) {
      return '<div class="selo"><b>' + s[0] + '</b><span>' + s[1] + '</span></div>';
    })
    .join('');
}

/* ---------- serviços ----------------------------------------------------- */

function montarServicos() {
  document.getElementById('servicos-grade').innerHTML = SERVICOS.map(function (s) {
    const grande = 'img/' + s.foto + '.jpg';
    const pequena = 'img/' + s.foto + '-480.jpg';
    const srcset = window.IMAGENS ? '' : ' srcset="' + pequena + ' 480w, ' + grande + ' 800w" sizes="(min-width:900px) 360px, (min-width:620px) 50vw, 100vw"';
    const mensagem = 'Oi! Queria agendar ' + s.nome.toLowerCase() + '.';

    return (
      '<article class="servico">' +
        '<img src="' + foto(grande) + '"' + srcset + ' loading="lazy" alt="' + s.nome + '">' +
        '<div class="servico-corpo">' +
          '<h3>' + s.nome + '</h3>' +
          '<p>' + s.texto + '</p>' +
          '<div class="servico-meta">' +
            '<span class="servico-preco">' + s.preco + '</span>' +
            '<span class="servico-duracao">' + s.duracao + '</span>' +
          '</div>' +
          '<a class="btn btn-contorno" href="' + linkWpp(mensagem) + '" target="_blank" rel="noopener">Agendar</a>' +
        '</div>' +
      '</article>'
    );
  }).join('');
}

/* ---------- o espaço, galeria e passos ----------------------------------- */

function montarEspaco() {
  const principal = document.getElementById('espaco-foto');
  principal.src = foto('img/espaco.jpg');
  if (!window.IMAGENS) {
    principal.srcset = 'img/espaco-600.jpg 600w, img/espaco.jpg 1200w';
    principal.sizes = '(min-width:900px) 560px, 100vw';
  }

  document.getElementById('galeria').innerHTML = [1, 2, 3, 4]
    .map(function (n) {
      const grande = 'img/gal-' + n + '.jpg';
      const srcset = window.IMAGENS ? '' : ' srcset="img/gal-' + n + '-400.jpg 400w, ' + grande + ' 700w" sizes="(min-width:620px) 25vw, 50vw"';
      return '<img src="' + foto(grande) + '"' + srcset + ' loading="lazy" alt="Detalhe do espaço">';
    })
    .join('');

  document.getElementById('passos').innerHTML = PASSOS.map(function (p) {
    return '<div class="passo"><h3>' + p[0] + '</h3><p>' + p[1] + '</p></div>';
  }).join('');
}

/* ---------- depoimentos -------------------------------------------------- */

function montarDepoimentos() {
  document.getElementById('depoimentos').innerHTML = DEPOIMENTOS.map(function (d) {
    return (
      '<blockquote class="depo">' +
        '<div class="estrelas" aria-label="5 de 5 estrelas">★★★★★</div>' +
        '<p>' + d.texto + '</p>' +
        '<footer><b>' + d.nome + '</b> · ' + d.detalhe + '</footer>' +
      '</blockquote>'
    );
  }).join('');
}

/* ---------- faq ---------------------------------------------------------- */

function montarFaq() {
  document.getElementById('faq').innerHTML = FAQ.map(function (f) {
    return '<details class="faq-item"><summary>' + f[0] + '</summary><p>' + f[1] + '</p></details>';
  }).join('');
}

/* ---------- contato e rodapé --------------------------------------------- */

function montarContato() {
  document.querySelectorAll('[data-endereco]').forEach(function (el) {
    el.innerHTML = CLINICA.endereco + '<br>' + CLINICA.cidadeUf;
  });

  document.querySelectorAll('[data-mapa]').forEach(function (el) {
    el.href = CLINICA.mapa;
    el.target = '_blank';
    el.rel = 'noopener';
  });

  document.getElementById('horarios').innerHTML = CLINICA.horarios
    .map(function (h) {
      return '<li><span>' + h[0] + '</span><span>' + h[1] + '</span></li>';
    })
    .join('');

  document.querySelectorAll('[data-telefone]').forEach(function (el) {
    el.textContent = CLINICA.whatsappVisivel;
  });

  document.querySelectorAll('[data-instagram]').forEach(function (el) {
    el.textContent = '@' + CLINICA.instagram;
    el.href = 'https://instagram.com/' + CLINICA.instagram;
    el.target = '_blank';
    el.rel = 'noopener';
  });

  document.querySelectorAll('[data-ano]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('[data-desenvolvido]').forEach(function (el) {
    el.textContent = 'Desenvolvido por ' + CLINICA.desenvolvidoPor;
  });
}

/* ---------- menu do celular ---------------------------------------------- */

function montarMenu() {
  const botao = document.getElementById('hamburguer');
  const menu = document.getElementById('menu-celular');

  botao.addEventListener('click', function () {
    const aberto = menu.classList.toggle('aberto');
    botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    botao.innerHTML = aberto ? '&times;' : '&#9776;';
  });

  /* tocar num link fecha o menu, senão ele fica aberto por cima da seção */
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('aberto');
      botao.setAttribute('aria-expanded', 'false');
      botao.innerHTML = '&#9776;';
    });
  });
}

/* ---------- redes sociais do rodapé -------------------------------------- */

const ICONES_REDE = {
  instagram: '<svg viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38C1.35 2.68.93 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.66 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.13-1.38.66-.67 1.08-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.93 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84ZM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm7.85-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.84 14.13c-.25.7-1.44 1.33-2 1.4-.51.08-1.16.11-1.87-.12-.43-.13-.98-.32-1.69-.62-2.98-1.29-4.92-4.29-5.07-4.49-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.59-.37.79-.37h.57c.18 0 .43-.07.67.51.25.6.85 2.06.92 2.21.08.15.13.32.03.52-.1.2-.15.32-.3.5l-.45.52c-.15.15-.3.31-.13.61.17.3.77 1.27 1.65 2.05 1.14 1.01 2.1 1.33 2.4 1.48.3.15.47.13.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.08.12.08.72-.17 1.42Z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z"/></svg>',
};

function montarRedes() {
  const redes = [];
  if (CLINICA.instagram) redes.push(['instagram', 'https://instagram.com/' + CLINICA.instagram, 'Instagram']);
  if (CLINICA.facebook) redes.push(['facebook', 'https://facebook.com/' + CLINICA.facebook, 'Facebook']);
  redes.push(['whatsapp', linkWpp(), 'WhatsApp']);

  document.getElementById('redes').innerHTML = redes
    .map(function (r) {
      return '<a href="' + r[1] + '" target="_blank" rel="noopener" aria-label="' + r[2] + '">' + ICONES_REDE[r[0]] + '</a>';
    })
    .join('');
}

/* ---------- hero --------------------------------------------------------- */

function montarHero() {
  const h = document.getElementById('hero-foto');
  const arquivo = CLINICA.fotoHero || 'hero.jpg';
  const caminho = 'img/' + arquivo;

  h.src = foto(caminho);

  /* recorte ou fundo liso: a pessoa aparece inteira sobre a cor do painel,
     em vez de ser cortada pra preencher o retângulo */
  if (CLINICA.fotoHeroRecorte || /\.png$/i.test(arquivo)) h.classList.add('recorte');

  /* versão menor pro celular: a largura vem do número no fim do nome */
  const pequena = CLINICA.fotoHeroPequena;
  const larguraPequena = pequena && (pequena.match(/-(\d+)\.jpe?g$/i) || [])[1];

  if (!window.IMAGENS && larguraPequena) {
    h.srcset = 'img/' + pequena + ' ' + larguraPequena + 'w, ' + caminho + ' 1600w';
    h.sizes = '(min-width: 1000px) 380px, 100vw';
  }
}

document.title = CLINICA.nome + ' | ' + CLINICA.assinatura + ' em ' + CLINICA.cidade;

montarHero();
montarTopo();
montarMenu();
montarRedes();
montarSelos();
montarServicos();
montarEspaco();
montarDepoimentos();
montarFaq();
montarContato();
