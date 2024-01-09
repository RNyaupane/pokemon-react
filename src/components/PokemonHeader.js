import './PokemonHeader.css';

// importing components
import SearchBar from './SearchBar';

function PokemonHeader(props){
    return(
        <div className = 'header__wrapper flex justify-center items-center select-none mt-5'>
            <div className = 'header p-4 '>

                <div className = 'menu flex flex-col md:flex-row md:justify-between md:px-5'>
                    <SearchBar 
                        onSearch = { props.onSearch } 
                        onSearching = { props.onSearching }
                        fullPokemonList = { props.fullPokemonList }
                    />

                </div>
            </div>
        </div>    
    )
}

export default PokemonHeader;