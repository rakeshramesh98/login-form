import { Table } from "antd";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "antd/dist/antd.css";
import "./Welcome.css";
const { Column } = Table;
const Welcome = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/show').then((res)=>{
    setData(res.data)
    })
  },[]);
  return (
    <div className="welcome">
      <div className="title">Welcome {localStorage.getItem("username")}</div>
      <div className="table">
        <Table dataSource={data} pagination={false} style={{ width: "500px"}}>
          <Column title="Emp Number" dataIndex="empNumber" key="empNumber" />
          <Column title="Emp Name" dataIndex="empName" key="empName" />
          <Column title="Role" dataIndex="role" key="role" />
        </Table>
      </div>
    </div>
  );
};
export default Welcome;
