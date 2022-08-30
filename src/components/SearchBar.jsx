import {useContext, useState } from "react";
import {MovieContext} from '../context/DataContext';
import {CgSearch} from 'react-icons/cg'
function SearchBar() {
    const[search, setSearch] = useState('');
    const [data, setData] = useContext(MovieContext)
    
    const handleChange=(e)=>{     
        setSearch(e.target.value);    
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        getData(search);
        setSearch('');
    }

   const getData =(search)=>{
    if(search!== ''){
        fetch(`https://api.watchmode.com/v1/autocomplete-search/?apiKey=uwW5MdNaS7aIezcu6UaMANkRibzIUF4bFZxpdBGp&search_value=${search}&search_type=2`)
        .then(response =>response.json())
        .then(data=>{
            console.log(data.results);
            setData(data.results);
            
            
        })

        }
    }
    return ( 
        <div className="searchBar">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={search} required className="searchInput" placeholder='Search Movie/Series'/>
                <button type="submit" className='searchButton'><CgSearch/></button>
            </form>
        </div>
     );
}

export default SearchBar;