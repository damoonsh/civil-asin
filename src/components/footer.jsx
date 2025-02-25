import '../styles/footer.css';
const Footer = () => {
    const footerStyle = {
        paddingTop: '20px',
        paddingBottom: '20px',
        textAlign: 'center',
        background: 'linear-gradient(to right, #00008B 50%, orange 50%)',
        color: 'white',
        boxSizing: 'border-box'
    };
    
    const footerContentStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        gap: '20px'
    };
    
    const leftColumnStyle = {
        textAlign: 'left',
        flex: 1,
        direction: 'ltr',
        paddingLeft: '20px'
    };
    
    const rightColumnStyle = {
        textAlign: 'right',
        flex: 1,
        direction: 'rtl',
        paddingRight: '20px'
    };
    
    const englishCopyrightStyle = {
        float: 'left',
        paddingLeft: '0.5rem',
    };
    
    const persianCopyrightStyle = {
        float: 'right',
        paddingRight: '0.5rem',
    };
    
    const lastParagraphStyle = {
        clear: 'both',
        width: '100%',
        marginTop: '20px',
        paddingTop: '10px',
        borderTop: '1px solid rgba(255, 255, 255, 0.3)'
    };
    
    return (
        <div style={footerStyle}>
            <div style={footerContentStyle}>
                <div style={leftColumnStyle}>
                    <p>Head Office Address: Tehran, Jahan Ara St., 35th St., No. 34, 3rd Floor</p>
                    <p>Tel: 021-88010844 / 021-88027022</p>
                    <p>Fax: 021-88003485</p>
                    <p>Postal Code: 1433634545</p>
                </div>
                
                <div style={rightColumnStyle}>
                    <p>آدرس دفتر مرکزی: تهران ، خیابان جهان آرا ، خیابان ۳۵ پلاک ۳۴ ط سوم</p>
                    <p>تلفن: ۰۲۱۸۸۰۱۰۸۴۴/۰۲۱۸۸۰۲۷۰۲۲</p>
                    <p>فکس: ۰۲۱۸۸۰۰۳۴۸۵</p>
                    <p>کد پستی: ۱۴۳۳۶۳۴۵۴۵</p>
                </div>
            </div>
            
            <p style={lastParagraphStyle}>
                <span style={englishCopyrightStyle}>All rights reserved by Civil Asin.</span>
                <span style={persianCopyrightStyle}>تمامی حقوق این وبسایت متعلق به سیویل آسین است</span>
            </p>
        </div>
    )
}

export default Footer