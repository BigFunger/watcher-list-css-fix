# watcher-list-css-fix

> Plugin to allow users to apply custom styles to the watch list columns

---

## Summary

Injects a `less` file and some stub styles to address the column size issue on the Watch List page. To make changes to these styles, edit the [public/watcher-list-fix.less](https://github.com/BigFunger/watcher-list-css-fix/blob/master/public/watcher-list-fix.less) file in the plugin. 

Once the styles are how you like them, build the plugin using `npm run build` and then install the plugin into Kibana.

---

## development

See the [kibana contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md) for instructions setting up your development environment. Once you have completed that, use the following npm tasks.

  - `npm start`

    Start kibana and have it include this plugin

  - `npm start -- --config kibana.yml`

    You can pass any argument that you would normally send to `bin/kibana` by putting them after `--` when running `npm start`

  - `npm run build`

    Build a distributable archive

For more information about any of these commands run `npm run ${task} -- --help`.
