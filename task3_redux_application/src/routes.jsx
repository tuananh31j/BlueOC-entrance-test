import CreatePost from "./pages/CreatePost";
import ListPosts from "./pages/ListPosts";

const routes = [
  {
    path: "/",
    element: <ListPosts />,
  },
  {
    path: "/add",
    element: <CreatePost />,
  },
  {
    path: "/ok",
    element: <ListPosts />,
  },
];

export default routes;
