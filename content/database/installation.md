---
title: Installation
---

This section details some of the methods of installing and accessing the Shabad OS database. There are 2 officially supported release formats ([SQLite file](https://github.com/ShabadOS/database/releases) and [npm package](https://www.npmjs.com/package/@shabados/database)), and a REST API provided by [GurbaniNow](https://github.com/GurbaniNow/api).

:::tip
**Remember, never modify any existing content of the database.** If there is a mistake, please file an issue on [GitHub](https://github.com/shabados/database/issues).
The only exception to this rule is that tables or data that you do not require may be dropped to save storage space in constrained environments.
:::

## SQLite

The SQLite3 database can be downloaded from [GitHub Releases](https://github.com/ShabadOS/database/releases), and follows the [schema](schema) described further on.

These releases follow the [semantic versioning](https://semver.org/) format, so it is possible to download an updated database without breaking your application.

Running `SELECT * FROM Lines ORDER BY order_id LIMIT 100` will return the first 100 lines that the database contains, in the correct order.

Examples of useful and common queries can be found in the [usage](usage) section.

## npm

The database is packaged as an [npm module](https://www.npmjs.com/package/@shabados/database). To install it, run `npm install @shabados/database`. Importing the package will give you access to the location of the database

This package uses the same [semantic versioning](https://semver.org/) format as the SQLite database, so running `npm update` will allow you to retrieve compatible database corrections without breaking your application. Additionally, there is a [Javascript API](usage) that can be imported from the package, allowing you to leverage the database using wrapper functions, without the need to write SQL.

It also exposes the path of the SQLite database, which can be used directly, if desired.

For more usage instructions, see [usage](usage).

## GurbaniNow API

[GurbaniNow](https://gurbaniNow.com) has teamed up with Shabad OS to provide the most accurate, accessible, and transparent Gurbani database. GurbaniNow's latest [v3 API](https://github.com/GurbaniNow/api) is powered by the Shabad OS database, for those who wish to access Gurbani through an online REST interface. The endpoint is `https://api.gurbaninow.com`. See their [GitHub](https://github.com/GurbaniNow/api) for more information.
