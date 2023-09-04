import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'


const Footer = () => {
    return (
        <>

            <footer className={footerStyles.footer}>
                <div className={footerStyles.content}>                    
                  <span> @copyright IBM India</span> 
                </div>
            </footer>

        </>
    );
}

export default Footer;