import React from 'react';
import ReactDom from 'react-dom';



//CSS
import './index.css';



function BookList(){
    return (
        <section className='booklist'>
    <book/>
    <book/>

    <book/>
    <book/>
        </section>
    )
}

const Book =() =>{
    return 
    <article className='book'>
        <image></image>
        <Title/>
    </article>
};




const Image = () => <img src="
https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UL320_.jpg" alt=""/>


const Title= () => <h1>my  media book</h1>

ReactDOM.render(<BookList />, document.getElementById('root'));