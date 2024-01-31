import { BrowserRouter } from "react-router-dom";
import Routers from "../routes/Routers";
import { Provider } from "react-redux";
import store from "../lib/Redux/Store";
import { SearchContext, BagContext } from "../contexts";
import { useState } from "react";

function App() {
    const [search, setSearch] = useState(false);
    const [bag, setBag] = useState([]);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <SearchContext.Provider value={{ search, setSearch }}>
                    <BagContext.Provider value={{ bag, setBag }}>
                        <Routers />
                    </BagContext.Provider>
                </SearchContext.Provider>
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
