export default async (req, res) => {
  try {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    xml += "<url>\n";
    xml += "  <loc>https://www.solvemed.ai/</loc>\n";
    xml += "</url>\n";

    xml += "<url>\n";
    xml += "  <loc>https://www.solvemed.ai/GetAccess</loc>\n";
    xml += "</url>\n";

    xml += "<url>\n";
    xml += "  <loc>https://www.solvemed.ai/Careers</loc>\n";
    xml += "</url>\n";

    xml += "<url>\n";
    xml += "  <loc>https://www.solvemed.ai/Contact</loc>\n";
    xml += "</url>\n";

    xml += "<url>\n";
    xml += "  <loc>https://www.solvemed.ai/Team</loc>\n";
    xml += "</url>\n";

    xml += "</urlset>";

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/xml");
    res.write(xml);
    res.end();
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.end();
  }
};
