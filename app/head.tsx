import { ReactElement } from "react";

export default function Head(): ReactElement {
  const metatags = {
    title: "Camille Dugas | Développeur Frontend",
    siteName: "Camille Dugas | Portfolio",
    description: "Développeur frontend depuis 2016. Spécialisé dans l'écosystème JavaScript, "
      + "je travaille principalement avec les frameworks React et Next.",
    url: "https://camilledugas.me",
    domain: "camilledugas.me",
    image: "https://camilledugas.me/meta-tag-image.png",
    color: "#FFFFFF"
  };

  return (
    <>
      <title>{metatags.title}</title>

      <link rel="icon" href="/favicon.ico" />

      <meta content="width=device-width, initial-scale=1" name="viewport" />

      {/* Description */}
      <meta name="description" content={metatags.description} />

      {/* Open Graph metatags */}
      <meta property="og:site_name" content={metatags.siteName} />
      <meta property="og:title" content={metatags.title} />
      <meta property="og:description" content={metatags.description} />
      <meta property="og:url" content={metatags.url} />
      <meta property="og:image" content={metatags.image} />
      <meta property="og:type" content="website" />

      {/* Twitter metatags */}
      <meta name="twitter:title" content={metatags.title} />
      <meta name="twitter:description" content={metatags.description} />
      <meta property="twitter:url" content={metatags.url} />
      <meta name="twitter:image" content={metatags.image} />
      <meta property="twitter:domain" content={metatags.domain} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Theme color for Discord embed */}
      <meta name="theme-color" content={metatags.color} />
    </>
  );
}