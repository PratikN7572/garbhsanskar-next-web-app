import FingerPrintJS from "@fingerprintjs/fingerprintjs";

export async function getBrowserFingerprint() {
  const fpPromise = FingerPrintJS.load();
  const fp = await fpPromise;
  const result = await fp.get();

  return result.visitorId;
}
