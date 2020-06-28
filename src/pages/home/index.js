import React, { useState } from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Home(props) {
    return (
        <> 
            <div className="App">
                <Header logado="true"/>

                <main className="container">
                    <h1>home</h1>
                </main>

                <Footer/>

            </div>
        </>
    );
}