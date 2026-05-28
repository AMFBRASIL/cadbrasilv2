/** IDs de tracking — mesmos do site anterior CADBRASIL. */
export const GTM_ID = "GTM-TRVTMS6M";
export const GTAG_AW_ID = "AW-16460586067";
export const GTAG_GA_ID = "GT-KTPDP2TV";
export const BING_UET_ID = "343231769";

export const GTM_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

export const GTAG_INIT_SCRIPT = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GTAG_AW_ID}');
gtag('config', '${GTAG_GA_ID}');`;

export const BING_UET_SCRIPT = `(function(w,d,t,r,u){
  var f,n,i;
  w[u]=w[u]||[],f=function(){
    var o={ti:"${BING_UET_ID}", enableAutoSpaTracking: true};
    o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad");
  },
  n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){
    var s=this.readyState;
    s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null);
  },
  i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i);
})(window,document,"script","https://bat.bing.com/bat.js","uetq");`;

export function pushSpaPageView(pathname: string) {
  if (typeof window === "undefined") return;

  const pageLocation = window.location.href;
  const pageTitle = document.title;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "page_view",
    page_path: pathname,
    page_location: pageLocation,
    page_title: pageTitle,
  });

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", "page_view", {
      page_path: pathname,
      page_location: pageLocation,
      page_title: pageTitle,
    });
  }
}
