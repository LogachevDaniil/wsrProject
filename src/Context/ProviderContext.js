import React, { useState, createContext } from 'react';

export const ProviderContext = React.createContext({});

export const ProviderContextWrapper = ({children}) => {
    const initUserValues = {
        _fullName:"",
        _login:"",
        _wallet:"",
        _balance:"",
        _role:""
    }

    const initSellerValues = {
        _sity:"",
        _shop:""
    }

    // console.log(initUserValues);

    const [userData, setUserData] = useState(initUserValues);
    const [sellerData, setSellerData] = useState(initSellerValues);

    const Authtorization = (_login, _fullName, _wallet, _balance, _role) => {
        setUserData({
            _login,
            _fullName,
            _wallet,
            _balance,
            _role
        })
    }
    
    const SellersDetails = (_sity, _shop) => {
        setSellerData({
            _sity,
            _shop
        })
    }
    
    // const 
    
    
    const providerValue = {
        Authtorization,
        SellersDetails,
        userData,
        sellerData,
    };


    return (
        <ProviderContext.Provider value={providerValue}>
            {children}
        </ProviderContext.Provider>
    )
}


    // address admin = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
    // address buyer = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8;
    // address seller = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC;
    // address bank = 0x90F79bf6EB2c4f870365E785982E1f101E93b906;
    // address provider = 0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65;
    // address shop1 = 0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc;
    // address shop2 = 0x976EA74026E726554dB657fA54763abd0C3a0aa9;
    // address shop3 = 0x14dC79964da2C08b23698B3D3cc7Ca32193d9955;
    // address shop4 = 0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f;
    // address shop5 = 0xa0Ee7A142d267C1f36714E4a8F75612F20a79720;
    // address shop6 = 0xBcd4042DE499D14e55001CcbB24a551F3b954096;
    // address shop7 = 0x71bE63f3384f5fb98995898A86B02Fb2426c5788;
    // address shop8 = 0xFABB0ac9d68B0B445fB7357272Ff202C5651694a;
    // address shop9 = 0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec;


    //0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199 для всего