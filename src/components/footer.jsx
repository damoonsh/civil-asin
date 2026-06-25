import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-column english">
          <h3 className="footer-heading">Contact</h3>
          <p>Head Office Address: 3rd Floor, No. 34, Jahan Ara St., 35th St., Tehran, Iran</p>
          <p>Tel: 021-88010844 / 021-88027022</p>
          <p>Fax: 021-88003485</p>
          <p>Postal Code: 1433634545</p>
        </div>

        <div className="footer-column persian">
          <h3 className="footer-heading">تماس</h3>
          <p>آدرس دفتر مرکزی: تهران ، خیابان جهان آرا ، خیابان ۳۵ پلاک ۳۴ ط سوم</p>
          <p>تلفن: ۰۲۱۸۸۰۱۰۸۴۴/۰۲۱۸۸۰۲۷۰۲۲</p>
          <p>فکس: ۰۲۱۸۸۰۰۳۴۸۵</p>
          <p>کد پستی: ۱۴۳۳۶۳۴۵۴۵</p>
        </div>
      </div>

      <div className="footer-copyright">
        <span className="footer-copyright-en">All rights reserved by Civil Asin.</span>
        <span className="footer-copyright-fa persian-text">تمامی حقوق این وبسایت متعلق به سیویل آسین است</span>
      </div>
    </footer>
  );
};

export default Footer;
