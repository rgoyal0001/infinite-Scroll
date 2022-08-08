import React from "react";
// import './style.css'

const Home=()=>{
    const [listItems,setLI]=React.useState(Array.from(Array(50).keys(),n=>n+1));
    const [isFatch,setFetch]=React.useState(false);
    
    React.useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return ()=>        window.removeEventListener('scroll',handleScroll);

    },[])

    React.useEffect(()=>{
        if(!isFatch)
            return;
        fetchMore();
    },[isFatch])

    function handleScroll(){
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFatch)
            return;
        setFetch(true);
    }

    function fetchMore(){
        setLI(pre=>(
            [...pre,...Array.from(Array(25).keys(),n=>n+pre.length+1)]
        ));
        setFetch(false)
    }

    return(
        <>
            <div className="container" > 
                <ol className="containers">
                    {listItems.map(
                        item=><li>Masai Student {item}</li>
                    )}
                </ol>
            </div>
        </>
    )
}

export default Home;