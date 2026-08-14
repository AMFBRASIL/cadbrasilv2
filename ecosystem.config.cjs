/** PM2 — produção no VPS (aaPanel). */
module.exports = {
  apps: [
    {
      name: "cadbrasilv2",
      cwd: "/www/wwwroot/cadbrasilv2",
      script: ".output/server/index.mjs",
      interpreter: "node",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: "3000",
      },
    },
  ],
};
