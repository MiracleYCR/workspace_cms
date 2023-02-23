const getters = {
  // 鉴权
  token: (state) => state.user.token,
  // 侧边栏展开
  sideBarOpened: (state) => state.app.sideBarOpened,
  // tag 标签
  tagsViewList: (state) => state.app.tagsViewList,
};

export default getters;
