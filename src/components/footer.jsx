import '../styles/footer.css';
function Footer() {
    const footerStyle = {
        paddingTop: '20px',
        paddinBottom: '20px',
        textAlign: 'center',
        background: 'linear-gradient(to right, #00008B 50%, orange 50%)',
        color: 'white',
        boxSizing: 'border-box',
        direction: 'rtl',
      };

      const lastParagraphStyle = {
        // paddingBottom: '5px',
      };
    
      return (
        <div style={footerStyle}>
        <p>آدرس دفتر مرکزی: تهران ، خیابان جهان آرا ، خیابان ۳۵ پلاک ۳۴ ط سوم</p>
        <p>تلفن ۰۲۱۸۸۰۱۰۸۴۴/۰۲۱۸۸۰۲۷۰۲۲ فکس ۰۲۱۸۸۰۰۳۴۸۵
</p>
<p>کد پستی: ۱۴۳۳۶۳۴۵۴۵</p>

        <p style={lastParagraphStyle}>تمامی حقوق این وبسایت متعلق به سیویل آسین است.</p>
    </div>
  )
}

export default Footer