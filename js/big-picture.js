const bigPict = document.querySelector('.big-picture');
const pictureComments = bigPict.querySelector('.social__comments');
const commentChild = pictureComments.children[0];
const closeButton = bigPict.querySelector('#picture-cancel');

const getCommentItem = (comment) => {
  const newComment = commentChild.cloneNode(true);
  const newCommentImg = newComment.querySelector('.social__picture');

  newCommentImg.src = comment.avatar;
  newCommentImg.alt = comment.name;

  newComment.querySelector('.social__text').textContent = comment.message;

  return newComment;
};

const addPictureEvent = (picture, data) => {
  picture.addEventListener('click', () => {
    bigPict.classList.remove('hidden');

    bigPict.querySelector('.big-picture__img').querySelector('img').src = data.url;
    bigPict.querySelector('.likes-count').textContent = data.likes;
    bigPict.querySelector('.comments-count').textContent = data.comments.length;
    bigPict.querySelector('.social__caption').textContent = data.description;

    pictureComments.innerHTML = '';
    data.comments.forEach((comment) => {
      pictureComments.appendChild(getCommentItem(comment));
    });

    bigPict.querySelector('.social__comment-count').classList.add('hidden');
    bigPict.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');
  });
};

const onEscapeKeyDown = (evt) => {
  if(evt.key === 'Escape'){
    bigPict.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }

  document.removeEventListener('keydown', onEscapeKeyDown);
};

closeButton.addEventListener('click', () => {
  bigPict.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');

  document.removeEventListener('keydown', onEscapeKeyDown);
});

document.addEventListener('keydown', onEscapeKeyDown);

export {addPictureEvent};
