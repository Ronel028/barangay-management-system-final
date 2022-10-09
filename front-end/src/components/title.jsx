function TitleCard(props){
    return (
        <div className="shadow-sm py-4 px-2 mb-4 text-capitalize fw-semibold fs-5 text-bg-dark">
            {props.title}
        </div>
    )
}

export default TitleCard