import React from 'react';
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";
import { selectSections } from '../../redux/directory/directorySelectors';
import {connect} from "react-redux";

const Directory =({sections})=> {
    return(  
        <div className="container">
          <div className=" row no-gutters">
       {
        sections.map(({ id ,...props})=>{
         return <MenuItem  key={id} {...props} />
   })
       }
      </div>
      </div>
    );
}
const mapStateToProps=(state)=>({
      sections : selectSections(state)
})
export default connect(mapStateToProps)(Directory);