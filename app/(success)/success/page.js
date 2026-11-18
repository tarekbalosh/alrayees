export const metadata = {
  title: "Payment Successful | Al Rayees SDN BHD",
  icons: { icon: "/assets/images/favicon_icon.png", apple: "/assets/images/icon-192.png" },
};

// <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"> + <meta name="theme-color" content="#123c29">
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: "#123c29",
};

export default function Page() {
  return (
    <>
    <div className="success-page-wrapper">
      <div className="success-card">
        <svg className="success-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle className="success-checkmark__circle" cx="26" cy="26" r="25" fill="none"></circle>
          {" "}
          <path className="success-checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
        </svg>
        <h1>
          Thank You!
        </h1>
        <p>
          تمت عملية الدفع بنجاح. شكراً لثقتكم بنا، سيتم التواصل معكم قريباً لتأكيد تفاصيل طلبكم.
        </p>
        <a href="/" className="btn-home">
          العودة للصفحة الرئيسية
        </a>
      </div>
    </div>
    </>
  );
}
