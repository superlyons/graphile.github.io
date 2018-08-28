---
layout: page
path: /postgraphile/examples/
title: PostGraphile examples
showExamples: true
---

## PostGraphile GraphQL examples

_If you are new to GraphQL then I recommend you read through the official
introduction to GraphQL [here](https://graphql.org/learn/) before continuing
through the PostGraphile documentation._

_如果你是GraphQL的新手那么我们建议你查看GraphQL官方文档[这里](https://graphql.org/learn/)后再继续_

Below you'll find the result of running various GraphQL queries against the
[examples repo schema](https://github.com/graphile/examples/tree/master/db).
This is intended to be an introduction and quick reference, for full
information please use the documentation links.

下面您将看到对[examples repo schema](https://github.com/graphile/examples/tree/master/db)(PostGraphile提供的一个PG数据库实例)运行各种GraphQL查询的结果, 这是一个介绍和快速参考，有关完整的信息请使用文档链接。

Please be aware that these examples use
[@graphile-contrib/pg-simplify-inflector](https://github.com/graphile-contrib/pg-simplify-inflector)
plugin to simplify the field names over the defaults. You can use this via

请注意，这些示例使用了[@graphile-contrib/pg-simplify-inflector](https://github.com/graphile-contrib/pg-simplify-inflector)插件来简化默认的字段名。你可以通过

```
yarn add postgraphile @graphile-contrib/pg-simplify-inflector
yarn postgraphile --append-plugins @graphile-contrib/pg-simplify-inflector
```


