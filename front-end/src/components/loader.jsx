function Loader(props){
    return <div 
                className='align-items-center mb-2'
                style={{display: props.loader ? 'flex' : 'none'}}
            >
                <div className='spinner me-2'></div>
                {props.title}
            </div>
}

export default Loader