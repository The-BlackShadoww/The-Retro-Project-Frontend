import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import LeftSideNav from "./LeftSideNav";
import ProductGrid from "./ProductGrid";
import TabFilter from "./TabFilter";
import { useParams } from "react-router-dom";

const ProductShowcase = ({ data }) => {
    const { gender, category } = useParams();
    const [products, setProducts] = useState(data);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isFilter, setIsFilter] = useState(true);
    const [isTabFilterOpen, setIsTabFilterOpen] = useState(false);
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMenChecked, setIsMenChecked] = useState(false);
    const [isWomenChecked, setIsWomenChecked] = useState(false);
    const [isKidsChecked, setIsKidsChecked] = useState(false);
    const [is0_25Checked, setIs0_25Checked] = useState(false);
    const [is25_50Checked, setIs25_50Checked] = useState(false);
    const [is50_100Checked, setIs50_100Checked] = useState(false);
    const [isOver100Checked, setIsOver100Checked] = useState(false);
    const releasesNumber = data.length;

    useEffect(() => {
        if (isMenChecked || isWomenChecked || isKidsChecked) {
            handleGenders();
        } else if (
            is0_25Checked ||
            is25_50Checked ||
            is50_100Checked ||
            isOver100Checked
        ) {
            handlePrice();
        } else if (gender && category) {
            const fetchProducts = data.filter(
                (product) =>
                    product.gender === gender && product.category === category
            );
            setProducts([...fetchProducts]);
        } else if (gender) {
            const fetchProducts = data.filter(
                (product) => product.gender === gender
            );
            setProducts([...fetchProducts]);
        } else if (category) {
            const fetchProducts = data.filter(
                (product) => product.gender === category
            );
            setProducts([...fetchProducts]);
        } else {
            setProducts(data);
        }

        // window
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", controlScrollY);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [
        isMenChecked,
        isWomenChecked,
        isKidsChecked,
        is0_25Checked,
        is25_50Checked,
        is50_100Checked,
        isOver100Checked,
        category,
        gender,
    ]);

    const controlScrollY = () => {
        setScrollY(window.scrollY);
    };

    const handleSortToggle = () => {
        setIsSortOpen(!isSortOpen);
    };

    const handleFilter = () => {
        setIsFilter(!isFilter);
    };

    const handleTabFilter = () => {
        setIsTabFilterOpen(!isTabFilterOpen);
    };

    //! Gender
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

    const handlePrice = () => {
        let filteredProducts = data;

        if (isMenChecked || isWomenChecked || isKidsChecked) {
            filteredProducts.filter((product) => {
                return (
                    ((isMenChecked && product.gender === "men") ||
                        (isWomenChecked && product.gender === "women") ||
                        (isKidsChecked && product.gender === "kids")) &&
                    ((is0_25Checked && product.price <= 25) ||
                        (is25_50Checked &&
                            product.price >= 25 &&
                            product.price <= 50) ||
                        (is50_100Checked &&
                            product.price >= 50 &&
                            product.price <= 100) ||
                        (isOver100Checked && product.price > 100))
                );
            });

            setProducts([...filteredProducts]);
        } else if (
            is0_25Checked ||
            is25_50Checked ||
            is50_100Checked ||
            isOver100Checked
        ) {
            filteredProducts = filteredProducts.filter((product) => {
                return (
                    (is0_25Checked && product.price <= 25) ||
                    (is25_50Checked &&
                        product.price >= 25 &&
                        product.price <= 50) ||
                    (is50_100Checked &&
                        product.price >= 50 &&
                        product.price <= 100) ||
                    (isOver100Checked && product.price > 100)
                );
            });
        }

        setProducts([...filteredProducts]);
    };

    //! Checks
    const handleCheck = (e) => {
        // let name = e.target.name;
        let id = e.target.id;

        if (id === "men") {
            setIsMenChecked(e.target.checked);
        } else if (id === "women") {
            setIsWomenChecked(e.target.checked);
        } else if (id === "kids") {
            setIsKidsChecked(e.target.checked);
        } else if (id === "0_25") {
            setIs0_25Checked(e.target.checked);
        } else if (id === "25_50") {
            setIs25_50Checked(e.target.checked);
        } else if (id === "50_100") {
            setIs50_100Checked(e.target.checked);
        } else if (id === "over_100") {
            setIsOver100Checked(e.target.checked);
        }

        handleTabFilter();
    };

    //! Categories
    const handleCategories = (e) => {
        const category = e.target.value;
        let categoryProducts;

        if (isMenChecked || isWomenChecked || isKidsChecked) {
            categoryProducts = data.filter((product) => {
                return (
                    (isMenChecked &&
                        product.category === category &&
                        product.gender === "men") ||
                    (isWomenChecked &&
                        product.category === category &&
                        product.gender === "women") ||
                    (isKidsChecked &&
                        product.category === category &&
                        product.gender === "kids")
                );
            });

            setProducts([...categoryProducts]);
        } else {
            categoryProducts = data.filter(
                (product) => product.category === category
            );
            setProducts([...categoryProducts]);
        }
    };

    //! sorting
    const handleSort = (e) => {
        const sortTerm = e.target.value;
        let sortedData;

        if (sortTerm === "high_low") {
            sortedData = data.sort((a, b) => b.price - a.price);
            handleSortToggle();
        } else if (sortTerm === "low_high") {
            sortedData = data.sort((a, b) => a.price - b.price);
            handleSortToggle();
        } else if (sortTerm === "newest") {
            sortedData = data.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
            handleSortToggle();
        }
        setProducts([...sortedData]);
        handleTabFilter();
    };

    let content = (
        <div className="p-0 tablet:px-12 Poppins">
            <TopNav
                scrollY={scrollY}
                releasesNumber={releasesNumber}
                handleFilter={handleFilter}
                handleSortToggle={handleSortToggle}
                isFilter={isFilter}
                isSortOpen={isSortOpen}
                onSort={handleSort}
                onCategoryChange={handleCategories}
            />

            <TabFilter
                handleTabFilter={handleTabFilter}
                isTabFilterOpen={isTabFilterOpen}
                releasesNumber={releasesNumber}
                isMenChecked={isMenChecked}
                isWomenChecked={isWomenChecked}
                isKidsChecked={isKidsChecked}
                is0_25Checked={is0_25Checked}
                is25_50Checked={is25_50Checked}
                is50_100Checked={is50_100Checked}
                isOver100Checked={isOver100Checked}
                handleCheck={handleCheck}
                onSort={handleSort}
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
