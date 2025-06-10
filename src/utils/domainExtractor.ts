/**
 * Extracts the hostname (domain with subdomains) from a URL string.
 *
 * @param urlString The URL string to parse.
 * @returns The hostname (e.g., "www.taskvare.com") or null if the URL is invalid.
 */
export function getDomainFromUrl(urlString: string): string | null {
  try {
    // Create a new URL object.
    // The constructor will throw an error if the URL is invalid.
    const url = new URL(urlString);
    // The 'hostname' property gives the domain name, including subdomains.
    return url.hostname;
  } catch (error: any) {
    // It's good practice to type the error, 'any' or 'unknown' are common
    console.error(`Invalid URL ('${urlString}'):`, error.message);
    return null; // Or you could throw the error, or return an empty string,
    // depending on how you want to handle errors.
  }
}
