import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";
const CommentItem = ({
  comment: { _id, text, name, avatar, user, date },
  postId,
  auth,
  deleteComment,
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div className="">
        <Link to={`/profile/${user}`}>
          <img src={avatar} alt="Profile" className="round-img" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div className="">
        <p className="my-1">{text}</p>
        <p className="post-date">
          Comment posted on <Moment format="DD/MM/YYYY">{date}</Moment>
        </p>
        {!auth.loading && user === auth.user._id && (
          <button
          type='button'
            className="btn btn-danger "
            onClick={(e) => deleteComment(postId, _id)}
          >  <i className="fas fa-times"></i></button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  postId: PropTypes.number.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  deleteComment: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
