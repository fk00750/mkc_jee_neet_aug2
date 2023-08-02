import Head from 'next/head';
import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import { IoIosArrowRoundBack } from 'react-icons/io';

function ThankYou() {
  return (
    <>
      <Head>
        {/* Global site tag (gtag.js) - Google Ads: 859828895 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-859828895"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-859828895');`
          }}>
        </script>
        <script
          dangerouslySetInnerHTML={{
            __html: `gtag('event', 'page_view', {
              'send_to': 'AW-859828895',
            'value': 'replace with value',
            'items': [{
              'id': 'replace with value',
            'google_business_vertical': 'retail'
              }]
            });`
          }}>
        </script>

        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N49RTPKSGV"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-N49RTPKSGV');`
          }}>
        </script>

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KZ9DCK6');`
          }}>
        </script>
      </Head>

      <div className='thank-you-wrapper'>
        <div className='container'>
          <div className='card custom-shadow border-0 my-md-5 my-3'>
            <div className='py-5 px-3 text-center'>
              <BsPatchCheckFill size={62} color={`var(--bs-success)`} />
              <h2 className='fw-bold mt-3 mb-0'>Thank You For your Query!</h2>
              <p>Your message has been received. We will get back to you soon.</p>
              <div className='w-100 d-flex align-items-center justify-content-center'>
                <a href='/' className='btn btn-primary mt-3 w-100-px d-flex align-items-center justify-content-center'>
                  <IoIosArrowRoundBack color="#ffffff" size={30} />
                  <span>Go Home</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYou;
