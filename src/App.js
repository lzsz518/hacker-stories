import './App.css';

const tec_list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author:'Jordan Walke',
        num_comments:3,
        points:4,
        objectID:0,

    },

    {
        title:'Redux',
        url:'https://redux.js.org/',
        author:'Dan Abramov,Andrew Clark',
        num_comments:2,
        points:5,
        objectID:1,
    },
    
];


function getTitle(title)
{
    return title;
}

function GetTecList()
{
    return (
        tec_list.map(
        function(item)
            {
                return(
                    <div key={item.objectID}>
                    <span>
                    <a href={item.url}>{item.title} </a>
                    </span>
                    <span>{item.author} </span>
                    <span>{item.num_comments} </span>
                    <span>{item.points} </span>
                    </div>
                );
            }));
}

function App() {
  return (
    <div className="App">
          <h1>Hello {getTitle('React')}</h1>

          <label htmlFor="search">Search: </label>
          <input id="search" type="text"/>

          <hr/>
          <GetTecList/>
    </div>
  );
}

export default App;
