export const OPEN_INFOPANEL = 'OPEN_INFOPANEL';
export const CLOSE_INFOPANEL = 'CLOSE_INFOPANEL';

export const openInfoPanel = () => {
    return {
        type: OPEN_INFOPANEL,
    };
};


export const closeInfoPanel = () => {
    return {
        type: CLOSE_INFOPANEL,
    };
};