import React, { createContext, ReactNode } from "react";

import * as AuthSession from "expo-auth-session";

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

type AuthContextData = {
  user: User;
  signInWithGoogle: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: "user",
    name: "user",
    email: "user@example.com",
    avatar: "http://example.com/avatar/user",
  };

  async function signInWithGoogle() {
    try {
      const CLIENT_ID =
        "48903639088-eug1la0mb21ptshmgctveg1bj6o3096k.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@adilsonlopes/killap-app";
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const response = await AuthSession.startAsync({ authUrl });

      console.log(response);
    } catch (error) {}
  }

  async function signInWithApple() {}

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}
