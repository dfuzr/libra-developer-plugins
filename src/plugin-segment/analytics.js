import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import getCookie from '../utils/getCookie';

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteUpdate() {
      const cookiesEnabled = getCookie(window.segmentPermissionCookie);

      if (cookiesEnabled === 'true') {
        window.analytics.page();
      }
    },
  };
})();
