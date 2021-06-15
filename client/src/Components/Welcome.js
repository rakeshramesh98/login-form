import { Table} from "antd";
import "antd/dist/antd.css";
import './Welcome.css'
const { Column, ColumnGroup } = Table;
const Welcome = () => {
  const data = [
    {
        key:'1',
        empNumber:"872872",
        empName:"Rakesh",
        role:"PAT"
    },
    {
        key:'2',
        empNumber:"872871",
        empName:"Raghu",
        role:"PA"
    }
  ];
  return (
    <div style={{backgroundColor:"yellow"}}>
        <div className="title">Welcome {localStorage.getItem("username")}</div>
      <div className="table"></div>
      <Table dataSource={data}  pagination={false} style={{width:"500px"}}>
        <Column title="Emp Number" dataIndex="empNumber" key="empNumber" />
        <Column title="Emp Name" dataIndex="empName" key="empName" />
        <Column title="Role" dataIndex="role" key="role" />
      </Table>
    </div>
  );
};
export default Welcome;
