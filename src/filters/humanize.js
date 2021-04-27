export function humanize(str) {
  return str.split('_').map((item, i) => {
    if (!i) return item.charAt(0).toUpperCase() + item.slice(1)
    return item
  }).join(' ')
}
