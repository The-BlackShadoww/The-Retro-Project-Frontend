import React from "react";
import { Link } from "react-router-dom";
import "../Nav.css";
import "../../../assests/styles/global.css";
import Dropdown from "./Dropdown";

const DropdownLinks = () => {
    return (
        <div className="Poppins items-center">
            <ul className="w-[100% - 680px] max-w-[1255px] h-[60px] flex justify-center items-center mx-auto overflow-hidden Poppins">
                {/* All Products */}
                <div className="z-[1000]">
                    <Dropdown title={"Products"} path={"product"}>
                        <div className="flex flex-col text-left">
                            <Link to="" className="font-bold">
                                Winter Sale
                            </Link>
                            <Link to="">Shop up to 50% off</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">New & Featured</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">All the Shoes</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">All the Clothes</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">Jordan</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                    </Dropdown>
                </div>
                {/* Men */}
                <div>
                    <Dropdown title={"Men"} path={"men"}>
                        <div className="flex flex-col text-left">
                            <Link to="">Winter Sale</Link>
                            <Link to="">Shop up to 50% off</Link>
                            <Link to="">Men Section</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">New & Featured</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">New for men</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">Shop Icon</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">Jordan</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                    </Dropdown>
                </div>
                {/* Women */}
                <div>
                    <Dropdown title={"Women"} path={"women"}>
                        <div className="flex flex-col text-left">
                            <Link to="">Winter Sale</Link>
                            <Link to="">Shop up to 50% off</Link>
                            <Link to="">Women Section</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">New & Featured</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">New for women</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                        <div className="flex flex-col">
                            <Link to="">Shop Icon</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">Jordan</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                    </Dropdown>
                </div>
                {/* Kids */}
                <div className="lg:block hidden">
                    <Dropdown title={"Kids"} path={"kids"}>
                        <div className="flex flex-col text-left">
                            <Link to="">Winter Sale</Link>
                            <Link to="">Shop up to 50% off</Link>
                            <Link to="">Kids Section</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">New & Featured</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">New for Kids</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">Shop Icon</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">Jordan</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                    </Dropdown>
                </div>
                {/* Accessories */}
                <div className="tablet_lg:block hidden">
                    <Dropdown title={"Admin"} path={"admin"}>
                        <div className="flex flex-col text-left">
                            <Link to="">Winter Sale</Link>
                            <Link to="">Shop up to 50% off</Link>
                            <Link to="">Accessories Section</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">New & Featured</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">New Accessories</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">Shop Icon</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="">Jordan</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                            <Link to="">Link</Link>
                        </div>
                    </Dropdown>
                </div>
            </ul>
        </div>
    );
};

export default DropdownLinks;

// import React from "react";
// import { Link } from "react-router-dom";
// import "../Nav.css";
// import "../../../assests/styles/global.css";
// import Dropdown from "./Dropdown";

// const DropdownLinks = () => {
//     return (
//         <div className="Poppins items-center">
//             <ul className="w-[100% - 680px] max-w-[1255px] h-[60px] flex justify-center items-center mx-auto overflow-hidden Poppins">
//                 {/* New and Featured */}
//                 <div>
//                     <Dropdown title={"New & Featured"} path={"/new"}>
//                         <div className="flex flex-col text-left">
//                             <Link to="" className="font-bold">
//                                 Winter Sale
//                             </Link>
//                             <Link to="">Shop up to 50% off</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">New & Featured</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">All the Shoes</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">All the Clothes</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">Jordan</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                     </Dropdown>
//                 </div>
//                 {/* Men */}
//                 <div>
//                     <Dropdown title={"Men"} path={"/men"}>
//                         <div className="flex flex-col text-left">
//                             <Link to="">Winter Sale</Link>
//                             <Link to="">Shop up to 50% off</Link>
//                             <Link to="">Men Section</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">New & Featured</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">New for men</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">Shop Icon</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">Jordan</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                     </Dropdown>
//                 </div>
//                 {/* Women */}
//                 <div>
//                     <Dropdown title={"Women"} path={"/women"}>
//                         <div className="flex flex-col text-left">
//                             <Link to="">Winter Sale</Link>
//                             <Link to="">Shop up to 50% off</Link>
//                             <Link to="">Women Section</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">New & Featured</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">New for women</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col">
//                             <Link to="">Shop Icon</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">Jordan</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                     </Dropdown>
//                 </div>
//                 {/* Kids */}
//                 <div className="lg:block hidden">
//                     <Dropdown title={"Kids"} path={"/kids"}>
//                         <div className="flex flex-col text-left">
//                             <Link to="">Winter Sale</Link>
//                             <Link to="">Shop up to 50% off</Link>
//                             <Link to="">Kids Section</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">New & Featured</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">New for Kids</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">Shop Icon</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">Jordan</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                     </Dropdown>
//                 </div>
//                 {/* Accessories */}
//                 <div className="tablet_lg:block hidden">
//                     <Dropdown title={"Accessories"} path={"/accessories"}>
//                         <div className="flex flex-col text-left">
//                             <Link to="">Winter Sale</Link>
//                             <Link to="">Shop up to 50% off</Link>
//                             <Link to="">Accessories Section</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">New & Featured</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">New Accessories</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">Shop Icon</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">Jordan</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                     </Dropdown>
//                 </div>
//                 {/* Sales */}
//                 <div className="xl:block hidden">
//                     <Dropdown title={"Sale"} path={"/sale"}>
//                         <div className="flex flex-col text-left">
//                             <Link to="">Winter Sale</Link>
//                             <Link to="">Shop up to 50% off</Link>
//                             <Link to="">Sale Section</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">New & Featured</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">New for men</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">Shop Icon</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                         <div className="flex flex-col text-left">
//                             <Link to="">Jordan</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                             <Link to="">Link</Link>
//                         </div>
//                     </Dropdown>
//                 </div>
//             </ul>
//         </div>
//     );
// };

// export default DropdownLinks;
