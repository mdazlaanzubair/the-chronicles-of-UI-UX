import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import AppRoutes from "./routes/AppRoutes";
import { StaticRouter } from "react-router-dom/server";

/**
 * @param {string} _ur
 */
export function render(_url) {
  const context = {};
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={_url} context={context}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>
  );
  return { html };
}
