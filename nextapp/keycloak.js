import Keycloak from 'keycloak-js';

// Cria uma instância do Keycloak usando a configuração definida em next.config.js
const keycloak = new Keycloak(process.env.KEYCLOAK_CONFIG);

// Inicializa o Keycloak
keycloak.init({ onLoad: 'check-sso' })
  .then((authenticated) => {
    if (authenticated) {
      console.log('Usuário autenticado');
      // Faça o redirecionamento para a tela de boas-vindas ou outra página segura
    } else {
      console.log('Usuário não autenticado');
    }
  })
  .catch((error) => {
    console.error('Erro ao inicializar o Keycloak', error);
  });

export default keycloak;
