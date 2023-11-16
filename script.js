const heading = React.createElement('h1',{id:"heading"},"Hello World");
const p = React.createElement('div',{id:"1"}, React.createElement('div',{id:2}),heading);
const rootid = ReactDOM.createRoot(document.getElementById('root'));
rootid.render(p);
// console.log(heading);
