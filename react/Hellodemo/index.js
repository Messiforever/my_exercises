/**
 * Created by Messi on 2017/2/24.
 */
(function () {
    // var data = [
    //     {id: 1, author: "Pete Hunt", text: "This is one comment"},
    //     {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
    // ];
    var CommentBox = React.createClass({
        loadCommentsFromServer:function () {
            $.ajax({
                url:this.props.url,
                dataType:"json",
                cache:false,
                success:function (data) {
                    this.setState({data:data});
                }.bind(this),
                error:function (xhr,status,err) {
                    console.error(this.props.url,status,err.toString());
                }.bind(this)

                });
        },
        handleCommentSubmit:function (comment) {
          //TODO:submit to the server and refresh the list
            $.ajax({
                url:this.props.url,
                dataType:'json',
                type:'POST',
                data:comment,
                success:function (data) {
                    this.setState({data:data});
                }.bind(this),
                error:function (xhr,status,err) {
                    console.err(this.props.url,status,err.toString());
                }.bind(this)
            });
        },
        getInitialState:function () {
          return {data:[]}
        },
        componentDidMount:function () {
            this.loadCommentsFromServer();
            setTimeout(this.loadCommentsFromServer,this.props.pollInterval);
        },
        clearHandle:function(){
            $.ajax({
                url:this.props.url+"?clear=1",
                type:'GET',
                success:function(data){
                    this.setState({data:data});
                }.bind(this),
                error:function(xhr,status,err){
                    console.error(this.props.url
                        ,status,err.toString());
                }.bind(this)
            });
        },

        render:function () {
            return(
                <div class="commentBox">
                    <h1>Comments</h1>
                    <CommentList data={this.state.data}></CommentList>
                    <CommentForm onCommentSubmit={this.handleCommentSubmit}
                    onClearHandle={this.clearHandle}
                    />

                </div>
            );
        }
    });
    ReactDOM.render(
        <CommentBox url="/reactjs/sources/data.json" pollInterval={1} />,
        document.getElementById('content')
    );
})();