import { connect } from "react-redux";
import NewDMForm from "./dmform";

const mapStateToProps = () => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDMForm);