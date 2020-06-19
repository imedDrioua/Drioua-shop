import React from 'react';
import {SpinnerOverlay , SpinnerContainer} from "./styles.jsx";



const withSpinner = (Wcomponent) => ({isLoading , ...Otherprops}) =>(
    isLoading ?
    <SpinnerOverlay >
        <SpinnerContainer />
    </SpinnerOverlay>
    :
    <Wcomponent {...Otherprops}/>
)

export default withSpinner;