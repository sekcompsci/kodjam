export const SET_TAB = 'SET_TAB';
export const SET_FOOTER_TYPE =  'SET_FOOTER_TYPE';

export function selectTab(val) {
    return {type: SET_TAB, val};
}

export function selectFooterType(val) {
    return {type: SET_FOOTER_TYPE, val};
}