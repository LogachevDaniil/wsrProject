import React from "react";
import { useContext } from "react";
import { ProviderContext } from "../Context/ProviderContext";
import AddAdmin from "../Components/AddAdmin";
import RegShop from "../Components/RegShop";
import DeleteShop from "../Components/DeleteShop";

const HelloPage = () => {

    const { userData, sellerData } = useContext(ProviderContext);

    const roles = {
        1: "Buyer",
        2: "Seller",
        3: "Provider",
        4: "Bank",
        5: "popusk",
        6: "Shop"
    }
    console.log(userData);
    console.log(sellerData);
    return (
        <div>

            {
                (userData._role == 1) ? (
                    <div>
                        <h1>Привет, {userData._fullName}</h1>
                        <p>
                            Ваш логин: {userData._login}
                            <br />
                            Ваш адресс: {userData._wallet}
                            <br />
                            Ваш баланс: {userData._balance / 10 ** 18} Ether
                            {/* <AddSeller /> */}
                            {/* <BuyerRequestRaise/> */}
                        </p>
                    </div>
                ) : (userData._role == 2) ? (
                    <div>
                        <h1>Привет, {userData._fullName}</h1>
                        <p>
                            Ваш логин: {userData._login}
                            <br />
                            Ваш адресс: {userData._wallet}
                            <br />
                            Ваш роль: {roles[userData._role]}
                            <br />
                            Ваш баланс: {userData._balance / 10 ** 18} Ether
                            <br />
                            Ваш адресс кошелька: {userData._wallet}
                            <br />
                            Ваш город: {sellerData._sity}
                            <br />
                            Ваш адресс кошелька магазина: {sellerData._shop}
                            <br />
                            <br />
                            Ваш билайн!
                            Живи на яркой стороне!
                            {/* <AddSeller /> */}
                        </p>
                    </div>)

                    : (userData._role == 5) ? (
                        <div>
                            <h1>Привет, {userData._fullName}</h1>
                            <p>
                                Ваш логин: {userData._login}
                                <br />
                                Ваш адресс: {userData._wallet}
                                <br />
                                Ваша роль: {roles[userData._role]}
                                <br />
                                Вош баланс: {userData._balance / 10 ** 18} Ether
                                <br />
                                <br />
                                <AddAdmin />
                                <RegShop />
                                <DeleteShop />
                                {/* <AddSeller /> */}
                            </p>
                        </div>)
                        : (userData._role == 6) ? (
                            <div>
                                <h1>Привет магазин, {userData._fullName}</h1>
                                <p>
                                    Ваш логин: {userData._login}
                                    <br />
                                    Ваш адресс: {userData._wallet}
                                    <br />
                                    Ваш роль: {roles[userData._role]}
                                    <br />
                                    Ваш баланс: {userData._balance / 10 ** 18} Ether
                                    <br />
                                    Ваш билайн!
                                    Живи на яркой стороне!
                                    {/* <AddSeller /> */}
                                </p>
                            </div>)

                            : (
                                <div>
                                    <h1>Войдите в аккаунт</h1>
                                </div>
                            )
            }

        </div>
    )
}
export default HelloPage;

// {
//     (userData._login && userData._role == 1) ? (
//         <div>
//             <h1>Привет, {userData._fullName}</h1>
//             <p>
//                 Ваш login: {userData._login}
//                 <br />
//                 Ваш address: {userData._address}
//                 <br />
//                 Role: {roles[userData._role]}
//                 <br />
//                 balance: {userData._balance / 10 ** 18} Ether
//             </p>
//         </div>
//     ) : (userData._login && userData._role == 2) ? (
//         <div>
//             <h1>Привет, {userData._fullName}</h1>
//             <p>
//                 Ваш login: {userData._login}
//                 <br />
//                 Ваш address: {userData._address}
//                 <br />
//                 Role: {roles[userData._role]}
//                 <br />
//                 balance: {userData._balance / 10 ** 18} Ether
//             </p>
//         </div>
//     (
//             <h1>Войдите в аккаунт</h1>
//         )
// }