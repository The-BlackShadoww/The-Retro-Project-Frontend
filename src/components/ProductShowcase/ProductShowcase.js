import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import LeftSideNav from "./LeftSideNav";
import ProductGrid from "./ProductGrid";
import TabFilter from "./TabFilter";

const ProductShowcase = ({ data }) => {
    const [products, setProducts] = useState(data);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isFilter, setIsFilter] = useState(true);
    const [isTabFilterOpen, setIsTabFilterOpen] = useState(false);
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // States for Checkboxes
    const [isMenChecked, setIsMenChecked] = useState(false);
    const [isWomenChecked, setIsWomenChecked] = useState(false);
    const [isKidsChecked, setIsKidsChecked] = useState(false);
    const [is0_25Checked, setIs0_25Checked] = useState(false);
    const [is25_50Checked, setIs25_50Checked] = useState(false);
    const [is50_100Checked, setIs50_100Checked] = useState(false);
    const [isOver100Checked, setIsOver100Checked] = useState(false);

    const releasesNumber = data.length;

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    const controlScrollY = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", controlScrollY);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleSort = () => {
        setIsSortOpen(!isSortOpen);
    };

    const handleFilter = () => {
        setIsFilter(!isFilter);
    };

    const handleTabFilter = () => {
        setIsTabFilterOpen(!isTabFilterOpen);
    };

    const handleGenders = () => {
        let filteredProducts = data;

        if (isMenChecked || isWomenChecked || isKidsChecked) {
            filteredProducts = filteredProducts.filter((product) => {
                return (
                    (isMenChecked && product.gender === "men") ||
                    (isWomenChecked && product.gender === "women") ||
                    (isKidsChecked && product.gender === "kids")
                );
            });
        }

        setProducts([...filteredProducts]);
    };

    //* This function will work in Gender and ShopByPrice component
    const handleCheck = (e) => {
        let name = e.target.name;
        let id = e.target.id;

        if (id === "men") {
            setIsMenChecked(e.target.checked);
        } else if (id === "women") {
            setIsWomenChecked(e.target.checked);
        } else if (id === "kids") {
            setIsKidsChecked(e.target.checked);
        }

        // handleGenders();
    };

    useEffect(() => {
        handleGenders();
    }, [isMenChecked, isWomenChecked, isKidsChecked]);

    const handleCategories = (e) => {
        const category = e.target.value;

        if (category === "clothing") {
            let clothing = data.filter(
                (product) => product.category === "clothing"
            );

            setProducts([...clothing]);
        } else if (category === "shoes") {
            let shoes = data.filter((product) => product.category === "shoes");

            setProducts([...shoes]);
        } else if (category === "accessories") {
            let accessories = data.filter(
                (product) => product.category === "accessories"
            );

            setProducts([...accessories]);
        } else {
            setProducts(data);
        }
    };

    let content = (
        <div className="p-0 tablet:px-12 Poppins">
            <TopNav
                scrollY={scrollY}
                releasesNumber={releasesNumber}
                handleFilter={handleFilter}
                handleSort={handleSort}
                isFilter={isFilter}
                isSortOpen={isSortOpen}
            />

            <TabFilter
                handleTabFilter={handleTabFilter}
                isTabFilterOpen={isTabFilterOpen}
                releasesNumber={releasesNumber}
            />
            <div className="relative flex pt-4">
                <LeftSideNav
                    scrollY={scrollY}
                    isFilter={isFilter}
                    isMenChecked={isMenChecked}
                    isWomenChecked={isWomenChecked}
                    isKidsChecked={isKidsChecked}
                    is0_25Checked={is0_25Checked}
                    is25_50Checked={is25_50Checked}
                    is50_100Checked={is50_100Checked}
                    isOver100Checked={isOver100Checked}
                    handleCheck={handleCheck}
                    onCategoryChange={handleCategories}
                />
                <ProductGrid
                    data={products}
                    isFilter={isFilter}
                    windowWidth={windowWidth}
                />
            </div>
        </div>
    );

    return content;
};

export default ProductShowcase;

//! without filters

// import React, { useEffect, useState } from "react";
// import TopNav from "./TopNav";
// import LeftSideNav from "./LeftSideNav";
// import ProductGrid from "./ProductGrid";
// import TabFilter from "./TabFilter";

// const ProductShowcase = ({ data }) => {
//     const [isSortOpen, setIsSortOpen] = useState(false);
//     const [isFilter, setIsFilter] = useState(true);
//     const [isTabFilterOpen, setIsTabFilterOpen] = useState(false);
//     const [scrollY, setScrollY] = useState(window.scrollY);
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//     // States for Checkboxes
//     const [isMenChecked, setIsMenChecked] = useState(false);
//     const [isWomenChecked, setIsWomenChecked] = useState(false);
//     const [isKidsChecked, setIsKidsChecked] = useState(false);
//     const [is0_25Checked, setIs0_25Checked] = useState(false);
//     const [is25_50Checked, setIs25_50Checked] = useState(false);
//     const [is50_100Checked, setIs50_100Checked] = useState(false);
//     const [isOver100Checked, setIsOver100Checked] = useState(false);

//     const releasesNumber = data.length;

//     const handleResize = () => {
//         setWindowWidth(window.innerWidth);
//     };

//     const controlScrollY = () => {
//         setScrollY(window.scrollY);
//     };

//     useEffect(() => {
//         window.addEventListener("resize", handleResize);
//         window.addEventListener("scroll", controlScrollY);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);

//     const handleSort = () => {
//         setIsSortOpen(!isSortOpen);
//     };

//     const handleFilter = () => {
//         setIsFilter(!isFilter);
//     };

//     const handleTabFilter = () => {
//         setIsTabFilterOpen(!isTabFilterOpen);
//     };

//     // This function will work in Gender and ShopByPrice component
//     const handleCheck = (e) => {
//         // e.preventDefault();
//         let name = e.target.name;

//         if (name === "men") {
//             setIsMenChecked(e.target.checked);
//         } else if (name === "women") {
//             setIsWomenChecked(e.target.checked);
//         } else if (name === "kids") {
//             setIsKidsChecked(e.target.checked);
//         } else if (name === "0_25") {
//             setIs0_25Checked(e.target.checked);
//         } else if (name === "25_50") {
//             setIs25_50Checked(e.target.checked);
//         } else if (name === "50_100") {
//             setIs50_100Checked(e.target.checked);
//         } else if (name === "over_100") {
//             setIsOver100Checked(e.target.checked);
//         }
//     };

//     let content = (
//         <div className="p-0 tablet:px-12 Poppins">
//             <TopNav
//                 scrollY={scrollY}
//                 releasesNumber={releasesNumber}
//                 handleFilter={handleFilter}
//                 handleSort={handleSort}
//                 isFilter={isFilter}
//                 isSortOpen={isSortOpen}
//             />

//             <TabFilter
//                 handleTabFilter={handleTabFilter}
//                 isTabFilterOpen={isTabFilterOpen}
//                 releasesNumber={releasesNumber}
//             />
//             <div className="relative flex pt-4">
//                 <LeftSideNav
//                     scrollY={scrollY}
//                     isFilter={isFilter}
//                     isMenChecked={isMenChecked}
//                     isWomenChecked={isWomenChecked}
//                     isKidsChecked={isKidsChecked}
//                     is0_25Checked={is0_25Checked}
//                     is25_50Checked={is25_50Checked}
//                     is50_100Checked={is50_100Checked}
//                     isOver100Checked={isOver100Checked}
//                     handleCheck={handleCheck}
//                 />
//                 <ProductGrid
//                     data={data}
//                     isFilter={isFilter}
//                     windowWidth={windowWidth}
//                 />
//             </div>
//         </div>
//     );

//     return content;
// };

// export default ProductShowcase;
