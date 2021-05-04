import { SitemapStream, streamToPromise } from 'sitemap';

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    });

    const posts = []; // List of posts

    posts.forEach((post) => { // Create each URL row
      smStream.write({ url: `/post/${post.slug}`, changefreq: 'daily', priority: 0.9 });
    });

    smStream.end(); // End sitemap stream

    const sitemapOutput = (await streamToPromise(smStream)).toString(); // XML sitemap string

    res.writeHead(200, { 'Content-Type': 'application/xml' }); // Change headers

    res.end(sitemapOutput); // Display output to user
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
