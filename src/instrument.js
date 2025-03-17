import { useEffect } from "react";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://644eb1de4da7067f595da41e3bb57634@o4506812586590208.ingest.us.sentry.io/4507300498702336",
  integrations: [],
  // Set `tracePropagationTargets` to control for which URLs trace propagation should be enabled
  tracePropagationTargets: [/^\//, /^https:\/\/yourserver\.io\/api/],
});
