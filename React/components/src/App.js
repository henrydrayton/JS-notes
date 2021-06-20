import logo from './logo.svg';
import './App.css';
import Comment from './Comment'

function App() {
  return (
      <div className="comments"> 
        <Comment  author="Mary Smith"/>
        <Comment author="Jude Henry"/>
        <Comment author="Bob Miller"/>
      </div>
  );
}

export default App;
