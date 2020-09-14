import { connect } from "react-redux";
import NewConvoForm from "./convoform";

const mapStateToProps = () => {
    return {
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        closeModal: () => dispatch(closeModal()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewConvoForm);