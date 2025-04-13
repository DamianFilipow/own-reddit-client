import RedditsList from "./Components/RedditsList/RedditsList";
import SearchBar from "./Components/SearchBar/SearchBar";
import CategoriesList from "./Components/CategoriesList/CategoriesList";
import { useState } from "react";

function App() {

  const [query, setQuery] = useState('')
  const [selectedSubreddit, setSubreddit] = useState('popular')
  const [inputValue, setInputValue] = useState('')


  return (
    <>
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} setQuery={setQuery}/>
      <div style={{width:"95%", display:"flex", flexDirection:"row", justifyContent:'space-around', margin:'auto', marginTop:'2%', gap:'1%'}}>
        <RedditsList selectedSubreddit={selectedSubreddit} query={query} setInputValue={setInputValue} setQuery={setQuery}/>
        <CategoriesList selectedSubreddit={selectedSubreddit} setSubreddit={setSubreddit}/>
      </div>
    </>
  );
}

export default App;