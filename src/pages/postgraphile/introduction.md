---
layout: page
path: /postgraphile/introduction/
title: PostGraphile Introduction
---

## Introduction

<p class='lead'>
PostGraphile (formerly PostGraphQL) builds a powerful, extensible and
performant GraphQL API from a PostgreSQL schema in seconds; saving you
weeks if not months of development time.
</p>
<p class='lead'>
PostGraphile(以前称为PostGraphQL)构建了一个强大的、可扩展的和
PostgreSQL schema 的高性能 GraphQL API;拯救你
几个星期甚至几个月的开发时间。
</p>

_If you are new to GraphQL then I recommend you read through the official
introduction to GraphQL [here](https://graphql.org/learn/) before continuing
through the PostGraphile documentation._

_如果您是GraphQL的新手，那么我建议您在继续之前通读一下官方文档，介绍GraphQL[这里](https://graphql.org/learn/)_


If you already use PostgreSQL then you understand the value that a strongly
typed and well defined schema can bring to application development, and GraphQL
is the perfect match for this technology when it comes to making your data
layer accessible to your frontend application developers (or even API
clients!). Why duplicate your authorization and business logic in a custom API
when you can leverage the tried and tested capabilities built into [the worlds
most advanced open source database](https://www.postgresql.org/)?

如果您已经使用PostgreSQL，那么您就可以理解强类型和定义良好的模式可以为应用程序开发带来的价值，而GraphQL是您的前端应用程序开发人员可以访问数据层时的完美匹配（甚至是API客户端！）。当您可以利用[世界上最先进的开源数据库](https://www.postgresql.org/)中内置的经过试验和测试的功能时，为什么要在自定义API中复制授权和业务逻辑？

By combining powerful features such as PostgreSQL's [role-based grant
system](https://www.postgresql.org/docs/9.6/static/user-manag.html) and
[row-level security
policies](https://www.postgresql.org/docs/9.6/static/ddl-rowsecurity.html) with
Graphile-Build's advanced [GraphQL look-ahead](/graphile-build/look-ahead/) and
[plugin expansion](/graphile-build/plugins/) technologies, PostGraphile ensures
your generated schema is secure, performant and extensible.

通过将PostgreSQL [基于角色的授权系统](https://www.postgresql.org/docs/9.6/static/user-manag.html) 和 [行级安全策略](https://www.postgresql.org/docs/9.6/static/ddl-rowsecurity.html)等强大功能与Graphile-Build的高级[GraphQL预测](/graphile-build/look-ahead/)和 [插件扩展](/graphile-build/plugins/)技术相结合，PostGraphile可确保您生成的架构安全，高效且可扩展。

Some of the features we offer:

我们提供的一些功能：

- [Great performance](/postgraphile/performance/) - no N+1 query issues
- [出色的性能](/postgraphile/performance/) - 没有N + 1查询问题
- [Connections](/postgraphile/connections/) for easy pagination and Relay support
- [链接](/postgraphile/connections/) 方便分页(pagination) 并 支持中继(Relay)
- [Auto-discovered relations](/postgraphile/relations/) e.g. `userByAuthorId`
- [自动发现的关系](/postgraphile/relations/) e.g. `userByAuthorId`
- [Automatic CRUD mutations](/postgraphile/crud-mutations/) e.g. `updatePost`
- [自动创建CRUD mutations](/postgraphile/crud-mutations/) e.g. `updatePost`
- [Computed columns](/postgraphile/computed-columns/) allowing easy expansion of your API
- [计算字段|列](/postgraphile/computed-columns/) 允许轻松扩展API
- [Custom query procedures](/postgraphile/custom-queries/) enabling arbitrary SQL queries
- [自定义查询过程](/postgraphile/custom-queries/) 使任意SQL查询
- [Custom mutation procedures](/postgraphile/custom-mutations/) enabling complex changes to be exposed simply
- [自定义 mutation 过程](/postgraphile/custom-mutations/) 允许简单地公开复杂的更改

The easiest way to get started is with the [CLI
interface](/postgraphile/usage-cli/); if you have `npx` installed you can try
it out with:

最简单的入门方法是使用[CLI界面](/postgraphile/usage-cli/) ; 如果您已npx安装，可以尝试使用：

```
npx postgraphile -c postgres://user:pass@localhost/mydb -a -j
```

(replacing user, pass and mydb with your PostgreSQL username, password and the name of your database)

（用您的PostgreSQL用户名，密码和数据库名称替换user，pass和mydb）
