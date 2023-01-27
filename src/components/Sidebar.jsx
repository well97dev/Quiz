import SocialNetworks from './SocialNetworks';
import Avatar from '../img/Well(Biblioteca).jpeg';


import '../styles/components/sidebar.sass';


const Sidebar = () => {
    return (
        <aside id="sidebar">
        <img src={Avatar} alt="Wellington Pinheiro" />
        <p className="title">Developer</p>
        <SocialNetworks/>
        <p>Contact information</p>
        <a href="#" className="btn">
        Download currículo
        </a>
    </aside>
    );
};

export default Sidebar;