import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import { BsArrowRight } from 'react-icons/bs'

function Card ({name, description, html_url}){
    return (
      <section className={styles.card}>
        <h3>{name}</h3>
        <p>{description}</p>
          <div className={styles.card_footer}>
            <Link to={html_url} className={styles.card_button}>
            <BsArrowRight />
            </Link >

          </div>



      </section>
    )
}
export default Card