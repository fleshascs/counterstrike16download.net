export function buildBreadcrumbs(title: string, url: string) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: title,
        item: process.env.domain + url
      }
    ]
  });
}

export const ratingSchema = ({ ratingValue, ratingCount }) =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': ['VideoGame', 'SoftwareApplication'],
    name: 'Counter-Strike 1.6',
    image: require('../images/header.jpg?webp'),
    author: {
      '@type': 'Organization',
      name: 'Valve',
      url: 'https://www.valvesoftware.com'
    },
    publisher: 'Valve',
    genre: ['Action (Shooter)', '3D', '1st Person'],
    operatingSystem: 'Windows',
    applicationCategory: 'GameApplication',
    softwareVersion: '1.6',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue,
      ratingCount: ratingCount
    },
    offers: {
      '@type': 'Offer',
      price: '0'
    }
  });
