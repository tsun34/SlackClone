import { OPEN_INFOPANEL, CLOSE_INFOPANEL } from "../actions/infopanel_actions";

const InfopanelReducer = (state = null, action) => {
    switch (action.type) {
        case OPEN_INFOPANEL:
            return true;
        case CLOSE_INFOPANEL:
            return null
        default: 
            return state;
    }
}

export default InfopanelReducer;