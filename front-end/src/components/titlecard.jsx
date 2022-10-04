function TitleCard(props){
    return (
        <div className="shadow-sm bg-warning text-dark w-100 py-3 px-2 fw-semibold fs-5">
            {props.title}
        </div>
    )
}

export default TitleCard