import React from 'react';

const Withloading=(WrappedComponent)=> {
return (
    props => props.isloading ? <p>is loading...</p> : <WrappedComponent {...props} />
)
    

}
export default Withloading;