import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post, title, body, user, comments }) => {
  // Support both post object and individual props for flexibility
  const postTitle = post ? post.title : title;
  const postBody = post ? post.body : body;
  const postUser = post ? post.user : user;
  const postComments = post ? post.comments : comments;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{postTitle}</h3>
        <p>
          {' Posted by  '}
          {postUser ? <UserInfo user={postUser} /> : 'Unknown User'}
        </p>
      </div>
      <p className="PostInfo__body">{postBody}</p>
      <hr />

      {postComments && postComments.length > 0 ? (
        <CommentList comments={postComments} />
      ) : (
        <b data-cy="NoCommentsMessage" />
      )}
    </div>
  );
};
