
let heading=React.createElement(
    'h1',{
        id:'bg-blue'
    },
    "This is ReactJs Demo"
)

let paragraph=React.createElement(
    'p',{className:'para',id:'fontvalue'},
    "This Is Paragraph"
)

let wrapper=React.createElement(
    'div',{id:'bgyellow'},
    [heading,paragraph]
)

let element=document.getElementById('root');
let root=ReactDOM.createRoot(element);
root.render(wrapper);
