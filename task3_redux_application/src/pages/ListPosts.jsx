import { useGetPostsQuery } from "../services/post.service";
import { Table, Space, Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListPosts = () => {
  const { data, isLoading } = useGetPostsQuery();
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>Edit</a>
        </Space>
      ),
    },
  ];
  const onChange = (pagination) => {
    console.log(pagination);
    setPagination(pagination);
  };
  const redirectToCreatePost = () => navigate("/add");

  return (
    <>
      <Button type="default" className="my-4" onClick={redirectToCreatePost}>
        Create post
      </Button>
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={data}
        rowKey={"id"}
        onChange={onChange}
        pagination={pagination}
      />
    </>
  );
};

export default ListPosts;
