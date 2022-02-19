import React from 'react';
import styles from './styles.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <img className={styles.imgLeft} src="/brand.png" alt="Pedido Pago Web Challenge" />
      <div>
        <img className={styles.imgRight} src="/defaultAvatar.png" alt="LZ" />
        <div>
          <h1>Luiz Zlochevsky</h1>
          <p>meus dados</p>
        </div>
      </div>
    </header>
  );
}

export default Header;