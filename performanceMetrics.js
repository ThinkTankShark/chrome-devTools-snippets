// performanceMetrics.js
// https://github.com/ThinkTankShark/chrome-devTools-snippets
// Print out the page performance metrics
// https://developer.mozilla.org/en-US/docs/Navigation_timing

(function () {

  var t = window.performance.timing;
  var lt = window.chrome && window.chrome.loadTimes && window.chrome.loadTimes();
  var timings = [];

  timings.push({
    label: "Time Until Page Loaded",
    timeInMilSeconds: t.loadEventEnd - t.navigationStart + "ms",
    timeInSeconds: ((t.loadEventEnd - t.navigationStart) / 60) + "s",
  });
  timings.push({
    label: "Time Until DOMContentLoaded",
    timeInMilSeconds: t.domContentLoadedEventEnd - t.navigationStart + "ms",
    timeInSeconds: ((t.domContentLoadedEventEnd - t.navigationStart) / 60) + "s"
  });
  timings.push({
    label: "Total Response Time",
    timeInMilSeconds: t.responseEnd - t.requestStart + "ms",
    timeInSeconds: ((t.responseEnd - t.requestStart) / 60) + "s"
  });
  timings.push({
    label: "Connection",
    timeInMilSeconds: t.connectEnd - t.connectStart + "ms",
    timeInSeconds: ((t.connectEnd - t.connectStart) / 60) + "s"
  });
  timings.push({
    label: "Response",
    timeInMilSeconds: t.responseEnd - t.responseStart + "ms",
    timeInSeconds: ((t.responseEnd - t.responseStart) / 60) + "s"
  });
  timings.push({
    label: "Domain Lookup",
    timeInMilSeconds: t.domainLookupEnd - t.domainLookupStart + "ms",
    timeInSeconds: ((t.domainLookupEnd - t.domainLookupStart) / 60) + "s"
  });
  timings.push({
    label: "Load Event",
    timeInMilSeconds: t.loadEventEnd - t.loadEventStart + "ms",
    timeInSeconds: ((t.loadEventEnd - t.loadEventStart) / 60) + "s"
  });
  timings.push({
    label: "Unload Event",
    timeInMilSeconds: t.unloadEventEnd - t.unloadEventStart + "ms",
    timeInSeconds: ((t.unloadEventEnd - t.unloadEventStart) / 60) + "s"
  });
  timings.push({
    label: "DOMContentLoaded Event",
    timeInMilSeconds: t.domContentLoadedEventEnd - t.domContentLoadedEventStart + "ms",
    timeInSeconds: ((t.domContentLoadedEventEnd - t.domContentLoadedEventStart) / 60) + "s"
  });
  if(lt) {
    if(lt.wasNpnNegotiated) {
      timings.push({
        label: "NPN negotiation protocol",
        timeInMilSeconds: lt.npnNegotiatedProtocol,
        timeInSeconds: lt.npnNegotiatedProtocol
      });
    }
    timings.push({
      label: "Connection Info",
      timeInMilSeconds: lt.connectionInfo,
      timeInSeconds: lt.connectionInfo
    });
    timings.push({
      label: "First paint after Document load",
      timeInMilSeconds: Math.ceil(lt.firstPaintTime - lt.finishDocumentLoadTime) + "ms",
      timeInSeconds: Math.ceil(((lt.firstPaintTime - lt.finishDocumentLoadTime) / 60)) + "s"
    });
  }

  var navigation = window.performance.navigation;
  var navigationTypes = { };
  navigationTypes[navigation.TYPE_NAVIGATENEXT || 0] = "Navigation started by clicking on a link, or entering the URL in the user agent's address bar, or form submission.",
  navigationTypes[navigation.TYPE_RELOAD] = "Navigating through the reload operation or the location.reload() method.",
  navigationTypes[navigation.TYPE_BACK_FORWARD] = "Navigating through a history traversal operation.",
  navigationTypes[navigation.TYPE_UNDEFINED] = "Navigation type is undefined.",

  console.group("window.performance");

  console.log(window.performance);

  console.group("Navigation Information");
  console.log(navigationTypes[navigation.type]);
  console.log("Number of redirects: ", navigation.redirectCount)
  console.groupEnd("Navigation Information");

  console.group("Timing");
  console.log(window.performance.timing);
  console.table(timings, ["label", "timeInMilSeconds", "timeInSeconds"]);
  console.groupEnd("Timing");

  console.groupEnd("window.performance");

})();