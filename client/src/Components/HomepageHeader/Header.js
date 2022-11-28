import starLogo from './img/Star Logo 07-2.png';
import nzFlag from './img/NZ Flag.png';
import maoriFlag from './img/Maori flag.png';
// import teacher from './img/Ellipse38.png';
import './HomepageHeader.css';
import { Link } from 'react-router-dom';
import HomeModal from '../logIn-register/HomeModal';

const Header = () => {
    return (
        <>
            <div className="main-header-container">
                <div className="main-content-container">
                    <div className="main-header-logo">
                        <Link to="/"><img src={starLogo} alt="star LevelUp Works logo"></img>
                        </Link>
                    </div>

                    <div className="main-header-nav-bar">
                    <Link to="/">HOME</Link>
                        <Link to="/teacher-project-library">PROJECTS</Link>
                        <Link to="/teacher-profile-viewer">TEACHERS</Link>
                    </div>

                    <div className="main-header-lang-and-user">
                        <div className="main-header-lang-block">
                            <p>LANG</p>
                            <img src={nzFlag} alt="NZ flag"></img>
                            <img src={maoriFlag} alt="Maori flag"></img>
                        </div>
                        <div className="main-header-user-block">
                            <HomeModal/>
                            {/* <div>
                                <img src={teacher} alt="UserProfileImage"></img>
                            </div>
                            <div>
                                <Link to="/teacher-profile-viewer">JASMINA SALVADOR</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;