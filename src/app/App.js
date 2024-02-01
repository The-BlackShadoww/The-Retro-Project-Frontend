import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "../routes/Routers";
import { Provider } from "react-redux";
import store from "../lib/Redux/Store";
import {
    AllProducts,
    SearchContext,
    BagContext,
    MemberProfileContext,
} from "../contexts";
import Data from "../db/db.json";

function App() {
    const [allProducts, setAllProducts] = useState(Data.products);
    const [search, setSearch] = useState(false);
    const [bag, setBag] = useState([]);
    const [profile, setProfile] = useState(null);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <AllProducts.Provider value={{ allProducts, setAllProducts }}>
                    <SearchContext.Provider value={{ search, setSearch }}>
                        <BagContext.Provider value={{ bag, setBag }}>
                            <MemberProfileContext.Provider
                                value={{ profile, setProfile }}
                            >
                                <Routers />
                            </MemberProfileContext.Provider>
                        </BagContext.Provider>
                    </SearchContext.Provider>
                </AllProducts.Provider>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

// ! With ApiProvider
// import { BrowserRouter } from "react-router-dom";
// import Routers from "../routes/Routers";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { apiSlice } from "../lib/Redux/ReduxToolkit/apiSlice";

// function App() {
//     return (
//         <ApiProvider api={apiSlice}>
//             <BrowserRouter>
//                 <Routers />
//             </BrowserRouter>
//         </ApiProvider>
//     );
// }

// export default App;
