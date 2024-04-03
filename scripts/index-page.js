import BandSiteApi from './band-site-api.js';

const apiKey = 'dde133e3-5a0a-4210-8cf9-0618e78dea51';
const bandSiteApi = new BandSiteApi(apiKey);

bandSiteApi.getComments()
    .then(comments => {
        displayComments(comments);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

const newComment = {
    name: "Your Name",
    timestamp: new Date().toLocaleDateString(),
    comment: "Your comment goes here"
};

bandSiteApi.postComment(newComment)
    .then(response => {
        console.log('Comment posted successfully:', response);
    })
    .catch(error => {
        console.error('Error posting comment:', error.message);
    });

const displayComments = (comments) => {
    const commentContainer = document.getElementById("commentContainer");
    commentContainer.innerHTML = "";

    comments.forEach(comment => {
        const commentsParent = document.createElement("div");
        commentsParent.className = 'comment-section__com-display';

        const commentImg = document.createElement("div");
        commentImg.className = 'comment-section__com-avatar';

        const commentlayout = document.createElement("div");
        commentlayout.className = 'comment-section__com-layout';

        const commentUser = document.createElement("h3");
        commentUser.className = 'comment-section__com-title';
        commentUser.innerText = comment.name;

        const commentBody = document.createElement("p");
        commentBody.className = 'comment-section__com-para';
        commentBody.innerText = comment.comment;

        const commentDate = document.createElement("p");
        commentDate.className = 'comment-section__com-time';
        commentDate.innerText = comment.timestamp;

        commentsParent.appendChild(commentImg);
        commentsParent.appendChild(commentlayout);

        commentlayout.appendChild(commentUser);
        commentlayout.appendChild(commentBody);
        commentlayout.appendChild(commentDate);

        commentContainer.appendChild(commentsParent);
    });
}

function addItem(e) {
    e.preventDefault();

    let name = document.getElementById('nameId').value;
    let comment = document.getElementById('commentId').value;
    let timestamp = new Date().toLocaleDateString();

    let newComment = {
        name: name,
        timestamp: timestamp,
        comment: comment
    };

    commentArr.push(newComment);
    displayComments();

    document.getElementById('nameId').value = "";
    document.getElementById('commentId').value = "";
}

document.getElementById("addForm").addEventListener("submit", addItem);

