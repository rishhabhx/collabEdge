var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../scripts/woff2/woff2-vite-plugins.js
var require_woff2_vite_plugins = __commonJS({
  "../scripts/woff2/woff2-vite-plugins.js"(exports, module) {
    "use strict";
    var OSS_FONTS_CDN = "https://excalidraw.nyc3.cdn.digitaloceanspaces.com/oss/";
    var OSS_FONTS_FALLBACK = "/";
    module.exports.woff2BrowserPlugin = () => {
      let isDev;
      return {
        name: "woff2BrowserPlugin",
        enforce: "pre",
        config(_, { command }) {
          isDev = command === "serve";
        },
        transform(code, id) {
          if (!isDev && id.endsWith("/excalidraw/fonts/fonts.css")) {
            return `/* WARN: The following content is generated during excalidraw-app build */

      @font-face {
        font-family: "Assistant";
        src: url(${OSS_FONTS_CDN}fonts/Assistant/Assistant-Regular.woff2)
            format("woff2"),
          url(./Assistant-Regular.woff2) format("woff2");
        font-weight: 400;
        style: normal;
        display: swap;
      }

      @font-face {
        font-family: "Assistant";
        src: url(${OSS_FONTS_CDN}fonts/Assistant/Assistant-Medium.woff2)
            format("woff2"),
          url(./Assistant-Medium.woff2) format("woff2");
        font-weight: 500;
        style: normal;
        display: swap;
      }

      @font-face {
        font-family: "Assistant";
        src: url(${OSS_FONTS_CDN}fonts/Assistant/Assistant-SemiBold.woff2)
            format("woff2"),
          url(./Assistant-SemiBold.woff2) format("woff2");
        font-weight: 600;
        style: normal;
        display: swap;
      }

      @font-face {
        font-family: "Assistant";
        src: url(${OSS_FONTS_CDN}fonts/Assistant/Assistant-Bold.woff2)
            format("woff2"),
          url(./Assistant-Bold.woff2) format("woff2");
        font-weight: 700;
        style: normal;
        display: swap;
      }`;
          }
          if (!isDev && id.endsWith("excalidraw-app/index.html")) {
            return code.replace(
              "<!-- PLACEHOLDER:EXCALIDRAW_APP_FONTS -->",
              `<script>
        // point into our CDN in prod, fallback to root (excalidraw.com) domain in case of issues
        window.EXCALIDRAW_ASSET_PATH = [
          "${OSS_FONTS_CDN}",
          "${OSS_FONTS_FALLBACK}",
        ];
      </script>

      <!-- Preload all default fonts to avoid swap on init -->
      <link
        rel="preload"
        href="${OSS_FONTS_CDN}fonts/Excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />
      <!-- For Nunito only preload the latin range, which should be good enough for now -->
      <link
        rel="preload"
        href="${OSS_FONTS_CDN}fonts/Nunito/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTQ3j6zbXWjgeg.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />
      <link
        rel="preload"
        href="${OSS_FONTS_CDN}fonts/ComicShanns/ComicShanns-Regular-279a7b317d12eb88de06167bd672b4b4.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />
    `
            );
          }
        }
      };
    };
  }
});

// vite.config.mts
var import_woff2_vite_plugins = __toESM(require_woff2_vite_plugins(), 1);
import path from "path";
import { defineConfig, loadEnv } from "file:///C:/Users/Rishabh%20Prashar/Desktop/aws%20project/excalidraw/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Rishabh%20Prashar/Desktop/aws%20project/excalidraw/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgrPlugin from "file:///C:/Users/Rishabh%20Prashar/Desktop/aws%20project/excalidraw/node_modules/vite-plugin-svgr/dist/index.js";
import { ViteEjsPlugin } from "file:///C:/Users/Rishabh%20Prashar/Desktop/aws%20project/excalidraw/node_modules/vite-plugin-ejs/index.js";
import { VitePWA } from "file:///C:/Users/Rishabh%20Prashar/Desktop/aws%20project/excalidraw/node_modules/vite-plugin-pwa/dist/index.js";
import checker from "file:///C:/Users/Rishabh%20Prashar/Desktop/aws%20project/excalidraw/node_modules/vite-plugin-checker/dist/esm/main.js";
import { createHtmlPlugin } from "file:///C:/Users/Rishabh%20Prashar/Desktop/aws%20project/excalidraw/node_modules/vite-plugin-html/dist/index.mjs";
import Sitemap from "file:///C:/Users/Rishabh%20Prashar/Desktop/aws%20project/excalidraw/node_modules/vite-plugin-sitemap/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\Rishabh Prashar\\Desktop\\aws project\\excalidraw\\excalidraw-app";
var vite_config_default = defineConfig(({ mode }) => {
  const envVars = loadEnv(mode, `../`);
  return {
    server: {
      port: Number(envVars.VITE_APP_PORT || 3e3),
      // open the browser
      open: true
    },
    // We need to specify the envDir since now there are no
    //more located in parallel with the vite.config.ts file but in parent dir
    envDir: "../",
    resolve: {
      alias: [
        {
          find: /^@excalidraw\/common$/,
          replacement: path.resolve(
            __vite_injected_original_dirname,
            "../packages/common/src/index.ts"
          )
        },
        {
          find: /^@excalidraw\/common\/(.*?)/,
          replacement: path.resolve(__vite_injected_original_dirname, "../packages/common/src/$1")
        },
        {
          find: /^@excalidraw\/element$/,
          replacement: path.resolve(
            __vite_injected_original_dirname,
            "../packages/element/src/index.ts"
          )
        },
        {
          find: /^@excalidraw\/element\/(.*?)/,
          replacement: path.resolve(__vite_injected_original_dirname, "../packages/element/src/$1")
        },
        {
          find: /^@excalidraw\/excalidraw$/,
          replacement: path.resolve(
            __vite_injected_original_dirname,
            "../packages/excalidraw/index.tsx"
          )
        },
        {
          find: /^@excalidraw\/excalidraw\/(.*?)/,
          replacement: path.resolve(__vite_injected_original_dirname, "../packages/excalidraw/$1")
        },
        {
          find: /^@excalidraw\/math$/,
          replacement: path.resolve(__vite_injected_original_dirname, "../packages/math/src/index.ts")
        },
        {
          find: /^@excalidraw\/math\/(.*?)/,
          replacement: path.resolve(__vite_injected_original_dirname, "../packages/math/src/$1")
        },
        {
          find: /^@excalidraw\/utils$/,
          replacement: path.resolve(
            __vite_injected_original_dirname,
            "../packages/utils/src/index.ts"
          )
        },
        {
          find: /^@excalidraw\/utils\/(.*?)/,
          replacement: path.resolve(__vite_injected_original_dirname, "../packages/utils/src/$1")
        }
      ]
    },
    build: {
      outDir: "build",
      rollupOptions: {
        output: {
          assetFileNames(chunkInfo) {
            if (chunkInfo?.name?.endsWith(".woff2")) {
              const family = chunkInfo.name.split("-")[0];
              return `fonts/${family}/[name][extname]`;
            }
            return "assets/[name]-[hash][extname]";
          },
          // Creating separate chunk for locales except for en and percentages.json so they
          // can be cached at runtime and not merged with
          // app precache. en.json and percentages.json are needed for first load
          // or fallback hence not clubbing with locales so first load followed by offline mode works fine. This is how CRA used to work too.
          manualChunks(id) {
            if (id.includes("packages/excalidraw/locales") && id.match(/en.json|percentages.json/) === null) {
              const index = id.indexOf("locales/");
              return `locales/${id.substring(index + 8)}`;
            }
          }
        }
      },
      sourcemap: true,
      // don't auto-inline small assets (i.e. fonts hosted on CDN)
      assetsInlineLimit: 0
    },
    plugins: [
      Sitemap({
        hostname: "https://excalidraw.com",
        outDir: "build",
        changefreq: "monthly",
        // its static in public folder
        generateRobotsTxt: false
      }),
      (0, import_woff2_vite_plugins.woff2BrowserPlugin)(),
      react(),
      checker({
        typescript: true,
        eslint: envVars.VITE_APP_ENABLE_ESLINT === "false" ? void 0 : { lintCommand: 'eslint "./**/*.{js,ts,tsx}"' },
        overlay: {
          initialIsOpen: envVars.VITE_APP_COLLAPSE_OVERLAY === "false",
          badgeStyle: "margin-bottom: 4rem; margin-left: 1rem"
        }
      }),
      svgrPlugin(),
      ViteEjsPlugin(),
      VitePWA({
        registerType: "autoUpdate",
        devOptions: {
          /* set this flag to true to enable in Development mode */
          enabled: envVars.VITE_APP_ENABLE_PWA === "true"
        },
        workbox: {
          // don't precache fonts, locales and separate chunks
          globIgnores: [
            "fonts.css",
            "**/locales/**",
            "service-worker.js",
            "**/*.chunk-*.js"
          ],
          runtimeCaching: [
            {
              urlPattern: new RegExp(".+.woff2"),
              handler: "CacheFirst",
              options: {
                cacheName: "fonts",
                expiration: {
                  maxEntries: 1e3,
                  maxAgeSeconds: 60 * 60 * 24 * 90
                  // 90 days
                },
                cacheableResponse: {
                  // 0 to cache "opaque" responses from cross-origin requests (i.e. CDN)
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: new RegExp("fonts.css"),
              handler: "StaleWhileRevalidate",
              options: {
                cacheName: "fonts",
                expiration: {
                  maxEntries: 50
                }
              }
            },
            {
              urlPattern: new RegExp("locales/[^/]+.js"),
              handler: "CacheFirst",
              options: {
                cacheName: "locales",
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 30
                  // <== 30 days
                }
              }
            },
            {
              urlPattern: new RegExp(".chunk-.+.js"),
              handler: "CacheFirst",
              options: {
                cacheName: "chunk",
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 90
                  // <== 90 days
                }
              }
            }
          ]
        },
        manifest: {
          short_name: "Excalidraw",
          name: "Excalidraw",
          description: "Excalidraw is a whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them.",
          icons: [
            {
              src: "android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "apple-touch-icon.png",
              type: "image/png",
              sizes: "180x180"
            },
            {
              src: "favicon-32x32.png",
              sizes: "32x32",
              type: "image/png"
            },
            {
              src: "favicon-16x16.png",
              sizes: "16x16",
              type: "image/png"
            }
          ],
          start_url: "/",
          id: "excalidraw",
          display: "standalone",
          theme_color: "#121212",
          background_color: "#ffffff",
          file_handlers: [
            {
              action: "/",
              accept: {
                "application/vnd.excalidraw+json": [".excalidraw"]
              }
            }
          ],
          share_target: {
            action: "/web-share-target",
            method: "POST",
            enctype: "multipart/form-data",
            params: {
              files: [
                {
                  name: "file",
                  accept: [
                    "application/vnd.excalidraw+json",
                    "application/json",
                    ".excalidraw"
                  ]
                }
              ]
            }
          },
          screenshots: [
            {
              src: "/screenshots/virtual-whiteboard.png",
              type: "image/png",
              sizes: "462x945"
            },
            {
              src: "/screenshots/wireframe.png",
              type: "image/png",
              sizes: "462x945"
            },
            {
              src: "/screenshots/illustration.png",
              type: "image/png",
              sizes: "462x945"
            },
            {
              src: "/screenshots/shapes.png",
              type: "image/png",
              sizes: "462x945"
            },
            {
              src: "/screenshots/collaboration.png",
              type: "image/png",
              sizes: "462x945"
            },
            {
              src: "/screenshots/export.png",
              type: "image/png",
              sizes: "462x945"
            }
          ]
        }
      }),
      createHtmlPlugin({
        minify: true
      })
    ],
    publicDir: "../public"
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc2NyaXB0cy93b2ZmMi93b2ZmMi12aXRlLXBsdWdpbnMuanMiLCAidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUmlzaGFiaCBQcmFzaGFyXFxcXERlc2t0b3BcXFxcYXdzIHByb2plY3RcXFxcZXhjYWxpZHJhd1xcXFxzY3JpcHRzXFxcXHdvZmYyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxSaXNoYWJoIFByYXNoYXJcXFxcRGVza3RvcFxcXFxhd3MgcHJvamVjdFxcXFxleGNhbGlkcmF3XFxcXHNjcmlwdHNcXFxcd29mZjJcXFxcd29mZjItdml0ZS1wbHVnaW5zLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9SaXNoYWJoJTIwUHJhc2hhci9EZXNrdG9wL2F3cyUyMHByb2plY3QvZXhjYWxpZHJhdy9zY3JpcHRzL3dvZmYyL3dvZmYyLXZpdGUtcGx1Z2lucy5qc1wiOy8vIGRlZmluZSBgRVhDQUxJRFJBV19BU1NFVF9QQVRIYCBhcyBhIFNTT1RcbmNvbnN0IE9TU19GT05UU19DRE4gPSBcImh0dHBzOi8vZXhjYWxpZHJhdy5ueWMzLmNkbi5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL29zcy9cIjtcbmNvbnN0IE9TU19GT05UU19GQUxMQkFDSyA9IFwiL1wiO1xuXG4vKipcbiAqIEN1c3RvbSB2aXRlIHBsdWdpbiBmb3IgYXV0by1wcmVmaXhpbmcgYEVYQ0FMSURSQVdfQVNTRVRfUEFUSGAgd29mZjIgZm9udHMgaW4gYGV4Y2FsaWRyYXctYXBwYC5cbiAqXG4gKiBAcmV0dXJucyB7aW1wb3J0KFwidml0ZVwiKS5QbHVnaW5PcHRpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzLndvZmYyQnJvd3NlclBsdWdpbiA9ICgpID0+IHtcbiAgbGV0IGlzRGV2O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJ3b2ZmMkJyb3dzZXJQbHVnaW5cIixcbiAgICBlbmZvcmNlOiBcInByZVwiLFxuICAgIGNvbmZpZyhfLCB7IGNvbW1hbmQgfSkge1xuICAgICAgaXNEZXYgPSBjb21tYW5kID09PSBcInNlcnZlXCI7XG4gICAgfSxcbiAgICB0cmFuc2Zvcm0oY29kZSwgaWQpIHtcbiAgICAgIC8vIHVzaW5nIGNvcHkgLyByZXBsYWNlIGFzIGZvbnRzIGRlZmluZWQgaW4gdGhlIGAuY3NzYCBkb24ndCBoYXZlIHRvIGJlIG1hbnVhbGx5IGNvcGllZCBvdmVyICh2aXRlL3JvbGx1cCBkb2VzIHRoaXMgYXV0b21hdGljYWxseSksXG4gICAgICAvLyBidXQgYXQgdGhlIHNhbWUgdGltZSBjYW4ndCBiZSBlYXNpbHkgcHJlZml4ZWQgd2l0aCB0aGUgYEVYQ0FMSURSQVdfQVNTRVRfUEFUSGAgb25seSBmb3IgdGhlIGBleGNhbGlkcmF3LWFwcGBcbiAgICAgIGlmICghaXNEZXYgJiYgaWQuZW5kc1dpdGgoXCIvZXhjYWxpZHJhdy9mb250cy9mb250cy5jc3NcIikpIHtcbiAgICAgICAgcmV0dXJuIGAvKiBXQVJOOiBUaGUgZm9sbG93aW5nIGNvbnRlbnQgaXMgZ2VuZXJhdGVkIGR1cmluZyBleGNhbGlkcmF3LWFwcCBidWlsZCAqL1xuXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50XCI7XG4gICAgICAgIHNyYzogdXJsKCR7T1NTX0ZPTlRTX0NETn1mb250cy9Bc3Npc3RhbnQvQXNzaXN0YW50LVJlZ3VsYXIud29mZjIpXG4gICAgICAgICAgICBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgICAgICB1cmwoLi9Bc3Npc3RhbnQtUmVndWxhci53b2ZmMikgZm9ybWF0KFwid29mZjJcIik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIHN0eWxlOiBub3JtYWw7XG4gICAgICAgIGRpc3BsYXk6IHN3YXA7XG4gICAgICB9XG5cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRcIjtcbiAgICAgICAgc3JjOiB1cmwoJHtPU1NfRk9OVFNfQ0ROfWZvbnRzL0Fzc2lzdGFudC9Bc3Npc3RhbnQtTWVkaXVtLndvZmYyKVxuICAgICAgICAgICAgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICAgICAgdXJsKC4vQXNzaXN0YW50LU1lZGl1bS53b2ZmMikgZm9ybWF0KFwid29mZjJcIik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHN0eWxlOiBub3JtYWw7XG4gICAgICAgIGRpc3BsYXk6IHN3YXA7XG4gICAgICB9XG5cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogXCJBc3Npc3RhbnRcIjtcbiAgICAgICAgc3JjOiB1cmwoJHtPU1NfRk9OVFNfQ0ROfWZvbnRzL0Fzc2lzdGFudC9Bc3Npc3RhbnQtU2VtaUJvbGQud29mZjIpXG4gICAgICAgICAgICBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgICAgICB1cmwoLi9Bc3Npc3RhbnQtU2VtaUJvbGQud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBzdHlsZTogbm9ybWFsO1xuICAgICAgICBkaXNwbGF5OiBzd2FwO1xuICAgICAgfVxuXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXNzaXN0YW50XCI7XG4gICAgICAgIHNyYzogdXJsKCR7T1NTX0ZPTlRTX0NETn1mb250cy9Bc3Npc3RhbnQvQXNzaXN0YW50LUJvbGQud29mZjIpXG4gICAgICAgICAgICBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgICAgICB1cmwoLi9Bc3Npc3RhbnQtQm9sZC53b2ZmMikgZm9ybWF0KFwid29mZjJcIik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHN0eWxlOiBub3JtYWw7XG4gICAgICAgIGRpc3BsYXk6IHN3YXA7XG4gICAgICB9YDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0RldiAmJiBpZC5lbmRzV2l0aChcImV4Y2FsaWRyYXctYXBwL2luZGV4Lmh0bWxcIikpIHtcbiAgICAgICAgcmV0dXJuIGNvZGUucmVwbGFjZShcbiAgICAgICAgICBcIjwhLS0gUExBQ0VIT0xERVI6RVhDQUxJRFJBV19BUFBfRk9OVFMgLS0+XCIsXG4gICAgICAgICAgYDxzY3JpcHQ+XG4gICAgICAgIC8vIHBvaW50IGludG8gb3VyIENETiBpbiBwcm9kLCBmYWxsYmFjayB0byByb290IChleGNhbGlkcmF3LmNvbSkgZG9tYWluIGluIGNhc2Ugb2YgaXNzdWVzXG4gICAgICAgIHdpbmRvdy5FWENBTElEUkFXX0FTU0VUX1BBVEggPSBbXG4gICAgICAgICAgXCIke09TU19GT05UU19DRE59XCIsXG4gICAgICAgICAgXCIke09TU19GT05UU19GQUxMQkFDS31cIixcbiAgICAgICAgXTtcbiAgICAgIDwvc2NyaXB0PlxuXG4gICAgICA8IS0tIFByZWxvYWQgYWxsIGRlZmF1bHQgZm9udHMgdG8gYXZvaWQgc3dhcCBvbiBpbml0IC0tPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgIGhyZWY9XCIke09TU19GT05UU19DRE59Zm9udHMvRXhjYWxpZm9udC9FeGNhbGlmb250LVJlZ3VsYXItYTg4YjcyYTI0ZmI1NGM5Zjk0ZTNiNWZkYWE3NDgxYzkud29mZjJcIlxuICAgICAgICBhcz1cImZvbnRcIlxuICAgICAgICB0eXBlPVwiZm9udC93b2ZmMlwiXG4gICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgIC8+XG4gICAgICA8IS0tIEZvciBOdW5pdG8gb25seSBwcmVsb2FkIHRoZSBsYXRpbiByYW5nZSwgd2hpY2ggc2hvdWxkIGJlIGdvb2QgZW5vdWdoIGZvciBub3cgLS0+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgaHJlZj1cIiR7T1NTX0ZPTlRTX0NETn1mb250cy9OdW5pdG8vTnVuaXRvLVJlZ3VsYXItWFJYSTNJNkxpMDFCS29maU9jNXd0bFoyZGk4SERJa2hkVFEzajZ6YlhXamdlZy53b2ZmMlwiXG4gICAgICAgIGFzPVwiZm9udFwiXG4gICAgICAgIHR5cGU9XCJmb250L3dvZmYyXCJcbiAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICBocmVmPVwiJHtPU1NfRk9OVFNfQ0ROfWZvbnRzL0NvbWljU2hhbm5zL0NvbWljU2hhbm5zLVJlZ3VsYXItMjc5YTdiMzE3ZDEyZWI4OGRlMDYxNjdiZDY3MmI0YjQud29mZjJcIlxuICAgICAgICBhcz1cImZvbnRcIlxuICAgICAgICB0eXBlPVwiZm9udC93b2ZmMlwiXG4gICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgIC8+XG4gICAgYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUmlzaGFiaCBQcmFzaGFyXFxcXERlc2t0b3BcXFxcYXdzIHByb2plY3RcXFxcZXhjYWxpZHJhd1xcXFxleGNhbGlkcmF3LWFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUmlzaGFiaCBQcmFzaGFyXFxcXERlc2t0b3BcXFxcYXdzIHByb2plY3RcXFxcZXhjYWxpZHJhd1xcXFxleGNhbGlkcmF3LWFwcFxcXFx2aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1Jpc2hhYmglMjBQcmFzaGFyL0Rlc2t0b3AvYXdzJTIwcHJvamVjdC9leGNhbGlkcmF3L2V4Y2FsaWRyYXctYXBwL3ZpdGUuY29uZmlnLm10c1wiO2ltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHN2Z3JQbHVnaW4gZnJvbSBcInZpdGUtcGx1Z2luLXN2Z3JcIjtcbmltcG9ydCB7IFZpdGVFanNQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tZWpzXCI7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xuaW1wb3J0IGNoZWNrZXIgZnJvbSBcInZpdGUtcGx1Z2luLWNoZWNrZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4taHRtbFwiO1xuaW1wb3J0IFNpdGVtYXAgZnJvbSBcInZpdGUtcGx1Z2luLXNpdGVtYXBcIjtcbmltcG9ydCB7IHdvZmYyQnJvd3NlclBsdWdpbiB9IGZyb20gXCIuLi9zY3JpcHRzL3dvZmYyL3dvZmYyLXZpdGUtcGx1Z2luc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICAvLyBUbyBsb2FkIC5lbnYgdmFyaWFibGVzXG4gIGNvbnN0IGVudlZhcnMgPSBsb2FkRW52KG1vZGUsIGAuLi9gKTtcbiAgLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbiAgcmV0dXJuIHtcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHBvcnQ6IE51bWJlcihlbnZWYXJzLlZJVEVfQVBQX1BPUlQgfHwgMzAwMCksXG4gICAgICAvLyBvcGVuIHRoZSBicm93c2VyXG4gICAgICBvcGVuOiB0cnVlLFxuICAgIH0sXG4gICAgLy8gV2UgbmVlZCB0byBzcGVjaWZ5IHRoZSBlbnZEaXIgc2luY2Ugbm93IHRoZXJlIGFyZSBub1xuICAgIC8vbW9yZSBsb2NhdGVkIGluIHBhcmFsbGVsIHdpdGggdGhlIHZpdGUuY29uZmlnLnRzIGZpbGUgYnV0IGluIHBhcmVudCBkaXJcbiAgICBlbnZEaXI6IFwiLi4vXCIsXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9eQGV4Y2FsaWRyYXdcXC9jb21tb24kLyxcbiAgICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKFxuICAgICAgICAgICAgX19kaXJuYW1lLFxuICAgICAgICAgICAgXCIuLi9wYWNrYWdlcy9jb21tb24vc3JjL2luZGV4LnRzXCIsXG4gICAgICAgICAgKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9eQGV4Y2FsaWRyYXdcXC9jb21tb25cXC8oLio/KS8sXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vcGFja2FnZXMvY29tbW9uL3NyYy8kMVwiKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9eQGV4Y2FsaWRyYXdcXC9lbGVtZW50JC8sXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShcbiAgICAgICAgICAgIF9fZGlybmFtZSxcbiAgICAgICAgICAgIFwiLi4vcGFja2FnZXMvZWxlbWVudC9zcmMvaW5kZXgudHNcIixcbiAgICAgICAgICApLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmluZDogL15AZXhjYWxpZHJhd1xcL2VsZW1lbnRcXC8oLio/KS8sXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vcGFja2FnZXMvZWxlbWVudC9zcmMvJDFcIiksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAvXkBleGNhbGlkcmF3XFwvZXhjYWxpZHJhdyQvLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoXG4gICAgICAgICAgICBfX2Rpcm5hbWUsXG4gICAgICAgICAgICBcIi4uL3BhY2thZ2VzL2V4Y2FsaWRyYXcvaW5kZXgudHN4XCIsXG4gICAgICAgICAgKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9eQGV4Y2FsaWRyYXdcXC9leGNhbGlkcmF3XFwvKC4qPykvLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uL3BhY2thZ2VzL2V4Y2FsaWRyYXcvJDFcIiksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAvXkBleGNhbGlkcmF3XFwvbWF0aCQvLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uL3BhY2thZ2VzL21hdGgvc3JjL2luZGV4LnRzXCIpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmluZDogL15AZXhjYWxpZHJhd1xcL21hdGhcXC8oLio/KS8sXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vcGFja2FnZXMvbWF0aC9zcmMvJDFcIiksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAvXkBleGNhbGlkcmF3XFwvdXRpbHMkLyxcbiAgICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKFxuICAgICAgICAgICAgX19kaXJuYW1lLFxuICAgICAgICAgICAgXCIuLi9wYWNrYWdlcy91dGlscy9zcmMvaW5kZXgudHNcIixcbiAgICAgICAgICApLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmluZDogL15AZXhjYWxpZHJhd1xcL3V0aWxzXFwvKC4qPykvLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uL3BhY2thZ2VzL3V0aWxzL3NyYy8kMVwiKSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgb3V0RGlyOiBcImJ1aWxkXCIsXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGFzc2V0RmlsZU5hbWVzKGNodW5rSW5mbykge1xuICAgICAgICAgICAgaWYgKGNodW5rSW5mbz8ubmFtZT8uZW5kc1dpdGgoXCIud29mZjJcIikpIHtcbiAgICAgICAgICAgICAgY29uc3QgZmFtaWx5ID0gY2h1bmtJbmZvLm5hbWUuc3BsaXQoXCItXCIpWzBdO1xuICAgICAgICAgICAgICByZXR1cm4gYGZvbnRzLyR7ZmFtaWx5fS9bbmFtZV1bZXh0bmFtZV1gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gXCJhc3NldHMvW25hbWVdLVtoYXNoXVtleHRuYW1lXVwiO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gQ3JlYXRpbmcgc2VwYXJhdGUgY2h1bmsgZm9yIGxvY2FsZXMgZXhjZXB0IGZvciBlbiBhbmQgcGVyY2VudGFnZXMuanNvbiBzbyB0aGV5XG4gICAgICAgICAgLy8gY2FuIGJlIGNhY2hlZCBhdCBydW50aW1lIGFuZCBub3QgbWVyZ2VkIHdpdGhcbiAgICAgICAgICAvLyBhcHAgcHJlY2FjaGUuIGVuLmpzb24gYW5kIHBlcmNlbnRhZ2VzLmpzb24gYXJlIG5lZWRlZCBmb3IgZmlyc3QgbG9hZFxuICAgICAgICAgIC8vIG9yIGZhbGxiYWNrIGhlbmNlIG5vdCBjbHViYmluZyB3aXRoIGxvY2FsZXMgc28gZmlyc3QgbG9hZCBmb2xsb3dlZCBieSBvZmZsaW5lIG1vZGUgd29ya3MgZmluZS4gVGhpcyBpcyBob3cgQ1JBIHVzZWQgdG8gd29yayB0b28uXG4gICAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGlkLmluY2x1ZGVzKFwicGFja2FnZXMvZXhjYWxpZHJhdy9sb2NhbGVzXCIpICYmXG4gICAgICAgICAgICAgIGlkLm1hdGNoKC9lbi5qc29ufHBlcmNlbnRhZ2VzLmpzb24vKSA9PT0gbnVsbFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaWQuaW5kZXhPZihcImxvY2FsZXMvXCIpO1xuICAgICAgICAgICAgICAvLyBUYWtpbmcgdGhlIHN1YnN0cmluZyBhZnRlciBcImxvY2FsZXMvXCJcbiAgICAgICAgICAgICAgcmV0dXJuIGBsb2NhbGVzLyR7aWQuc3Vic3RyaW5nKGluZGV4ICsgOCl9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICAgIC8vIGRvbid0IGF1dG8taW5saW5lIHNtYWxsIGFzc2V0cyAoaS5lLiBmb250cyBob3N0ZWQgb24gQ0ROKVxuICAgICAgYXNzZXRzSW5saW5lTGltaXQ6IDAsXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBTaXRlbWFwKHtcbiAgICAgICAgaG9zdG5hbWU6IFwiaHR0cHM6Ly9leGNhbGlkcmF3LmNvbVwiLFxuICAgICAgICBvdXREaXI6IFwiYnVpbGRcIixcbiAgICAgICAgY2hhbmdlZnJlcTogXCJtb250aGx5XCIsXG4gICAgICAgIC8vIGl0cyBzdGF0aWMgaW4gcHVibGljIGZvbGRlclxuICAgICAgICBnZW5lcmF0ZVJvYm90c1R4dDogZmFsc2UsXG4gICAgICB9KSxcbiAgICAgIHdvZmYyQnJvd3NlclBsdWdpbigpLFxuICAgICAgcmVhY3QoKSxcbiAgICAgIGNoZWNrZXIoe1xuICAgICAgICB0eXBlc2NyaXB0OiB0cnVlLFxuICAgICAgICBlc2xpbnQ6XG4gICAgICAgICAgZW52VmFycy5WSVRFX0FQUF9FTkFCTEVfRVNMSU5UID09PSBcImZhbHNlXCJcbiAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICA6IHsgbGludENvbW1hbmQ6ICdlc2xpbnQgXCIuLyoqLyoue2pzLHRzLHRzeH1cIicgfSxcbiAgICAgICAgb3ZlcmxheToge1xuICAgICAgICAgIGluaXRpYWxJc09wZW46IGVudlZhcnMuVklURV9BUFBfQ09MTEFQU0VfT1ZFUkxBWSA9PT0gXCJmYWxzZVwiLFxuICAgICAgICAgIGJhZGdlU3R5bGU6IFwibWFyZ2luLWJvdHRvbTogNHJlbTsgbWFyZ2luLWxlZnQ6IDFyZW1cIixcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgc3ZnclBsdWdpbigpLFxuICAgICAgVml0ZUVqc1BsdWdpbigpLFxuICAgICAgVml0ZVBXQSh7XG4gICAgICAgIHJlZ2lzdGVyVHlwZTogXCJhdXRvVXBkYXRlXCIsXG4gICAgICAgIGRldk9wdGlvbnM6IHtcbiAgICAgICAgICAvKiBzZXQgdGhpcyBmbGFnIHRvIHRydWUgdG8gZW5hYmxlIGluIERldmVsb3BtZW50IG1vZGUgKi9cbiAgICAgICAgICBlbmFibGVkOiBlbnZWYXJzLlZJVEVfQVBQX0VOQUJMRV9QV0EgPT09IFwidHJ1ZVwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgICAvLyBkb24ndCBwcmVjYWNoZSBmb250cywgbG9jYWxlcyBhbmQgc2VwYXJhdGUgY2h1bmtzXG4gICAgICAgICAgZ2xvYklnbm9yZXM6IFtcbiAgICAgICAgICAgIFwiZm9udHMuY3NzXCIsXG4gICAgICAgICAgICBcIioqL2xvY2FsZXMvKipcIixcbiAgICAgICAgICAgIFwic2VydmljZS13b3JrZXIuanNcIixcbiAgICAgICAgICAgIFwiKiovKi5jaHVuay0qLmpzXCIsXG4gICAgICAgICAgXSxcbiAgICAgICAgICBydW50aW1lQ2FjaGluZzogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1cmxQYXR0ZXJuOiBuZXcgUmVnRXhwKFwiLisud29mZjJcIiksXG4gICAgICAgICAgICAgIGhhbmRsZXI6IFwiQ2FjaGVGaXJzdFwiLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lOiBcImZvbnRzXCIsXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgbWF4RW50cmllczogMTAwMCxcbiAgICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDkwLCAvLyA5MCBkYXlzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYWNoZWFibGVSZXNwb25zZToge1xuICAgICAgICAgICAgICAgICAgLy8gMCB0byBjYWNoZSBcIm9wYXF1ZVwiIHJlc3BvbnNlcyBmcm9tIGNyb3NzLW9yaWdpbiByZXF1ZXN0cyAoaS5lLiBDRE4pXG4gICAgICAgICAgICAgICAgICBzdGF0dXNlczogWzAsIDIwMF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVybFBhdHRlcm46IG5ldyBSZWdFeHAoXCJmb250cy5jc3NcIiksXG4gICAgICAgICAgICAgIGhhbmRsZXI6IFwiU3RhbGVXaGlsZVJldmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZTogXCJmb250c1wiLFxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb246IHtcbiAgICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDUwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1cmxQYXR0ZXJuOiBuZXcgUmVnRXhwKFwibG9jYWxlcy9bXi9dKy5qc1wiKSxcbiAgICAgICAgICAgICAgaGFuZGxlcjogXCJDYWNoZUZpcnN0XCIsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWU6IFwibG9jYWxlc1wiLFxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb246IHtcbiAgICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDUwLFxuICAgICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzAsIC8vIDw9PSAzMCBkYXlzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVybFBhdHRlcm46IG5ldyBSZWdFeHAoXCIuY2h1bmstLisuanNcIiksXG4gICAgICAgICAgICAgIGhhbmRsZXI6IFwiQ2FjaGVGaXJzdFwiLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lOiBcImNodW5rXCIsXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgbWF4RW50cmllczogNTAsXG4gICAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiA5MCwgLy8gPD09IDkwIGRheXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBtYW5pZmVzdDoge1xuICAgICAgICAgIHNob3J0X25hbWU6IFwiRXhjYWxpZHJhd1wiLFxuICAgICAgICAgIG5hbWU6IFwiRXhjYWxpZHJhd1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJFeGNhbGlkcmF3IGlzIGEgd2hpdGVib2FyZCB0b29sIHRoYXQgbGV0cyB5b3UgZWFzaWx5IHNrZXRjaCBkaWFncmFtcyB0aGF0IGhhdmUgYSBoYW5kLWRyYXduIGZlZWwgdG8gdGhlbS5cIixcbiAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6IFwiYW5kcm9pZC1jaHJvbWUtMTkyeDE5Mi5wbmdcIixcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiBcImFwcGxlLXRvdWNoLWljb24ucG5nXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICAgIHNpemVzOiBcIjE4MHgxODBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNyYzogXCJmYXZpY29uLTMyeDMyLnBuZ1wiLFxuICAgICAgICAgICAgICBzaXplczogXCIzMngzMlwiLFxuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiBcImZhdmljb24tMTZ4MTYucG5nXCIsXG4gICAgICAgICAgICAgIHNpemVzOiBcIjE2eDE2XCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhcnRfdXJsOiBcIi9cIixcbiAgICAgICAgICBpZDogXCJleGNhbGlkcmF3XCIsXG4gICAgICAgICAgZGlzcGxheTogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgICAgdGhlbWVfY29sb3I6IFwiIzEyMTIxMlwiLFxuICAgICAgICAgIGJhY2tncm91bmRfY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgIGZpbGVfaGFuZGxlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYWN0aW9uOiBcIi9cIixcbiAgICAgICAgICAgICAgYWNjZXB0OiB7XG4gICAgICAgICAgICAgICAgXCJhcHBsaWNhdGlvbi92bmQuZXhjYWxpZHJhdytqc29uXCI6IFtcIi5leGNhbGlkcmF3XCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNoYXJlX3RhcmdldDoge1xuICAgICAgICAgICAgYWN0aW9uOiBcIi93ZWItc2hhcmUtdGFyZ2V0XCIsXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgZmlsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImZpbGVcIixcbiAgICAgICAgICAgICAgICAgIGFjY2VwdDogW1xuICAgICAgICAgICAgICAgICAgICBcImFwcGxpY2F0aW9uL3ZuZC5leGNhbGlkcmF3K2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiLmV4Y2FsaWRyYXdcIixcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzY3JlZW5zaG90czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6IFwiL3NjcmVlbnNob3RzL3ZpcnR1YWwtd2hpdGVib2FyZC5wbmdcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiNDYyeDk0NVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiBcIi9zY3JlZW5zaG90cy93aXJlZnJhbWUucG5nXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICAgIHNpemVzOiBcIjQ2Mng5NDVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNyYzogXCIvc2NyZWVuc2hvdHMvaWxsdXN0cmF0aW9uLnBuZ1wiLFxuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgICBzaXplczogXCI0NjJ4OTQ1XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6IFwiL3NjcmVlbnNob3RzL3NoYXBlcy5wbmdcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiNDYyeDk0NVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiBcIi9zY3JlZW5zaG90cy9jb2xsYWJvcmF0aW9uLnBuZ1wiLFxuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgICBzaXplczogXCI0NjJ4OTQ1XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6IFwiL3NjcmVlbnNob3RzL2V4cG9ydC5wbmdcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiNDYyeDk0NVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBjcmVhdGVIdG1sUGx1Z2luKHtcbiAgICAgICAgbWluaWZ5OiB0cnVlLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBwdWJsaWNEaXI6IFwiLi4vcHVibGljXCIsXG4gIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBLFFBQU0sZ0JBQWdCO0FBQ3RCLFFBQU0scUJBQXFCO0FBTzNCLFdBQU8sUUFBUSxxQkFBcUIsTUFB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
