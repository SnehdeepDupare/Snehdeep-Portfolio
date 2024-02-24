import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TAG_MANAGER_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || []; 
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date()); 
            
            gtag('config', '${process.env.GOOGLE_TAG_MANAGER_ID}');
        `}
      </Script>
    </>
  );
}
