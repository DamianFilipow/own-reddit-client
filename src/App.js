import RedditsList from "./Components/RedditsList/RedditsList";
import SearchBar from "./Components/SearchBar/SearchBar";
import CategoriesList from "./Components/CategoriesList/CategoriesList";
import { useState } from "react";

import './App.css'

function App() {

  const [query, setQuery] = useState('')
  const [selectedSubreddit, setSubreddit] = useState('popular')
  const [inputValue, setInputValue] = useState('')


  return (
    <>
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} setQuery={setQuery}/>
      <div className='app-container'>
        <RedditsList selectedSubreddit={selectedSubreddit} query={query} setInputValue={setInputValue} setQuery={setQuery}/>
        <CategoriesList selectedSubreddit={selectedSubreddit} setSubreddit={setSubreddit}/>
      </div>
    </>
  );
}

export default App;