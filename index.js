import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

const App = () => {
    return(
        
        <div>
            <ApprovalCard>
                <CommentDetails
                    name = "Sam"
                    time = "Today at 6:00 PM"
                    comment = "Nice Blog Post!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetails
                    name = "Alex"
                    time = "Yesterday at 7:00 PM"
                    comment = "Fantastic Content!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetails
                    name = "Mike"
                    time = "Today at 7:00 PM"
                    comment = "So Inspirational!"
                />
            </ApprovalCard>

        </div>    
    )
}

const CommentDetails = (props) => {
    return(
        <div className = "ui comments">
            <div className = "comment">
                <a href="/" className = "avatar">
                    <img alt = "avatar" src={faker.image.avatar()}></img>
                </a>
                <div className = "content">
                    <a href="/" className = "author">
                        {props.name}
                    </a>
                    <div className = "metadata">
                        <span className="date">{props.time}</span>
                    </div>
                    <div className = 'text'>
                        {props.comment}
                    </div> 
                 </div>
            </div>
        </div>
    )
}

const ApprovalCard = (props) => {
    return (
        <div className = "ui card">
            <div className = "content">
                {props.children}
            </div>
            <div class="extra content">
                <div class="ui two buttons">
                    <div class="ui basic green button">Approve</div>
                    <div class="ui basic red button">Decline</div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)