export default function (kibana) {
  return new kibana.Plugin({
    name: 'watcher-list-css-fix',
    uiExports: {
      hacks: [
        'plugins/watcher-list-css-fix/hack'
      ]
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    }
  });
}
