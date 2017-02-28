/**
 * Created by Messi on 2017/2/24.
 */
var CommentList = React.createClass({
   render:function () {
       var commentNodes = this.props.data.map(function (comment) {
           return (
               <Comment text={comment.text} author={comment.author} key={comment.id}>

               </Comment>
           );
       });
       return(
           <div className="commentList">
               {commentNodes}
           </div>
       )
   }
});