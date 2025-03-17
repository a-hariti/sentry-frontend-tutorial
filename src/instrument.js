import { useEffect } from "react";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "<your_DSN_key>",
  integrations: [],
  // Set `tracePropagationTargets` to control for which URLs trace propagation should be enabled
  tracePropagationTargets: [/^\//, /^https:\/\/yourserver\.io\/api/],
});
