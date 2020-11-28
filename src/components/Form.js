import React from "react";
import styles from "./Form.module.css"; 

export default function Form(props){

    const sty = {
        padding:"5px",
        height:"10%",
        width:"100%"
    }
        return(
            <div className={styles.form}>
                <label >Name</label>
                <input style={sty} type="text" placeholder="name" name="name" onChange={props.handleChange}/>
                <label >Value</label>
                <input style={sty} type="text" placeholder="value" name="value" onChange={props.handleChange}/>
            </div>
        )
};
