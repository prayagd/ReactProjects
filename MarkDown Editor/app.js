marked.setOptions({
    breaks: true,
  });
  
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
  }
  
  
  class App extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        input: myInput
      }
      this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e){
      this.setState({
        input: e.target.value
      })
    }
    render(){
      return (
        <div>
          <Editor input = {this.state.input} change = {this.handleChange}/>
          <Preview input = {this.state.input}/>
        </div>
      )
    }
  }
  
  const Editor = (props) => {
    return (
            <div>
              <div id = "editortitle">Editor <i class = "fa fa-edit"></i></div>
              <textarea id = "editor" rows = {10} onChange = {props.change}>{props.input}</textarea>
            </div>
    )
    
  }
  
  const Preview = (props) => {
      return (
        <div>
          <div id = "previewtitle">Preview <i class = "fa fa-file-word-o"></i></div>
          <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.input, { renderer: renderer })}}/>
        </div>
      
      )
  }
  
  const myInput = `**This is a Markdown editor**
  **Try typing something**
  # Headline 1!
  ## Headline2!
  ### Headline 3:
  
  backticks for including code
   \`<div></div>\` between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  double asterisk to make bold **bold**... and underscore to make _italic_.
  Or.... **_both!_**
  ~ to crossing out stuff ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com)
  > Blockquote
  
  hyphen to make lists
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:
  
  **BUY BITCOIN**
  
  ![React Logo w/ Text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3odjpBklyPLpfJKM50eTVbGV3cyXb72GdY_HXG_NRyxTa-iO&s)
  `
  
  ReactDOM.render(<App/>, document.getElementById("root"))