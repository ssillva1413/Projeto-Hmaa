import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Container from "../../components/Container"
import HeaderInfo from "../../components/HeaderInfo"
import Card from "../../components/Card"
import styles from './Especialidades.module.css'
import { useEffect, useState } from "react"


function Especialidades (){
    
  const [repositories , setRepositories] = useState ([]);

  useEffect ( () => {
    const buscarRepositorios = async  () => {
      const  response = await fetch ('https://api.github.com/users/saulo-silv/repos ')
      const data = await response.json()
      setRepositories(data)
    } 
    buscarRepositorios()

  },[])
  
  return (     
      <section className={styles.especialidades} >
        {
          repositories.length > 0 ? (
            <section className={styles.lista}>
                {
                  repositories.map((repo)=> (
                    <Card 
                      key={repo.id}
                      name={repo.name}
                      description={repo.description}
                      html_url={repo.html_url}
                    
                    />
                  ))
                } 
            </section>  
          ) : (
              <p>carregando...</p>
          )
        }           
      </section>
    )
}
export default Especialidades