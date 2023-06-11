export const dashboardRoute = [
  {
    title: "Home",
    path: "/dashboard",
    icon: "ee",
  },

  {
    title: "Users",
    path: "/dashboard/users",
    icon: "ee",
  },
  {
    title: "Product Section",
    path: "/dashboard/users",
    icon: "ee",
    children: [
      {
        title: "product List",
        path: "/dashboard/products",
        icon: "ee",
      },
      {
        title: "product",
        path: "/dashboard/product",
        icon: "ee",
      },
    ],
  },
  {
    path: "/auth/setting",
    title: "Setting",
    icon: "ee",
  },
];

export const homeRoute = [
  {
    title: "Home",
    path: "/",
    icon: "ee",
  },


  {
    title: "Categories",
    // path: "/dashboard/users",
    icon: "ee",
    // children: [
    //   {
    //     title: "Category 1",
    //     path: "/categories/Category 1",
    //     icon: "dd",
    //   },
    //   {
    //     title: "Category 2",
    //     path: "/categories/Category 2",
    //     icon: "dd",
    //   },
    //   {
    //     title: "Category 3",
    //     path: "/categories/Category 3",
    //     icon: "dd",
    //   },
    // ],
  },
  {
    title: "Products",
    path: "/products",
    icon: "ee",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: "ee",
  },
];
