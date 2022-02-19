import React from 'react';
import styles from './styles.module.css';

const Header: React.FC = () => {
  return (
    <header>
      <img src="/brand.png" alt="Pedido Pago Web Challenge" />
      <div>
        <img src="/defaultAvatar.png" alt="LZ" />
        <div>
          <strong>Luiz Zlochevsky</strong>
          <p>meus dados</p>
        </div>
      </div>
    </header>
  );
}

export default Header;