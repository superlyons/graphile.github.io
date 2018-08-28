---
layout: page
path: /postgraphile/quick-start-guide/
title: Quick Start Guide
---

# Quick Start Guide

This quick start guide will walk you through spinning up your first PostGraphile server, including installing the prerequisites such as Node and PostgreSQL.

这个快速入门指南将引导您完成您的第一个PostGraphile服务器，包括安装Node和PostgreSQL等先决条件。

## Table of Contents
  - [Install Node](#install-node)
  - [Install PostgreSQL](#install-postgresql)
  - [Create a Database](#create-a-database)
  - [Install PostGraphile](#install-postgraphile)

## Install Node
You need to be running Node.js v8.6 or higher to run PostGraphile. You can check your current version of Node by running `node --version`. If you're running a recent version you can skip this section.

您需要运行Node.js v8.6或更高版本才能运行PostGraphile。您可以通过运行来检查当前版本的Node node --version。如果您运行的是最新版本，则可以跳过此部分。

There's many ways of installing node; if you're on macOS you might prefer installing with [homebrew](https://brew.sh/) via `brew install node`; if you're on a unix-based system you might like to use [`nvm`](https://github.com/creationix/nvm). Failing these, if you're using OS X or Windows, use one of the installers from the [Node.js download page](https://nodejs.org/en/download/). Make sure you select the version labelled LTS. Linux users can scroll down the page and find the version that works with their system.

安装Node有多种方式;如果你在macOS上，你可能更喜欢通过`brew install node`安装[homebrew](https://brew.sh/);如果您使用的是基于unix的系统，您可能会使用[`nvm`](https://github.com/creationix/nvm)。如果没有这些，如果您使用的是OS X或Windows，请使用[Node.js 下载页面](https://nodejs.org/en/download/)中的一个安装程序。确保选择标签为LTS的版本。Linux用户可以向下滚动页面，找到与他们系统兼容的版本。

Once installed run `node -v` in a terminal to check your version.

安装完毕后在终端中运行`node -v`以检查您的版本。

## Install PostgreSQL
We need a PostgreSQL database to connect to. You can skip this section if you already have PostgreSQL version `9.6.0` or higher installed.

我们需要一个PostgreSQL数据库来连接。如果您已经安装了PostgreSQL版本' 9.6.0 '或更高版本，则可以跳过此部分。

PostgreSQL does not need to be installed on the same machine, but you'll have a better development experience if it is. Try and minimise database connection latency! If you do not use a local PostgreSQL server then you'll need to modify the commands that follow to account for this.

PostgreSQL不需要安装在同一台机器上，但如果安装了，您将获得更好的开发体验。尽量减少数据库连接延迟!如果您不使用本地PostgreSQL服务器，那么您需要修改后面的命令来说明这一点。

If you are running on macOS, it is recommended that you install and use [PostgreSQL.app](http://postgresapp.com/). If you are on another platform, go to the [PostgreSQL download page](https://www.postgresql.org/download/) to pick up a copy of PostgreSQL. We recommend using a version of PostgreSQL higher than `9.6.0`. You can read more about the reasoning behind this requirement [in our documentation](/postgraphile/requirements/).

如果您在macOS上运行，建议您安装和使用[PostgreSQL.app](http://postgresapp.com/)。如果您在另一个平台上，请访问[PostgreSQL下载页面](https://www.postgresql.org/download/)以获取PostgreSQL的副本。我们建议使用一个高于`9.6.0`版本的PostgreSQL。您可以在[我们的文档](/postgraphile/requirements/)中了解更多关于此需求背后的原因。

After that, make sure your copy of PostgreSQL is running locally on `postgres://localhost:5432` by running `psql` in a terminal. 5432 is the default port for local PostgreSQL databases and is used by many PostgreSQL tools (since this is the default you can omit this from the connection string if you like)

在此之后，通过在终端上运行`psql`，确保PostgreSQL副本在本地`postgres://localhost:5432`上运行。5432是本地PostgreSQL数据库的默认端口，许多PostgreSQL工具都使用这个端口(因为这是默认端口，如果愿意，可以在连接字符串中省略它)

If you get something like this returned then PostgreSQL is successfully installed:

如果你得到这样的返回，那么PostgreSQL成功安装:

```bash
$ psql "postgres://localhost:5432"

psql: FATAL:  database "username" does not exist
```

however, if you receive a "Connection refused" error then that indicates your PostgreSQL server is not running, or not reachable:

然而，如果您收到一个“连接拒绝”错误，那么表明您的PostgreSQL服务器没有运行，或无法到达:

```bash
$ psql "postgres://localhost:5432"

psql: could not connect to server: Connection refused
```

If you want to connect to a different database within PostgreSQL, just add the database name to the end of the connection string:

如果您想在PostgreSQL中连接到另一个数据库，只需将数据库名添加到连接字符串的末尾:

```bash
$ psql postgres://localhost:5432/testdb # Connects to the `testdb` database at `postgres://localhost:5432`
$ psql postgres://somehost:2345/somedb  # Connects to the `somedb` database at `postgres://somehost:2345`
```

Read the documentation on [PostgreSQL connection strings](https://www.postgresql.org/docs/9.6/static/libpq-connect.html#LIBPQ-CONNSTRING) to learn more about alternative formats (including using a password).

阅读有关[PostgreSQL连接字符串](https://www.postgresql.org/docs/9.6/static/libpq-connect.html#LIBPQ-CONNSTRING)的文档，了解更多关于替代格式(包括使用密码)的信息。

## Create a Database

Next, create a database. You can do this by using the terminal:

接下来，创建一个数据库。您可以使用终端执行此操作：

```
$ createdb mydb
```

This will create a PostgreSQL database called "mydb". You can read more about this on the [PostgreSQL Documentation site](https://www.postgresql.org/docs/9.6/static/tutorial-createdb.html). Now you can run `psql` with your database URL and get a SQL prompt:

这将创建一个名为“mydb”的PostgreSQL数据库。您可以在[PostgreSQL文档网站](https://www.postgresql.org/docs/9.6/static/tutorial-createdb.html)上了解更多信息。现在，您可以运行' psql '与您的数据库URL，并得到一个SQL提示:

```bash
$ psql "postgres://localhost:5432/mydb"

psql (9.6.*)
Type "help" for help.

=#
```

Run the following query to make sure things are working smoothly:

运行以下查询以确保工作顺利:

```
=# select 1 + 1 as two;
 two
-----
   2
(1 row)

=#
```

## Install PostGraphile
It is easy to install PostGraphile with [npm](https://docs.npmjs.com/getting-started/installing-node):

使用[npm](https://docs.npmjs.com/getting-started/installing-node)很容易安装PostGraphile ：

```
$ npm install -g postgraphile
```

To run PostGraphile, you’ll use the same URL that you used for `psql` with the database name added:

要运行PostGraphile，您将使用与`psql`相同的URL，并添加数据库名称:

```bash
# Connect to the `mydb` database within the PostgreSQL at localhost port 5432
$ postgraphile -c "postgres://localhost:5432/mydb"

# Connect to a database that requires SSL/TLS
$ postgraphile -c "postgres://securehost:5432/db?ssl=1"

# Connect to the `somedb` database within the PostgreSQL at somehost port 2345
$ postgraphile -c "postgres://somehost:2345/somedb"
```

You can also run PostGraphile with the watch flag:

您还可以使用watch标志运行PostGraphile：

```bash
$ postgraphile -c "postgres://localhost:5432/mydb" --watch
```

With the `--watch` flag, PostGraphile will automatically update your GraphQL API whenever the PostgreSQL schemas you are introspecting change.

使用 `—watch` 标志，PostGraphile将在您内省的PostgreSQL模式发生更改时自动更新GraphQL API。

Running PostGraphile will give you two endpoints:

运行PostGraphile将给您两个端点:

```
  ‣ GraphQL endpoint served at http://localhost:5000/graphql
  ‣ GraphiQL endpoint served at http://localhost:5000/graphiql
```

The first endpoint is for your application to talk to; the second endpoint can be opened in a web browser to give you access to your database through `GraphiQL` - [a visual GraphQL explorer](https://github.com/graphql/graphiql).

第一个端点是您的应用程序与之交谈; 第二端点可以在Web浏览器中打开，让您通过`GraphiQL`访问你的数据库-[a visual GraphQL explorer](https://github.com/graphql/graphiql).


Well done — you've got PostGraphile up and running!

干得好 - 你已经开始运行PostGraphile了！
