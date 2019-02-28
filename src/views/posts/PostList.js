import React from 'react';
import axios from 'axios';

class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ceva: 'text banal',
            posts: []
        };
    }

    async componentDidMount() {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');

        this.setState({ posts: resp.data });
    }

    render() {
        return (
            <div>
                <h2>Post List</h2>
                { this.state.posts.map(post => (
                    <p key={ post.id }>
                        { post.title }
                    </p>
                )) }
            </div>
        );
    }
}

export default PostList;
