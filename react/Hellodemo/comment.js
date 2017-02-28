/**
 * Created by Messi on 2017/2/24.
 */
var Comment = React.createClass({
    render:function () {

        return(
            <div className="comment">
                <h2 clssName="commentAuthor">
                    {this.props.author}
                    {this.props.text}
                    </h2>
            </div>
        );
    }
});