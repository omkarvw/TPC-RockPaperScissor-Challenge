import React from 'react'

function RuleModal(props) {
    if (!props.visible) return null;
    else
        return (
            <div>
                <div className="modal">
                    <div className="modalContent">
                        <div className="ruleHead">
                            <div className='ruletop' > RULES </div>
                            
                            <img className='closeImg' src={require('./Images/icon-close.svg').default} onClick ={props.onClose} alt="" />
                        </div>
                        <img className='ruleImg' src={require('./Images/image-rules.svg').default} alt="" />
                    </div>
                </div>
            </div>
        )
}

export default RuleModal