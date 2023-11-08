import Footer from "./footer";
import Nav from "./Nav";
import { ReactNode } from "react";


export default function DefaultLayout({children}: {children: ReactNode})  {
    return (
        <>
            <Nav />
             {children}
            <Footer />
        </>
    )
}