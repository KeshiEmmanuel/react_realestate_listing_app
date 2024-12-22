import { useState } from "react";
import MainNavbar from "../components/MainNavbar";
import PropertiesGrid from "../components/PropertiesGrid";
import PropertiesFilterator from "../components/PropertiesFilterator";
import { PropertiesQueries } from "../types/FilterTypes";

function App() {
    const [propertiesQueries, setPropertiesQueries] =
        useState<PropertiesQueries>({} as PropertiesQueries);
    return (
        <main>
            <MainNavbar />
            <PropertiesFilterator
                propertiesQueries={propertiesQueries}
                setPropertiesQueries={setPropertiesQueries}
            />
            <div className="max-w-[980px] mx-auto">
                <PropertiesGrid PropertiesQueries={propertiesQueries} />
            </div>
        </main>
    );
}

export default App;
