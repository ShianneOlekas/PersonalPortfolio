import './SiteHeader.scss'

function SiteHeader() {
    return (
        <header className='site-header'>
            <div className='site-header__section-container'>
                <div className='site-header__text-section'>
                    <p className='site-header__link'>About.</p>
                    <p className='site-header__link'>Works.</p>
                    <p className='site-header__link'>Contact.</p>
                </div>
                <div className='site-header__icon-section'>
                    <img />
                    <img />
                </div>
            </div>
        </header>
    );
}

export default SiteHeader;