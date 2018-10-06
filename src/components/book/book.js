import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getBookWithReviewer, clearBookWithReviewer} from '../..//actions';


class BookView extends Component {
    
    componentWillMount() {
        this.props.dispatch(getBookWithReviewer(this.props.match.params.id))
    }
    componentWillUnmount() {
        this.props.dispatch(clearBookWithReviewer())
    }
    
renderBook = (books) => (
    books.book ?
    <div className="br_container">
        <div className="br_header">
            <h2>{books.book.name}</h2>
            <h5>{books.book.author}</h5>
            <div className="br_reviewer">
                <span>Review by: {books.reviewer.name} {books.reviewer.lastname}</span>
            </div>
        </div>
        <div className="br_review">
            <p><strong>{books.book.review}</strong></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos quidem dignissimos qui laudantium fuga molestias reprehenderit dolores voluptatibus mollitia? Esse quaerat totam cum tempore architecto omnis? Illum, est. Quae?</p>
            <p><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sint. Sapiente odit tempora quisquam pariatur id. Excepturi fuga culpa!`</strong></p>
        </div>
        <div className="br_box">
            <div className="left">
                <div>
                    <span>Pages: </span> {books.book.pages}
                </div>
                <div>
                    <span> Price $</span> {books.book.price}
                </div>
            </div>
            <div className="right">
                <span>Rating</span>
                <div>{books.book.rating}</div>
            </div>
        </div>
    </div>
    : null
)

    render() { 
        let books = this.props.books;

        return ( 
            <div>
                {this.renderBook(books)}
            </div>
         );
    }
}
const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}
export default connect(mapStateToProps)(BookView);