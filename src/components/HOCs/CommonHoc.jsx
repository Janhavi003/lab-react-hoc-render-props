import React from 'react';

const CommonHoc = (ChildComponent) => {
    let Logic = () => {
        const[count,setCount] = React.useState(0);
        function handleCount () {
            setCount(count + 1)
        }
        return <ChildComponent handleCount = {handleCount} count={count}/>
    }
    return Logic;
}

export default CommonHoc