import {primaryColors, backgroundColors} from './Colors'


const themeReducer = (state, action) => {
    // for primary colors
    const primary = primaryColors.filter(color =>  action.type === color.className)[0]?.className

    if(primary) {
        return {...state, primary}
    }


    // for background colors
    const background  = backgroundColors.filter(color =>  action.type === color.className)[0]?.className
    
    if(background) {
        return {...state, background}
    }

    return state
}

export default themeReducer