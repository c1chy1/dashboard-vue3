import { createRouter, createWebHistory } from "vue-router";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/dashboard",
            name: "main",
            component: () =>
                import("../components/layouts/DashboardLayout.vue"),
            children: [
                {
                    path: "",
                    name: "dashboard",
                    component: () => import("../views/DashboardView/DashboardView.vue"),
                },

                {
                    path: "/dashboard/widgets1",
                    name: "Widgets1",
                    component: () => import("../views/WidgetsView/Widgets1.vue"),
                },
                {
                    path: "/dashboard/widgets2",
                    name: "Widgets2",
                    component: () =>
                      import("../views/WidgetsView/Widgets2.vue"),
                },

                {
                    path: "/dashboard/widgets3",
                    name: "Widgets3",
                    component: () =>
                      import("../views/WidgetsView/Widgets3.vue"),
                },

            ],
            alias: "/",
        },
        {
            path: "/:pathMatch(.*)*", // Page Not Found
            name: "notfound",
            redirect: { name: "dashboard" }, // Redirect to home page
        },
    ],
});

export default router;
