import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return(
        <header>
            <div id="header__titlebox">
                <h1>MKS</h1>
                <span>Sistemas</span>
            </div>

            <button id="header__cartbtn"><FontAwesomeIcon icon={faCartShopping} /> 0</button>
        </header>
    );
}