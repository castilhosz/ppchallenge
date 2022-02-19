import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'

import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PPChallenge</title>
        <meta name="description" content="Pedido Pago Web Challenge" />
        <link rel="icon" href="/brand.png" />
      </Head>

      <Header />
      <main>
        <aside></aside>
        <div>
          <h1>Organização</h1>
          <div>
            <div>
              <p>Colaboradores</p>
              <p>Cargos</p>
            </div>
            <form>
              <input type="text" placeholder="Pesquise por nome ou cpf" />
            </form>
            <h2>Listagem de colaboradores</h2>
            <table>
              <tr>
                <th>Nome completo</th>
                <th>Departamento</th>
                <th>Departamento</th>
                <th>Unidade</th>
                <th>Status</th>
              </tr>
              <tr>
                <td><img src="" alt="" /> <p>Pikachu Soares do Santos Dias</p></td>
                <td>Administrativo</td>
                <td>Diretor</td>
                <td>Quartel General</td>
                <td>Ativo</td>
                <td><a href=""><img src="/more-vertical.png" alt="" /></a></td>
              </tr>
              <tr>
                <td><img src="" alt="" /> <p>Pikachu Soares do Santos Dias</p></td>
                <td>Administrativo</td>
                <td>Diretor</td>
                <td>Quartel General</td>
                <td>Ativo</td>
                <td><a href=""><img src="/more-vertical.png" alt="" /></a></td>
              </tr>
              <tr>
                <td><img src="" alt="" /> <p>Pikachu Soares do Santos Dias</p></td>
                <td>Administrativo</td>
                <td>Diretor</td>
                <td>Quartel General</td>
                <td>Ativo</td>
                <td><a href=""><img src="/more-vertical.png" alt="" /></a></td>
              </tr>
              <tr>
                <td><img src="" alt="" /> <p>Pikachu Soares do Santos Dias</p></td>
                <td>Administrativo</td>
                <td>Diretor</td>
                <td>Quartel General</td>
                <td>Ativo</td>
                <td><a href=""><img src="/more-vertical.png" alt="" /></a></td>
              </tr>
              <tr>
                <td><img src="" alt="" /> <p>Pikachu Soares do Santos Dias</p></td>
                <td>Administrativo</td>
                <td>Diretor</td>
                <td>Quartel General</td>
                <td>Ativo</td>
                <td><a href=""><img src="/more-vertical.png" alt="" /></a></td>
              </tr>
              <tr>
                <td><img src="" alt="" /> <p>Pikachu Soares do Santos Dias</p></td>
                <td>Administrativo</td>
                <td>Diretor</td>
                <td>Quartel General</td>
                <td>Ativo</td>
                <td><a href=""><img src="/more-vertical.png" alt="" /></a></td>
              </tr>
            </table>
            <div>
              <div>
                <p>Mostrando 10 de 50 registros</p>
                <input type="" />
              </div>
              <div>
                <button>&lt;</button>
                <strong>1 de 10</strong>
                <button>&gt;</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;
