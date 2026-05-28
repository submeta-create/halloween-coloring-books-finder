export function getAmazonUrl(asin: string) {
  // Future: add US Amazon Associates tag when approved.
  // Future: support UK/CA storefront URLs for regional recommendations.
  // Future: support Amazon OneLink or equivalent localization flow.
  return `https://www.amazon.com/dp/${asin}`;
}
