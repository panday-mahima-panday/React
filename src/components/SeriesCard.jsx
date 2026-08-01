 
 import styles from "./Netflix.module.css";
 import styled from 'styled-components';  
 
 export const SeriesCard=({data})=>{
  const{img_url,name,rating,description,watch_url}=data;
  // const btn_style={
    const ButtonMahi=styled.button({
   padding:" 1.2rem 2.4rem",
    border:"none",
    fontSize:"1.6rem",
    backgroundColor:`${rating>= 8.5?"#7dcea0": "#a69d77"}`,
    color:"var(--btn-color)",
    fontWeight:"bold",
    cursor:"pointer"
    })
    




  const ratingClass=rating>=8.5?styles.super_hit:styles.average;
  return (
          <li classname={styles.card}>
            <div>
              <img
                src={img_url}
                alt={name}
                width="40%"
                height="40%"
              />
            </div>
         <div className={styles["card-content"]}>

             <h3>Name: {name}</h3>
            <h4 >Ratings: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span></h4>
            <p style={{margin:"1.2rem"}}>Summary: {description}</p>

            <a href={watch_url} target="_blank" rel="noreferrer">
              <ButtonMahi>Watch Now</ButtonMahi>
            </a>
         </div>
            
          </li>
        );
}