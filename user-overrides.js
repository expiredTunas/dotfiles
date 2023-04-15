/* enable DRM and let me watch videos */
user_pref("media.eme.enabled", true);

/* disable clearing history on shutdown (download, form and browsing histories) */
user_pref("privacy.clearOnShutdown.history", false);
user_pref("network.http.referer.XOriginPolicy", false);

/* RFP is not for me!!! >::( */
user_pref("privacy.resistFingerprinting", false); 
user_pref("privacy.resistFingerprinting.letterboxing", false); 
user_pref("webgl.disabled", false); 

//Disable Safe Browsing
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);

//DNS over HTTPS
//Protects web requests from an ISP
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");
user_pref("network.trr.mode", 2);

//Don't use password manager
user_pref("signon.rememberSignons", false);
//Disable Pocket, it's proprietary trash
user_pref("extensions.pocket.enabled", false);
// Disable Mozilla account
user_pref("identity.fxaccounts.enabled", false);

//Reenable search engines
user_pref("keyword.enabled", true);

//Disable Safe Browsing, this phones home to Google.
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);

//Enable favicons, the icons in bookmarks
user_pref("browser.shell.shortcutFavicons", true);