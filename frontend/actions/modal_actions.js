export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL_WITH_PROPS = 'OPEN_MODAL_WITH_PROPS';

export const openModal = modal => {
    return {
        modal,
        type: OPEN_MODAL,
    };
};

export const openModalWithProps = (modal, modalProps) => {
    return {
        modal,
        modalProps,
        type: OPEN_MODAL_WITH_PROPS
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
    };
};