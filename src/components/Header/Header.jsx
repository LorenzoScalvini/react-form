import { useState } from 'react';
import style from './Header.module.css';
import logoImage from '../../assets/images/logo-small.png';

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className={style.container}>
            <div className={style.navbar}>
                <div>
                    <img className={style.logo} src={logoImage} alt="Logo" />
                </div>
                <div className={style.links}>
                    <ul>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </div>
                <button
                    className={style.hamburger}
                    onClick={toggleModal}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>

            {isModalOpen && (
                <div className={style.modalOverlay}>
                    <div className={style.modalContent}>
                        <button
                            className={style.closeButton}
                            onClick={toggleModal}
                            aria-label="Close menu"
                        >
                            ✕
                        </button>
                        <ul>
                            <li>Home</li>
                            <li>Movies</li>
                            <li>About</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
