export default function sitemap() {
  const baseUrl = 'https://www.jbinsurancecapital.com';

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/#services`, lastModified: new Date() },
    { url: `${baseUrl}/#products`, lastModified: new Date() },
    { url: `${baseUrl}/#about`, lastModified: new Date() },
  ];
}
