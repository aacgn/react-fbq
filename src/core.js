/**
 * React Facebook Pixel Module
 *
 * @package react-fbq
 * @author  Antonio Neto
 */

 import loadFbq from './utils/loadFbq';
 
 import warn from './utils/console/warn';
 import log from './utils/console/log';
 
 const _isNotBrowser =
   typeof window === 'undefined' || typeof document === 'undefined';
 
 let _dryRun = false;

 function _isFqbLoaded() {
     if (window.fbq) {
        return true;
     }
     
     warn('fbq was not loaded');
     return false;
 }
 
 export function initialize(pixelId, options) {
    if (_isNotBrowser) {
        warn('window object is required in initialize()');
        return;
    }
    
    if (!pixelId) {
        warn('pixelId is required in initialize()');
        return;
    }

   if (options && options._dryRun === true) {
     _dryRun = true;
   }
 
   loadFbq(pixelId, options);
 }

 /**
  * pageview:
  * Basic fbq pageview tracking
  */
  export function pageview() {
    if (!_isFqbLoaded()) {
      return;
    }
  
   fbq('track', 'PageView');

   if (_dryRun) log("called fbq('track', 'PageView')");
  }

  /**
  * track:
  * Basic fbq standard tracking for events that are not mapped for the library yet
  */
  export function track(event, data) {
    if (!_isFqbLoaded()) {
        return;
    }

    if (typeof(data) !== object) {
        warn('data must be an object');
        return;
    }

    fbq('track', event, data);

    if (_dryRun) log(`called fbq('track', ${event}, ${JSON.stringify(data)})`);
  }

  /**
  * trackCustom:
  * Basic fbq custom tracking
  */
    export function trackCustom(event, data) {
        if (!_isFqbLoaded()) {
            return;
        }
    
        if (typeof(data) !== object) {
            warn('data must be an object');
            return;
        }
    
        fbq('trackCustom', event, data);
    
        if (_dryRun) log(`called fbq('track', ${event}, ${JSON.stringify(data)})`);
    }

 
 export default {
   initialize,
   pageview,
   track,
   trackCustom,
 };