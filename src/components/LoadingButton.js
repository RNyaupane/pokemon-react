function Spinner(){
    return(
        <div className="flex mb-20 justify-center items-center">
                <p className="text-4xl font-semibold">Loading</p>
        </div>
    )
}

function LoadButton(props){
    return(
        <button onClick={ props.load } className = 'bg-blue-500 text-white mt-10 p-3 rounded-lg font-medium shadow-lg'>
            Load More
        </button>
    )
}

function LoadingButton(props){
    return(
        <>
            {props.loading ? <Spinner /> : <LoadButton load = {props.loadMore} />}
        </>       
    );
}

export  default LoadingButton;