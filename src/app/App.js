import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "../routes/Routers";
import Data from "../db/db.json";
import { getMemberAcc } from "../services/authServices";
import {
    AllProducts,
    SearchContext,
    BagContext,
    MemberProfileContext,
    AllAccountContext,
    CurrentAccountContext,
    AuthToken,
    LocationContext,
} from "../contexts";

function App() {
    const [allProducts, setAllProducts] = useState(Data.products);
    const [search, setSearch] = useState(false);
    const [bag, setBag] = useState([]);
    const [profile, setProfile] = useState(null);
    const [allAccounts, setAllAccounts] = useState([]);
    const [currentAccount, setCurrentAccount] = useState();
    const [token, setToken] = useState(null);
    const [location, setLocation] = useState("");

    useEffect(() => {
        //* fetching member accounts from firebase's realtime database.
        getMemberAcc()
            .then((response) => {
                if (response.data) {
                    const newArray = Object.values(response.data);
                    setAllAccounts([...newArray]);
                } else {
                    console.error("Response data is undefined or null");
                }
            })
            .catch((error) => {
                console.log(error);
            });

        setCurrentAccount(JSON.parse(localStorage.getItem("account")));
        setToken(JSON.parse(localStorage.getItem("authToken")));
    }, []);

    return (
        <BrowserRouter>
            <LocationContext.Provider value={{ location, setLocation }}>
                <AuthToken.Provider value={{ token, setToken }}>
                    <AllAccountContext.Provider
                        value={{ allAccounts, setAllAccounts }}
                    >
                        <CurrentAccountContext.Provider
                            value={{ currentAccount, setCurrentAccount }}
                        >
                            <AllProducts.Provider
                                value={{ allProducts, setAllProducts }}
                            >
                                <SearchContext.Provider
                                    value={{ search, setSearch }}
                                >
                                    <BagContext.Provider
                                        value={{ bag, setBag }}
                                    >
                                        <MemberProfileContext.Provider
                                            value={{ profile, setProfile }}
                                        >
                                            <Routers />
                                        </MemberProfileContext.Provider>
                                    </BagContext.Provider>
                                </SearchContext.Provider>
                            </AllProducts.Provider>
                        </CurrentAccountContext.Provider>
                    </AllAccountContext.Provider>
                </AuthToken.Provider>
            </LocationContext.Provider>
        </BrowserRouter>
    );
}

export default App;
