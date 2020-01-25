
class Quote extends React.Component{
  
    constructor(props){
      super(props)
      this.state = {
        quotes: [],
        isLoaded: false,
        index: 0
      }
     this.handleSubmit = this.handleSubmit.bind(this) 
    }
    
    componentDidMount(){
      fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => res.json())
      .then(val => {
        this.setState({
          isLoaded: true,
          quotes: [...val.quotes],
          index: Math.floor(Math.random() * val.quotes.length)
        })
      })
      
    }
    

    handleSubmit(){
        let newIndex = Math.floor(Math.random() * this.state.quotes.length)
        this.setState({
          index: newIndex
        })
       document.body.style.backgroundColor = `hsl(${newIndex + newIndex}, 100%, 50%)`
       document.getElementById("quote-box").style.color = `hsl(${newIndex + newIndex}, 100%, 50%)`
       document.getElementById("new-quote").style.backgroundColor = `hsl(${newIndex + newIndex}, 100%, 50%)`
       document.getElementById("tumblr-quote").style.backgroundColor = `hsl(${newIndex + newIndex}, 100%, 50%)`
       document.getElementById("tweet-quote").style.backgroundColor = `hsl(${newIndex + newIndex}, 100%, 50%)`
     
      }
    
    render(){
        let {isLoaded, quotes, index} = this.state
        
        
        if(!isLoaded){
          return (<div>
                  <ul>
                    <li>Loading quote...</li>
                  </ul>
              <button id = "new-quote">Flip</button>
              </div>)
        }

        else{
          return (
            <div>
              <div id = "text">
                    <ul>
                      <li key = {Math.random()}><i class="fa fa-quote-left"></i>{quotes[index].quote} </li>
                    </ul>
                <div id = "quote-author">
                  <span id = "author">~{quotes[index].author}</span>
                </div>
                
              </div>
              <div className = "buttons">
                <a href = "https://twitter.com/intent/tweet?text=" className = "button" id="tweet-quote" title="Tweet this quote!" target="_blank">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href = "https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DMae%2BJemison%26content%3DIt%25E2%2580%2599s%2Byour%2Bplace%2Bin%2Bthe%2Bworld%253B%2Bit%25E2%2580%2599s%2Byour%2Blife.%2BGo%2Bon%2Band%2Bdo%2Ball%2Byou%2Bcan%2Bwith%2Bit%252C%2Band%2Bmake%2Bit%2Bthe%2Blife%2Byou%2Bwant%2Bto%2Blive.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button" className = "button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
                  <i class="fa fa-tumblr"></i>
                </a>
                <button onClick = {this.handleSubmit} id = "new-quote" className = "button">New Quote</button>
              </div>
            </div>
          )
          window.open()
        }
      
    }
}


  
ReactDOM.render(<Quote/>, document.getElementById('quote-box'))