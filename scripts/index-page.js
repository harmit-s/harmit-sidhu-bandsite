let commentArr = [
    { name: "Victor Pinto", timestamp: "11/02/2023", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains." },
    { name: "Christina Cabrera", timestamp: "10/28/2023", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day." },
    { name: "Isaac Tadesse", timestamp: "10/20/2023", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough." }
];

const displayComments = () => {
    const commentContainer = document.getElementById("commentContainer");
    commentContainer.innerHTML = ""; 

    commentArr.forEach(comment => {
        const commentsParent = document.createElement("div");
        commentsParent.className = 'comment-section__com-display';

        const commentUser = document.createElement("h3");
        commentUser.className = 'comment-section__com-title';
        commentUser.innerText = comment.name;

        const commentBody = document.createElement("p");
        commentBody.className = 'comment-section__com-para';
        commentBody.innerText = comment.comment;

        const commentDate = document.createElement("p");
        commentDate.className = 'comment-section__com-time';
        commentDate.innerText = comment.timestamp;

        commentsParent.appendChild(commentUser);
        commentsParent.appendChild(commentBody);
        commentsParent.appendChild(commentDate);

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

displayComments();