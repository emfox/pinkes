/* Pinkes thin-app content handler.
 *
 * When running the app with system firefox-esr via `-app application.ini`,
 * Firefox expects an app-level BrowserContentHandler. This shim opens the
 * Pinkes main window directly, so the app does not need to replace or patch
 * the system Gecko omni.ja.
 */
export function nsBrowserContentHandler() {}

nsBrowserContentHandler.prototype = {
  QueryInterface: ChromeUtils.generateQI(["nsICommandLineHandler"]),

  handle(cmdLine) {
    if (typeof Components === "undefined" || !Components.classes) {
      throw new Error("Pinkes thin app: Components unavailable");
    }
    Services.ww.openWindow(
      null,
      "chrome://zotero/content/zoteroPane.xhtml",
      "_blank",
      "chrome,dialog=no,all",
      null
    );
    cmdLine.preventDefault = true;
  },

  helpInfo: "",
};
