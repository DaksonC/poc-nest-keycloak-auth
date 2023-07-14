import NextAuth from 'next-auth'
import KeycloakProvider from "next-auth/providers/keycloak";

const clientId = process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID;
const clientSecret = process.env.KEYCLOAK_SECRET;
const keycloakUrl = process.env.NEXT_PUBLIC_KEYCLOAK_URL;
const keycloakRealm = process.env.NEXT_PUBLIC_KEYCLOAK_REALM;

if (!clientId || !clientSecret || !keycloakUrl || !keycloakRealm) {
  throw new Error("Missing Keycloak environment variables");
}

export default NextAuth({
  providers: [
    KeycloakProvider({
      clientId,
      clientSecret,
      issuer: `${keycloakUrl}/realms/${keycloakRealm}`,
      accessTokenUrl: `${keycloakUrl}/realms/${keycloakRealm}/protocol/openid-connect/auth`,
    }),
  ],
})
