import starLogo from './img/Star Logo 07-2.png';
import nzFlag from './img/NZ Flag.png';
import maoriFlag from './img/Maori flag.png';
import './TeacherHeader.css';
import { Link } from 'react-router-dom';
import useToken from "../../Helpers/useToken";
import { useState, useEffect } from "react";
import axios from "axios";

const TeacherHeader = () => {

    const { token: teacher } = useToken();
    const [headerPic, setHeaderPic] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:4000/teacher/${teacher.TeacherID}`).then((response) => {
            setHeaderPic(response.data);
            console.log(response.data);
        })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {headerPic.map((teacherPic) => {
                return (
                    <div className="sf-main-header-container"> 
                    <div className="sf-main-content-container">
                            <div className="sf-main-header-logo">
                                <Link to="/"><img src={starLogo} 
                                alt="star LevelUp Works logo"></img>
                                </Link>
                            </div>

                            <div className="sf-main-header-nav-bar">
                                <Link to="/">HOME</Link>
                                <Link to="/teacher-project-library">PROJECTS</Link>
                                <Link to="/teacher-profile-viewer">TEACHERS</Link>
                            </div>

                            <div className="sf-main-header-lang-and-user">
                                <div className="sf-main-header-lang-block">
                                    <p>LANG</p>
                                    <img src={nzFlag} alt="NZ flag"></img>
                                    <img src={maoriFlag} alt="Maori flag"></img>
                                </div>

                                <div className="sf-main-header-user-block">

                                    <div>
                                        <img src={`${teacherPic.ProfilePic}`} 
                                        alt="User-Profile"></img>
                                    </div>
                                    
                                    <div className="sf-main-header-user-text">
                                        <Link className="sf-main-header-user-text" to="/teacher">{`${teacherPic.Name}`}</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default TeacherHeader;