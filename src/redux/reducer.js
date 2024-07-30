import {combineReducers} from "redux";


const phoneInitialState = {
    phoneItems : []
}

const laptopInitialState = {
    laptopItems : []
}

const fragrancesInitialState = {
    fragrancesItems : []
}
const skincareInitialState = {
    skincareItems : []
}
const groceriesInitialState = {
    groceriesItems : []
}
const homedecorationInitialState = {
    homedecorationItems : []
}
const furnitureInitialState = {
    furnitureItems : []
}
const topsInitialState = {
    topItems : []
}
const WomendressInitialState = {
    womendressItems : []
}
const WomenshoesInitialState = {
    womenshoesItems : []
}
const menshirtsInitialState = {
    menshirtsItems : []
}
const menshoesInitialState = {
    menshoesItems : []
}
const menswatchInitialState = {
    menswatchItems : []
}
const womenswatchInitialState = {
    womenswatchItems : []
}
const womensbagsInitialState = {
    womensbagsItems : []
}
const womensjewelleryInitialState = {
    womensjewelleryItems : []
}
const sunglassesInitialState = {
    sunglassesItems : []
}
const automotiveInitialState = {
    automotiveItems : []
}
const motorcycleInitialState = {
    motorcycleItems : []
}
const signupInitialState = {
    isAuthenticate : false,
    user:null,
    signupData:null
}
const addtocartInitialState = {
    addtocartItems : []
}






const smartPnReducer = (state = phoneInitialState,action) =>
{
    switch(action.type)
    {
        case 'SET_PHONE' :
            return {
                ...state,   
                phoneItems : action.payload
            }
            default:
                return state
    }
}

const laptopReducer = (state = laptopInitialState,action) =>
{
    switch(action.type)
    {
        case 'SET_LAPTOP':
            return{
                ...state,
                laptopItems : action.payload
            }
            default:
                return state
    }
}

const fragrancesReducer = (state = fragrancesInitialState,action) => 
{
    switch(action.type)
    {
        case 'SET_FRAGRANCES':
            return{
                ...state,
                fragrancesItems : action.payload
            }
            default:
                return state
    }
}
const skincareReducer = (state = skincareInitialState,action) => 
{
    switch(action.type)
    {
        case 'SET_SKINCARE':
            return{
                ...state,
                skincareItems : action.payload
            }
            default:
                return state
    }
}
const groceriesReducer = (state = groceriesInitialState,action) => 
{
    switch(action.type)
    {
        case 'SET_GROCERIES':
            return{
                ...state,
                groceriesItems : action.payload
            }
            default:
                return state
    }
}
const homedecorationReducer = (state = homedecorationInitialState,action) => 
{
    switch(action.type)
    {
        case 'SET_HOMEDECORATION':
            return{
                ...state,
                homedecorationItems : action.payload
            }
            default:
                return state
    }
}
const furnitureReducer = (state = furnitureInitialState,action) =>
{
    switch(action.type){
        case 'SET_FURNITURE':
            return{
                ...state,
                furnitureItems:action.payload
            }
            default:
            return state
    }
}
const topsReducer = (state = topsInitialState,action) =>
{
    switch(action.type){
        case 'SET_TOPS':
            return{
                ...state,
                topItems:action.payload
            }
            default:
            return state
    }
}
const womendressReducer = (state = WomendressInitialState,action) =>
{
    switch(action.type){
        case 'SET_WOMENDRESS':
            return{
                ...state,
                womendressItems:action.payload
            }
            default:
            return state
    }
}
const womenshoesReducer = (state = WomenshoesInitialState,action) =>
{
    switch(action.type){
        case 'SET_WOMENSHOES':
            return{
                ...state,
                womenshoesItems:action.payload
            }
            default:
            return state
    }
}
const menshirtsReducer = (state = menshirtsInitialState,action) =>
{
    switch(action.type){
        case 'SET_MENSHIRTS':
            return{
                ...state,
                menshirtsItems:action.payload
            }
            default:
            return state
    }
}
const menshoesReducer = (state = menshoesInitialState,action) =>
{
    switch(action.type){
        case 'SET_MENSHOES':
            return{
                ...state,
                menshoesItems:action.payload
            }
            default:
            return state
    }
}
const menswatchReducer = (state = menswatchInitialState,action) =>
{
    switch(action.type){
        case 'SET_MENSWATCH':
            return{
                ...state,
                menswatchItems:action.payload
            }
            default:
            return state
    }
}
const womenswatchReducer = (state = womenswatchInitialState,action) =>
{
    switch(action.type){
        case 'SET_WOMENSWATCH':
            return{
                ...state,
                womenswatchItems:action.payload
            }
            default:
            return state
    }
}
const womensbagsReducer = (state = womensbagsInitialState,action) =>
{
    switch(action.type){
        case 'SET_WOMENSBAGS':
            return{
                ...state,
                womensbagsItems:action.payload
            }
            default:
            return state
    }
}
const womensjewelleryReducer = (state = womensjewelleryInitialState,action) =>
{
    switch(action.type){
        case 'SET_WOMENSJEWELLERY':
            return{
                ...state,
                womensjewelleryItems:action.payload
            }
            default:
            return state
    }
}
const sunglassesReducer = (state = sunglassesInitialState,action) =>
{
    switch(action.type){
        case 'SET_SUNGLASSES':
            return{
                ...state,
                sunglassesItems:action.payload
            }
            default:
            return state
    }
}
const automotiveReducer = (state = automotiveInitialState,action) =>
{
    switch(action.type){
        case 'SET_AUTOMOTIVE':
            return{
                ...state,
                automotiveItems:action.payload
            }
            default:
            return state
    }
}
const motorcycleReducer = (state = motorcycleInitialState,action) =>
{
    switch(action.type){
        case 'SET_MOTORCYCLE':
            return{
                ...state,
                motorcycleItems:action.payload
            }
            default:
            return state
    }
}

const signupReducer = (state = signupInitialState,action) => 
{
    switch(action.type){
        case 'SET_SIGNUP':
            return{
                ...state,
                signupData:action.payload
            }
        case 'SET_SIGNIN':
            if(state.signupData && state.signupData.email === action.payload.email &&
               state.signupData.password === action.payload.password )
               {
                return{
                    ...state,
                    isAuthenticate:true,
                    user:action.payload
                }
               }
               else{
                return state;
               }

            default:
                return state
    }
}

const addtocartReducer = (state = addtocartInitialState,action) => {
    switch(action.type){
        case 'SET_ADDTOCART':
             return{
                ...state,addtocartItems:[...state.addtocartItems,action.payload]
             }

             default:
                return state
            
    }
}



const rootReducer = combineReducers({
    phonee : smartPnReducer,
    laptoped: laptopReducer,
    frangrancesed:fragrancesReducer,
    skincared:skincareReducer,
    groceriesed:groceriesReducer,
    homedecorationed:homedecorationReducer,
    furnitured:furnitureReducer,
    toped:topsReducer,
    womendreesed:womendressReducer,
    womenshoesed:womenshoesReducer,
    menshirtsed:menshirtsReducer,
    menshoesed:menshoesReducer,
    menswatched:menswatchReducer,
    womenswatched:womenswatchReducer,
    womenbaged:womensbagsReducer,
    womenjewellered:womensjewelleryReducer,
    sunglassesed:sunglassesReducer,
    automotived:automotiveReducer,
    motorcycled:motorcycleReducer,
    signuped:signupReducer,
    addtocartt:addtocartReducer,

})

export default rootReducer;