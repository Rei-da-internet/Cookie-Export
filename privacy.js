const LAST_UPDATED = '1 de junho de 2026';
const CONTACT_EMAIL = 'contato@tmjmidias.com';

const content = {
  pt: {
    pageTitle: 'Política — Cookie Export',
    brandSubtitle: 'Extensão para exportação de cookies',
    langButton: 'English',
    heroTitle: 'Política de Privacidade do Cookie Export',
    updatedLabel: 'Última atualização:',
    intro: 'Esta Política de Privacidade (“Política”) explica as práticas de coleta, uso e compartilhamento de informações do Cookie Export (“nós”, “nos” e “nosso”) em relação ao uso da nossa extensão de navegador (a “Extensão”).',
    intro2: 'Estamos comprometidos com os mais altos padrões de privacidade e segurança. Antes de usar a Extensão, leia esta Política com atenção. Ao usar a Extensão, você entende que suas informações serão tratadas conforme descrito aqui. Se não concordar, não utilize a Extensão.',
    noticeTitle: 'Resumo importante',
    noticeText: 'O Cookie Export processa cookies e dados de abas apenas no seu computador. Não enviamos cookies, histórico de navegação ou sessões para servidores externos.',
    sections: [
      {
        title: '1. Nossos princípios',
        paragraphs: ['O Cookie Export foi desenvolvido com os seguintes princípios:'],
        list: [
          'Minimalismo: acessamos apenas os dados necessários para exportar cookies e metadados das abas abertas.',
          'Transparência: declaramos claramente quais dados são acessados e como são processados.',
          'Controle do usuário: você mantém propriedade e controle total sobre seus cookies e arquivos exportados.'
        ]
      },
      {
        title: '2. Informações que acessamos e como as processamos',
        paragraphs: [
          'Para oferecer a funcionalidade principal — exportar automaticamente cookies das abas abertas para um arquivo local — a Extensão requer permissões de cookies, abas, armazenamento, alarmes e downloads. Veja como esses dados são tratados:'
        ],
        list: [
          'Acesso a cookies: a Extensão lê cookies armazenados no navegador para os sites das abas abertas, incluindo nome, valor, domínio, caminho, flags de segurança e data de expiração.',
          'Dados de abas: coletamos metadados das abas abertas (como título, URL, status e identificadores) para organizar a exportação por aba no arquivo JSON.',
          'Exportação automática: em intervalos configuráveis (padrão: 2 minutos), os dados são convertidos em JSON e salvos localmente na pasta Downloads ou em pasta escolhida por você.',
          'Configurações: preferências como intervalo, nome do arquivo e local de salvamento são armazenadas com chrome.storage no seu perfil do navegador.'
        ],
        highlightTitle: 'Processamento 100% local (offline e privado)',
        highlightText: 'Nota crucial de privacidade: todos os cookies e dados de abas acessados pela Extensão são processados 100% localmente na sua máquina. Não possuímos servidores para armazenar seus cookies e nunca transmitimos, coletamos ou monitoramos seu histórico de navegação, sessões de conta ou valores de cookies. Tudo permanece no seu ambiente local.'
      },
      {
        title: '3. Informações que você fornece voluntariamente',
        paragraphs: ['Podemos receber informações pessoais mínimas apenas quando você interage conosco fora da funcionalidade principal da Extensão:'],
        list: [
          'Suporte e feedback: se você nos contatar por e-mail, coletaremos seu endereço de e-mail e as informações enviadas na mensagem para responder à sua solicitação.',
          'Pagamentos: caso existam contribuições ou licenças pagas no futuro, o processamento será feito por provedores terceiros seguros. Não armazenamos dados de cartão ou faturamento.'
        ]
      },
      {
        title: '4. Análise de terceiros',
        paragraphs: [
          'A Extensão não utiliza ferramentas de analytics de terceiros (como Google Analytics) para rastrear seu uso individual, cookies ou conteúdo das abas.',
          'Se isso mudar no futuro, esta Política será atualizada antes da coleta de qualquer dado analítico adicional.'
        ]
      },
      {
        title: '5. Conformidade com a política “Limited Use” da Chrome Web Store',
        paragraphs: ['O Cookie Export cumpre a Política de Dados do Usuário da Chrome Web Store, incluindo os requisitos de Limited Use:'],
        list: [
          'Sem venda de dados: nunca vendemos, alugamos ou trocamos seus dados pessoais, histórico de navegação ou informações de cookies com terceiros, corretores de dados ou redes de publicidade.',
          'Sem segmentação publicitária: não usamos nem divulgamos seus dados para anúncios personalizados, publicidade comportamental ou pontuação de crédito.',
          'Sem revisão humana: nenhum ser humano (incluindo os desenvolvedores) pode acessar, ler ou interceptar seus cookies, pois esses dados não saem do seu dispositivo.',
          'Uso funcional apenas: usamos as permissões do navegador somente para fornecer e melhorar os recursos de exportação de cookies da Extensão.'
        ]
      },
      {
        title: '6. Medidas de segurança',
        paragraphs: [
          'Adotamos configurações rigorosas na Extensão para reduzir o risco de exposição indevida dos seus dados locais.',
          'Recomendamos proteger o arquivo exportado com as mesmas práticas que você usaria para credenciais sensíveis, pois cookies podem conter informações de sessão.'
        ]
      },
      {
        title: '7. Privacidade de menores',
        paragraphs: [
          'A Extensão é destinada a usuários com 18 anos ou mais. Não é direcionada a crianças menores de 13 anos e não coletamos intencionalmente informações pessoais de crianças.'
        ]
      },
      {
        title: '8. Alterações nesta Política de Privacidade',
        paragraphs: [
          'Podemos atualizar esta Política periodicamente para refletir mudanças em nossas práticas ou exigências das lojas de extensões. Qualquer atualização será publicada nesta página com a data revisada de “Última atualização”.'
        ]
      },
      {
        title: '9. Fale conosco',
        paragraphs: [
          'Se tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre as práticas de dados do Cookie Export, entre em contato:'
        ],
        contact: true
      }
    ],
    footer: '© 2026 Cookie Export. Todos os direitos reservados.'
  },
  en: {
    pageTitle: 'Policy — Cookie Export',
    brandSubtitle: 'Browser extension for cookie export',
    langButton: 'Português',
    heroTitle: 'Privacy Policy for Cookie Export',
    updatedLabel: 'Last Updated:',
    intro: 'This Privacy Policy (“Policy”) explains the information collection, use, and sharing practices of Cookie Export (“we,” “us,” and “our”) regarding your use of our browser extension (the "Extension").',
    intro2: 'We are committed to maintaining the highest standards of user privacy and data security. Before you use the Extension, please carefully review this Privacy Policy. By using the Extension, you understand that your information will be handled as outlined in this Policy. If you do not agree, please do not use our Extension.',
    noticeTitle: 'Important summary',
    noticeText: 'Cookie Export processes cookies and tab data only on your computer. We do not send cookies, browsing history, or sessions to external servers.',
    sections: [
      {
        title: '1. Our Principles',
        paragraphs: ['Cookie Export is designed with the following principles in mind:'],
        list: [
          'Minimalism: We only access data that is absolutely necessary to export cookies and metadata from open tabs.',
          'Transparency: We clearly state what data is accessed and how it is processed.',
          'User Control: You retain full ownership and control over your cookies and exported files.'
        ]
      },
      {
        title: '2. Information We Access and How We Process It',
        paragraphs: [
          'To provide its core functionality—automatically exporting cookies from open tabs to a local file—the Extension requires cookies, tabs, storage, alarms, and downloads permissions. Here is exactly how this data is handled:'
        ],
        list: [
          'Cookie Data Access: The Extension reads cookies stored in your browser for websites in open tabs, including name, value, domain, path, security flags, and expiration date.',
          'Tab Data: We collect metadata from open tabs (such as title, URL, status, and identifiers) to organize per-tab export in the JSON file.',
          'Automatic Export: At configurable intervals (default: 2 minutes), data is converted to JSON and saved locally in Downloads or in a folder you choose.',
          'Settings: Preferences such as interval, filename, and save location are stored with chrome.storage in your browser profile.'
        ],
        highlightTitle: 'Local Processing (100% Offline & Private)',
        highlightText: 'Crucial Privacy Note: All cookies and tab data accessed by the Extension are processed 100% locally on your machine. We do not operate servers to store your cookies, and we never transmit, collect, or monitor your browsing history, account sessions, or cookie values. Everything stays inside your local environment.'
      },
      {
        title: '3. Information You Provide Voluntarily',
        paragraphs: ['We may collect minimal personal information only when you explicitly interact with us outside the extension\'s core functionality:'],
        list: [
          'Support and Feedback: If you contact us by email, we will collect your email address and any information you provide in the message to resolve your issue.',
          'Payments: If voluntary payments or premium licenses are introduced in the future, payment processing will be handled by secure third-party processors. We do not store your credit card or billing details.'
        ]
      },
      {
        title: '4. Third-Party Analytics',
        paragraphs: [
          'The Extension does not use third-party analytics tools (such as Google Analytics) to track your individual usage, cookies, or tab content.',
          'If this changes in the future, this Policy will be updated before any additional analytics collection begins.'
        ]
      },
      {
        title: '5. Google Chrome Web Store "Limited Use" Compliance',
        paragraphs: ['Cookie Export strictly complies with the Chrome Web Store User Data Policy, including the Limited Use requirements:'],
        list: [
          'No Sale of Data: We never sell, rent, lease, or trade your personal data, web browsing history, or cookie information to third parties, data brokers, or advertising networks.',
          'No Ad Targeting: We do not use or disclose your data for personalized ads, behavioral advertising, or credit-scoring purposes.',
          'No Human Review: No human beings (including the developers) can access, read, or intercept your cookie data, as it never leaves your local device.',
          'Functional Use Only: We only use the accessed browser permissions to provide and improve the core cookie export features of the Extension.'
        ]
      },
      {
        title: '6. Security Measures',
        paragraphs: [
          'We implement strict extension-side security configurations to help keep your local data protected.',
          'We recommend protecting exported files with the same care you would use for sensitive credentials, since cookies may contain session information.'
        ]
      },
      {
        title: '7. Children\'s Privacy',
        paragraphs: [
          'The Extension is intended for users aged 18 and over. It is not directed at children under the age of 13, and we do not knowingly collect personal information from children.'
        ]
      },
      {
        title: '8. Changes to this Privacy Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time to reflect changes in our practices or browser store compliance rules. Any updates will be posted on this page with a revised "Last Updated" date.'
        ]
      },
      {
        title: '9. Contact Us',
        paragraphs: [
          'If you have any questions or concerns regarding this Privacy Policy or the data practices of Cookie Export, please contact us at:'
        ],
        contact: true
      }
    ],
    footer: '© 2026 Cookie Export. All rights reserved.'
  }
};

let currentLang = 'pt';

function renderPolicy() {
  const data = content[currentLang];
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
  document.title = data.pageTitle;

  document.getElementById('brandSubtitle').textContent = data.brandSubtitle;
  document.getElementById('langToggle').textContent = data.langButton;
  document.getElementById('heroTitle').textContent = data.heroTitle;
  document.getElementById('updatedLabel').textContent = data.updatedLabel;
  document.getElementById('updatedDate').textContent = LAST_UPDATED;
  document.getElementById('intro').textContent = data.intro;
  document.getElementById('intro2').textContent = data.intro2;
  document.getElementById('noticeTitle').textContent = data.noticeTitle;
  document.getElementById('noticeText').textContent = data.noticeText;
  document.getElementById('footerText').textContent = data.footer;

  const container = document.getElementById('policySections');
  container.innerHTML = '';

  data.sections.forEach((section) => {
    const article = document.createElement('section');
    article.className = 'policy-section';

    const heading = document.createElement('h3');
    heading.textContent = section.title;
    article.appendChild(heading);

    section.paragraphs.forEach((text) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      article.appendChild(paragraph);
    });

    if (section.list) {
      const list = document.createElement('ul');
      section.list.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      });
      article.appendChild(list);
    }

    if (section.highlightTitle) {
      const box = document.createElement('div');
      box.className = 'highlight-box';
      box.innerHTML = `<strong>${section.highlightTitle}</strong><p>${section.highlightText}</p>`;
      article.appendChild(box);
    }

    if (section.contact) {
      const card = document.createElement('div');
      card.className = 'contact-card';
      card.innerHTML = `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;
      article.appendChild(card);
    }

    container.appendChild(article);
  });
}

function bindUi() {
  document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    renderPolicy();
  });

  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 320);
  });

  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPolicy();
  bindUi();
});
