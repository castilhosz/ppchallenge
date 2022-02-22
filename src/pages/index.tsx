import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'

import Header from "../components/Header";
import Aside from '../components/Aside';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PPChallenge | Home</title>
      </Head>

      <Header />
      <main>
        <Aside />
        <div>
          <div className={styles.content}>
            <h1>Organização</h1>
            <div className={styles.contentBox}>
              <div className={styles.tabs}>
                <p id='tab-active'>Colaboradores</p>
                <p>Cargos</p>
              </div>
              <div className={styles.form}>
                <label>Pesquise por</label>
                <textarea placeholder='Pesquise por nome ou cpf' />
              </div>
              <div>
                <h2>Listagem de colaboradores</h2>
              </div>
              <table className={styles.table}>
                <tr>
                  <th>Nome completo</th>
                  <th>Departamento</th>
                  <th>Cargo</th>
                  <th>Unidade</th>
                  <th>Status</th>
                  <th></th>
                </tr>
                <tr>
                  <td className={styles.name}><img src="/defaultAvatar.png" alt="" /> <p>Pikachu Soares do Santos Dias</p></td>
                  <td>Administrativo</td>
                  <td>Diretor</td>
                  <td>Quartel General</td>
                  <td>Ativo</td>
                  <td><a href=""><img src="/more-vertical.png" alt="" /></a></td>
                </tr>
                <tr>
                  <td className={styles.name}><img src="/defaultAvatar.png" alt="" /> <p>Pikachu Soares do Santos Dias</p></td>
                  <td>Administrativo</td>
                  <td>Diretor</td>
                  <td>Quartel General</td>
                  <td>Ativo</td>
                  <td><a href=""><img src="/more-vertical.png" alt="" /></a></td>
                </tr>
                <tr>
                  <td className={styles.name}><img src="/defaultAvatar.png" alt="" /> <p>Pikachu Soares do Santos Dias</p></td>
                  <td>Administrativo</td>
                  <td>Diretor</td>
                  <td>Quartel General</td>
                  <td>Ativo</td>
                  <td><a href=""><img src="/more-vertical.png" alt="" /></a></td>
                </tr>
                <tr>
                  <td className={styles.name}><img src="/defaultAvatar.png" alt="" /> <p>Pikachu Soares do Santos Dias</p></td>
                  <td>Administrativo</td>
                  <td>Diretor</td>
                  <td>Quartel General</td>
                  <td>Ativo</td>
                  <td><a href=""><img src="/more-vertical.png" alt="" /></a></td>
                </tr>
                <tr>
                  <td className={styles.name}><img src="/defaultAvatar.png" alt="" /> <p>Pikachu Soares do Santos Dias</p></td>
                  <td>Administrativo</td>
                  <td>Diretor</td>
                  <td>Quartel General</td>
                  <td>Ativo</td>
                  <td><a href=""><img src="/more-vertical.png" alt="" /></a></td>
                </tr>
              </table>
              <div className={styles.navtable}>
                <div>
                  <label>Mostrando 10 de 50 registros</label>
                  <select>
                    <option value="10">10</option>
                  </select>
                </div>
                <div>
                  <button>&lt;</button>
                  <p>1 de 10</p>
                  <button>&gt;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;
