import './SiteHeader.scss'
import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';

function SiteHeader() {
    return (
        <header className='site-header'>
            <div className='site-header__text-section'>
                <p className='site-header__link'>About.</p>
                <p className='site-header__link'>Works.</p>
                <p className='site-header__link'>Contact.</p>
            </div>
            <div className='site-header__icon-section'>
                <img className='site-header__icon site-header__icon--github' src={githubIcon} alt='github icon'/>
                <img className='site-header__icon' src={linkedinIcon} alt='linkedin icon'/>
            </div>
        </header>
    );
}

export default SiteHeader;