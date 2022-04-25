/**
 * `Common Context`.
 * @param {children} ReactNode.
 * @return {Context} Context & Provider.
 */

import { useContext, createContext, useState, useMemo, Context, useEffect } from "react";

export const AppContext: Context<any> = createContext<any>(null);
export const AppContextProvider = ({ children }: any) => {
    const [token, setToken] = useState<string | null>(null);
    const values = useMemo(
        () => ({
            setToken,
        }),
        []
    );
    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);
    return (
        <AppContext.Provider
            value={{
                ...values,
                token,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        console.error("Error deploying App Context!!!");
    }
    return context;
}

export default useAppContext;
