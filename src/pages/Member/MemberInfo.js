import React from "react";
import { Button } from "../../components/UI/Buttons/Button";

const MemberInfo = () => {
    return (
        <div className="w-full p-4 tablet:px-12">
            <div className="w-full p-5 flex justify-center bg-gray-100">
                <h1 className="text-4xl font-bold">Retro Membership</h1>
            </div>
            <div className="max-w-[50vw] mx-auto p-5">
                <p className="text-lg font-semibold mb-4">
                    Describe The membership Program
                </p>
                <p className="text-justify mb-10">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Labore exercitationem commodi neque, architecto saepe quas
                    maiores, nemo iste id unde aut non, esse cumque mollitia?
                    Ullam esse fugiat nemo unde debitis. Saepe necessitatibus
                    incidunt cumque sed corporis quibusdam eos labore. Qui,
                    velit animi. A beatae eaque perferendis tempore, facilis
                    temporibus officia quam eveniet odio maiores quis asperiores
                    iusto explicabo debitis, quae placeat iure autem ipsum
                    atque. Consequuntur earum saepe, fuga qui ullam excepturi
                    molestias quas voluptatibus illum nobis voluptates nesciunt,
                    asperiores eligendi incidunt alias numquam? Voluptas rem
                    nobis quia optio exercitationem doloribus ipsa odit laborum
                    officia quisquam consectetur, consequatur veniam possimus
                    dolorum asperiores non? Similique dolor sunt nemo nulla
                    velit, ipsa ab consequuntur atque? Deserunt, consectetur?
                    Nisi repellendus dolore nam at exercitationem fugiat
                    doloribus eveniet eius nemo consectetur voluptate molestias
                    recusandae, ut ab dolores ullam fugit voluptatem! Qui earum,
                    eveniet ullam saepe quaerat nemo id autem minus fugiat
                    similique consectetur vel laborum quibusdam facere. Sit
                    rerum ut accusamus quae voluptatem ducimus mollitia ipsam
                    deserunt illum placeat, nam, repellat tempore sed maxime
                    necessitatibus autem distinctio. Ducimus explicabo
                    similique, est ab velit, earum sit quia corporis corrupti
                    voluptates facilis? Laudantium veniam voluptatibus quia,
                    placeat, rerum aut, amet tempore id ipsum natus corrupti.
                </p>
                <Button title={"Join"} path={"/auth/resignation"} />
            </div>
        </div>
    );
};

export default MemberInfo;
