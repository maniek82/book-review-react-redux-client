import axios from 'axios';

const url = `http://localhost:5555`;


export function getBooks(
    limit = 10,
     start=0,
     order = 'asc',
     list='') {

  const request = axios.get(`${url}/api/books?limit=${limit}&skip=${start}&order=${order}`).then(response=> {
      if(list){
        return [...list, ...response.data]
      }else {
        return response.data
      }
  })



return {
    type: 'GET_BOOKS',
    payload: request
}
 }

 export function getBookWithReviewer(id) {
     const request = axios(`${url}/api/getBook?id=${id}`)

     return (dispatch) => {
        request.then(({data})=>{
            let book = data

            axios.get(`${url}/api/getReviewer?id=${book.ownerId}`).then(({data})=> {
                let response = {
                    book: book,
                    reviewer: data
                }

                dispatch({
                    type: 'GET_BOOK_W_REVIEWER',
                    payload: response
                })
            })

            
        })
     }
 }

 export function clearBookWithReviewer() {
     return {
         type: 'CLEAR_BOOK_w_REVIEWER',
         payload: {
             book: {},
             reviewer: {}
         }
     }
 }