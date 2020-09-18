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
                <div>
                    <div>
                        <h3>Details</h3>
                        <button onClick={this.props.closeInfoPanel}>x </button>
                    </div>
                    <div>
                        <h3>About</h3>
                        <span>{this.props.convoName}</span>
                        <span>{this.props.convoDescription}</span>
                    </div>
                    <ul>
                        <h3>Members</h3>
                        {members.map(member => <MemberInfo key={member.id} member={member}/>)}
                    </ul>
                </div>
            )
        }


    }

}

export default InfoPanel;