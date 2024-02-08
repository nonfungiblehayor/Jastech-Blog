import { ReactNode, createContext, useState } from "react";

export type ErrorType = {
  error: string
}
export type errorHandle = {
  setError: (error: string) => void
}

type contextProvider = {
  children: ReactNode;
};


export const ErrorContext = createContext<ErrorType | string>('')
export const ErrorContextFunction = createContext<errorHandle | undefined>(undefined)

const ContextHandler = (children: contextProvider) => {
  const [err, setErr] = useState<ErrorType | string>('')
  const setError = (errorMsg: string) => {
    setErr(errorMsg)
  }
  return (
        <ErrorContext.Provider value={err}>
          <ErrorContextFunction.Provider value={{setError}}>
                {children.children}
          </ErrorContextFunction.Provider>
        </ErrorContext.Provider>
  )
}

export default ContextHandler