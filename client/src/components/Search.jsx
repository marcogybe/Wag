import React from "react";
import { motion } from "framer-motion";
import "./search.css"


const Search  = () => {

return (
    <div className="search-container" >
        <div className="search-wrapper">
        <h2>Find the perfect gift!</h2>
        <form className="search-form" >
          <label htmlFor="What">What?</label>
          <input
            type="email"
            placeholder="Restaurant,Yoga..."
            
          ></input>
          <br />
          <label htmlFor="password">Where?</label>
          <input
            type="city"
            placeholder="Berlin, Munich..."
          ></input>
          <motion.button
          className="l-btn"
          whileHover={{ scale: 1.2 }}
          type="submit"
        >
          Search
        </motion.button>
          </form>

         
          </div>
    </div> 
) }




export default Search;