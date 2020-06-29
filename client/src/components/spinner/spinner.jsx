import React from 'react';




const withSpinner = (Wcomponent) => ({isLoading , ...Otherprops}) =>(
    isLoading ?
    <div className="loader">
			<span>L</span>
			<span>O</span>
			<span>A</span>
			<span>D</span>
			<span>I</span>
			<span>N</span>
			<span>G</span>
		</div>
    :
    <Wcomponent {...Otherprops}/>
)

export default withSpinner;