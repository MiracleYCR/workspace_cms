import path from "path";

export function generateRoutes(routes, basePath = "/", prefixTitle = []) {
  let result = [];

  for (const route of routes) {
    const data = {
      path: path.resolve(basePath, route.path),
      title: [...prefixTitle],
    };

    // 当前存在 meta 时, 使用 i18n 解析,  动态路由不允许被检索
    const regex = /.*\/:.*/;
    if (route.meta && route.meta.title && !regex.exec(route.path)) {
      const i18nTitle = route.meta.title;
      data.title = [...data.title, i18nTitle];
      result.push(data);
    }

    // 存在 children
    if (route.children) {
      const tempRoutes = generateRoutes(route.children, data.path, data.title);

      if (tempRoutes.length > 0) {
        result = [...result, ...tempRoutes];
      }
    }
  }

  return result;
}
