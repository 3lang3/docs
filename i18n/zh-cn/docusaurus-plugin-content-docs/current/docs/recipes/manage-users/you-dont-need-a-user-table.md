---
sidebar_position: 3
---

# 你不再需要用户（user）数据表

## 标识用户

我们推荐使用 `user.id` 来标识用户，因为我们保证每个用户都有一个唯一的非空 `id` 属性。

另外，`username`、`primary_email` 和 `primary_phone` 也是唯一属性。但是它们可能为空（`null`)。如果想使用这几个属性来标识用户，务必记得处理 `null` 的情况。

## 为何不需要用户（user）数据表

在准备使用 Logto 作为身份解决方案时，你可能会开始考虑如何管理用户信息以及用户相关的其他信息。

如果使用传统方法，开发者通常会在数据库创建一个用户（user）表用于保存用户基本信息和其他相关信息，然后在其他的表中创建一个多对一的关联关系，指向用户表。对于外部身份提供商，例如 Google，则会创建一个名为 `google_id` 的列，从而实现 "使用 Google 登录" 的身份关联。那么对于 Logto，你可能也想创建一个 `logto_id` 列，但这不是一个很好的方案，因为 Logto 不只是一个社交登录提供商，它是一个管理所有用户相关信息的解决方案。

有了 Logto, **你不再需要用户数据表**。

这是一个常见的方案（使用 Logto）：

不再考虑用户表，直接把用户信息保存在 Logto 中：

1. 在其他表中创建 `user_id` 列，用于保存来自 Logto 的 `user.id`，参考前一章 [标识用户](#identify-user)。
2. 使用 Logto 的「[管理 API](./management-api.md)」完成增删改查操作：创建和更新用户，获取用户详情，获取用户列表等等。
3. 保存用户的额外信息到自定义数据（`customData`）中。查看这个链接以获取更多信息：[用户自定义数据](../../references/users/README.md)。

至此，Logto 取代了「用户表」的作用。

举个例子，你有一个「在线商店」应用，使用 Logto 作为身份服务，并希望实现两个功能：

1. 保存用户偏好信息到云端。
2. 对用户进行分组权限管理。

使用自定义数据（`customData`）可以很快的实现这些功能，可以使用如下的数据结构：

```json
{
  "appearenceMode": "DarkMode",
  "role": "customer"
}
```

:::caution
Logto 暂时不支持使用 `join` 或其他复杂的语句查询用户数据。在这种情况下，你应该添加一个缓存层或使用数据库的用户表。
:::
