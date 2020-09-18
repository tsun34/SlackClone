import React from 'react';
import MemberInfo from './memberinfo';

class InfoPanel extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getSubscriptions(this.props.convoId);
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.conversationId !== this.props.match.params.conversationId){
            this.props.getSubscriptions(this.props.convoId);
        }
    }

    render(){
        if (!this.props.infoPanel) {
            return null
        }else{
            const members = this.props.subscriptions.map((sub) => {
                return this.props.allUsers[sub.user_id]
            });
            return (
                <div className='info-panel'>
                    <button className='close-button' onClick={this.props.closeInfoPanel}><i className='fas fa-times'></i> </button>
                    <div className='info-panel-header info-panel-subsection'>
                        <h3 className='info-panel-title'>Details</h3>
                    </div>
                    <div className='info-panel-subsection '>
                        <h3 className='info-panel-title'>About</h3>
                        <div className='info-panel-about'>
                            <span>Topic: </span>
                            <p>#{this.props.convoName}</p>
                            <span>Description: </span>
                            <p>{this.props.convoDescription}</p>
                        </div>
                    </div>
                    <ul className='info-panel-subsection'>
                        <h3 className='info-panel-title'>Members</h3>
                        {members.map(member => <MemberInfo key={member.id} member={member}/>)}
                    </ul>
                </div>
            )
        }


    }

}

export default InfoPanel;