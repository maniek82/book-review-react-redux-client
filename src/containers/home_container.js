import React, { Component } from 'react';
import {connect } from 'react-redux'
import {getBooks} from '../actions'
import BookItem from '../widgets/book_item';



class HomeContainer extends Component {
   
    componentWillMount() {
        this.props.dispatch(getBooks(2,0,'asc'))
    }
    
    renderItems = (books) => (
        books.list ? 
        books.list.map((item)=> {
            return (
               <BookItem {...item} key={item._id}/>
            )
        })
        : null
    )

    loadmore = () => {
        
        let count = this.props.books.list.length;
       this.props.dispatch(getBooks(1,count,'asc',this.props.books.list))
      
    }


    render() { 
       
        return (
            <div>
               {this.renderItems(this.props.books)}

               <div 
               onClick = {this.loadmore}
               className="loadmore"> 
               Load more
               </div>
            </div>
          );
    }
}
const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}
export default  connect(mapStateToProps)(HomeContainer);