function generateSiteMap(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map((url) => {
          return `
          <url>
            <loc>${url}</loc>
          </url>
        `;
        })
        .join("")}
    </urlset>
  `;
}

export async function getServerSideProps({ res }) {
  const urls = [
    "https://www.solvemed.ai/",
    "https://www.solvemed.ai/GetAccess",
    "https://www.solvemed.ai/Careers",
    "https://www.solvemed.ai/Contact",
    "https://www.solvemed.ai/Team",
  ];

  const sitemap = generateSiteMap(urls);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
