import React from 'react';
import NewConvoFormContainer from '../SlantChat/Convo/convoform_container';
import NewDMFormContainer from '../SlantChat/Convo/dmform_container';
import AddMemberFormContainer from '../SlantChat/Member/addmember_form_container';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { modal } = this.props.modal ?? {};
        if (!modal) {
            return null;
        }
        let modalContent, width;
        switch (modal) {
            case 'new_channel':
                modalContent = <NewConvoFormContainer/>;
                width = "500px";
                break;
            case 'new_dm':
                modalContent = <NewDMFormContainer />;
                width = "500px";
                break;
            case 'add_member':
                modalContent = <AddMemberFormContainer />;
                width = "500px";
                break;
            default:
                modalContent = null;
                break;
        }
        return (
            <div className="modal-open-background">
                <div className="modal-container" style={{ width: width }}>
                    <button className="close-button" onClick={this.props.closeModal}>&times;</button>
                    {modalContent}
                </div>
            </div>
        );
    }
}

export default Modal;