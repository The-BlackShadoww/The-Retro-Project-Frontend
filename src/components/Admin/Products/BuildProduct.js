import React, { useState } from "react";
import { Input } from "../../UI/Form/Input";
import { SubmitButton } from "../../UI/Form/Button";
import { usePostNewProductMutation } from "../../../services/ReduxRtkQuery/adminSlices/buildProductSlice";

const BuildProduct = () => {
    const [inputs, setInputs] = useState({
        id: "",
        name: "",
        category: "",
        price: "",
        description: "",
        gender: "",
        kids: "",
        arrival: "",
        for_age: "",
        main_img: "",
        img_2: "",
        img_3: "",
        img_4: "",
        img_5: "",
        // image: {
        //     main_img: "/Retro/women_c_new_main_jnezpp",
        //     img_2: "/Retro/women_c_new_3_crqeoo",
        //     img_3: "/Retro/women_c_new_2_jhjhpx",
        //     img_4: "/Retro/women_c_new_5_fcqwph",
        //     img_5: "/Retro/women_c_new_4_jm352m",
        // },
        colors: {},
    });

    const {
        id,
        name,
        category,
        price,
        description,
        gender,
        kids,
        arrival,
        for_age,
        main_img,
        img_2,
        img_3,
        img_4,
        img_5,
        colors,
    } = inputs;

    const handleProduct = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const [postNewProduct] = usePostNewProductMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await postNewProduct(inputs);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold">Build a Product</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-2">
                    <Input
                        type={"text"}
                        id={"p_name"}
                        name={"name"}
                        label={"Product Name"}
                        onChange={handleProduct}
                        value={name}
                        disabled={false}
                    />
                    <select
                        className="relative w-full rounded-lg border mt-8 border-black px-4 py-3"
                        onChange={handleProduct}
                    >
                        <option value="Category" className="hidden">
                            Category
                        </option>
                        <option value="shoes">Shoes</option>
                        <option value="cloths">Cloths</option>
                        <option value="accessories">Accessories</option>
                    </select>
                    {/* <Input
                        type={"text"}
                        id={"p_category"}
                        name={"category"}
                        label={"Category"}
                        onChange={handleProduct}
                        value={category}
                        disabled={false}
                    /> */}
                    <Input
                        type={"number"}
                        id={"p_price"}
                        name={"price"}
                        label={"Price"}
                        onChange={handleProduct}
                        value={price}
                        disabled={false}
                    />
                    <Input
                        type={"text"}
                        id={"p_description"}
                        name={"description"}
                        label={"Description"}
                        onChange={handleProduct}
                        value={description}
                        disabled={false}
                    />
                    <Input
                        type={"text"}
                        id={"p_gender"}
                        name={"gender"}
                        label={"Gender"}
                        onChange={handleProduct}
                        value={gender}
                        disabled={false}
                    />
                    <Input
                        type={"text"}
                        id={"p_kids"}
                        name={"kids"}
                        label={"Kids"}
                        onChange={handleProduct}
                        value={kids}
                        disabled={false}
                    />{" "}
                    <Input
                        type={"date"}
                        id={"p_arrival"}
                        name={"arrival"}
                        label={"Arrival"}
                        onChange={handleProduct}
                        value={arrival}
                        disabled={false}
                    />
                    <Input
                        type={"text"}
                        id={"p_for_age"}
                        name={"for_age"}
                        label={"For age"}
                        onChange={handleProduct}
                        value={for_age}
                        disabled={false}
                    />
                </div>
                {/* Images */}
                <div className="grid grid-cols-5 gap-2">
                    <Input
                        type={"text"}
                        id={"p_main_img"}
                        name={"main_img"}
                        label={"Image Main"}
                        onChange={handleProduct}
                        value={main_img}
                        disabled={false}
                    />
                    <Input
                        type={"text"}
                        id={"p_img_2"}
                        name={"img_2"}
                        label={"Image 2"}
                        onChange={handleProduct}
                        value={img_2}
                        disabled={false}
                    />
                    <Input
                        type={"text"}
                        id={"p_img_3"}
                        name={"img_3"}
                        label={"Image 3"}
                        onChange={handleProduct}
                        value={img_3}
                        disabled={false}
                    />
                    <Input
                        type={"text"}
                        id={"p_img_4"}
                        name={"img_4"}
                        label={"Image 4"}
                        onChange={handleProduct}
                        value={img_4}
                        disabled={false}
                    />
                    <Input
                        type={"text"}
                        id={"p_img_5"}
                        name={"img_5"}
                        label={"Image 5"}
                        onChange={handleProduct}
                        value={img_5}
                        disabled={false}
                    />
                </div>
                <SubmitButton title={"Build"} disabled={false} />
            </form>
        </div>
    );
};

export default BuildProduct;
