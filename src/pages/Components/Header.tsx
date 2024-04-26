import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

interface HeaderProps {
    productsAmount: number;
    isCartEnabled: () => void;
}

export default function Header({ productsAmount, isCartEnabled }: HeaderProps) {
    return (
        <header>
            <div id="header__titlebox">
                <h1>MKS</h1>
                <span>Sistemas</span>
            </div>

            <button id="header__cartbtn" onClick={isCartEnabled}>
                <FontAwesomeIcon icon={faCartShopping} /> {productsAmount}
            </button>
        </header>
    );
}