import { onMounted } from 'vue'

/**
 * Sets page-level <title> and <meta> tags for SEO.
 * Call this inside <script setup> on every view/page component.
 *
 * @param {object} options
 * @param {string} options.title        – Page title (appended with "| DriftCore")
 * @param {string} options.description  – Meta description (aim for 120–160 chars)
 * @param {string} [options.keywords]   – Optional comma-separated keyword list
 * @param {string} [options.ogTitle]    – Open Graph title (falls back to title)
 * @param {string} [options.ogDescription] – OG description (falls back to description)
 * @param {string} [options.ogType]     – OG type (default: 'website')
 * @param {string} [options.ogUrl]      – Canonical URL for OG (optional)
 */
export function useMeta({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogType = 'website',
  ogUrl,
} = {}) {
  onMounted(() => {
    // Page title
    document.title = `${title} | DriftCore`

    // Standard meta tags
    setMeta('description', description)
    if (keywords) setMeta('keywords', keywords)

    // Open Graph tags (used by social sharing previews)
    setMeta('og:title',       ogTitle       ?? title,       'property')
    setMeta('og:description', ogDescription ?? description, 'property')
    setMeta('og:type',        ogType,                       'property')
    if (ogUrl) setMeta('og:url', ogUrl, 'property')
  })
}

/** Finds an existing <meta> by name/property, or creates one if absent. */
function setMeta(key, content, attr = 'name') {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}
