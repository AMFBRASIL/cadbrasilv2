const SITE_ORIGIN = "https://cadbrasil.com.br";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7c46af53-295b-4a74-8239-56f32ba6ed77/id-preview-d78bce4c--3b6f7a39-c5c1-4555-ad8d-dccb06150a62.lovable.app-1779886304111.png";
const ROBOTS_INDEX = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";
const PRODUCTION_HOSTS = /* @__PURE__ */ new Set(["cadbrasil.com.br", "www.cadbrasil.com.br"]);
function robotsMetaTags() {
  return [
    { name: "robots", content: ROBOTS_INDEX },
    { name: "googlebot", content: ROBOTS_INDEX }
  ];
}
const SEO_PUBLISHED = "2026-01-15T08:00:00-03:00";
const SEO_MODIFIED = "2026-05-28T12:00:00-03:00";
export {
  OG_IMAGE as O,
  PRODUCTION_HOSTS as P,
  ROBOTS_INDEX as R,
  SEO_MODIFIED as S,
  SEO_PUBLISHED as a,
  SITE_ORIGIN as b,
  robotsMetaTags as r
};
