/**
 * Get the computed style of the element
 *
 * @param {HTMLElement} element - The element to get the computed style from
 * @param {string} property - The property to get the computed style for
 * @returns {string} - The computed style without units
 */
export function getMyComputedStyle (element, property) {
  if (!(element instanceof HTMLElement)) {
    throw new Error ('element is not an HTMLElement');
  }

  if (typeof property !== 'string') {
    throw new Error ('property is not a string');
  }

  const styles = window.getComputedStyle (element, null);
  const propertyValue = styles.getPropertyValue (property);

  if (propertyValue === '') {
    throw new Error ('property has no value');
  }

  return propertyValue.replace ('px', '');
}
