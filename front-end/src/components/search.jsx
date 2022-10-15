function Search(props){
    return (
        <div className="search__container d-flex align-items-center">
            <p className="me-2 fw-semibold">Search</p>
            <input 
                type="text" 
                className="form-control"
                onChange={props.filterOfficials}
            />
        </div>
    )
}

export default Search