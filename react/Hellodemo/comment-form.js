/**
 * Created by Messi on 2017/2/24.
 */
var CommentForm = React.createClass({
    getInitialState:function(){
      return {author:'',text:''}
    },
      handleAuthorChange:function (e) {
          this.setState({author:e.target.value});
    },
      handleTextChange:function (e) {
        this.setState({text:e.target.value});
    },
    handleSubmit:function (e) {
        e.preventDefault();
        var author = this.state.author;
        var text = this.state.text;
        if(!text||!author){
            return;
        }

        //提交服务器
        this.props.onCommentSubmit({author:author,text:text});
        //清空界面输入框
        this.setState({author:"",text:""});
    },
    clearHandle:function (e) {
      this.props.onClearHandle();
    },
    render:function () {
        return(
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name"
                       value={this.state.author}
                       onChange={this.handleAuthorChange}/>
                <input type="text" placeholder="Say something..."
                       value={this.state.text}
                       onChange={this.handleTextChange}/>
                <input type="submit" value="Post" />
                <input onClick={this.clearHandle} type="button" value="reset" />
            </form>
    )
    }
});