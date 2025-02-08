import React, { createContext, useContext, useEffect, useCallback, useRef, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isInitialized = useRef(false);

  const updateSession = useCallback((session) => {
    setUser(session?.user ?? null);
  }, [])

  useEffect(() => {
    let subscription;

    // セッションの確認
    const initializeAuth = async () => {
      if (isInitialized.current) return;
      isInitialized.current = true;

      try {
        const { data: { session } } = await supabase.auth.getSession();
        updateSession(session);

        // 認証状態の変更を監視
        const { data } = supabase.auth.onAuthStateChange((_event, session) => {
          updateSession(session);
        });

        subscription = data.subscription;
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();


    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    }
  }, [updateSession])

  const contextValue = {
    user,
    loading,
    supabase // 必要に応じてsupabaseインスタンスを提供
  };

  // loadingがtrueの間はnullを返す
  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if(context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};