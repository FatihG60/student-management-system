import { Button, Col, Modal, Row, Table, Typography } from "antd";
import "./App.css";
import data from "./constants/data";
import { useState } from "react";
import EditForm from "./components/EditForm";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;


function App() {
  const [studentList, setStudentList] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const navigate = useNavigate();

  const handleOk = () => {
    /*setStudentList(
      studentList.filter((item) => item.studentNumber === selectedData.studentNumber)
    );*/
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const deleteStudent = (id) => {
    console.log(id);
    setStudentList(studentList.filter((item) => item.studentNumber !== id));
  };
  const openModal = (record) => {
    setSelectedData(record);
    console.log(record);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "Öğrenci NO",
      dataIndex: "studentNumber",
      key: "name",
    },
    {
      title: "İsim",
      dataIndex: "name",
      key: "age",
    },
    {
      title: "Ders",
      dataIndex: "lesson",
      key: "address",
    },
    {
      title: "İşlem",
      key: "islem",
      render: (record) => (
        <Row>
          <Button className="mr-4" onClick={() => openModal(record)}>
            Düzenle{record.studentNumber}
          </Button>
          <Button danger onClick={() => deleteStudent(record.studentNumber)}>
            Sil
          </Button>
        </Row>
      ),
    },
  ];

  return (
    <Col>
      <Title className="flex justify-center pt-5">Öğrenci Bilgi Sistemi</Title>
      
      <div className="mx-8">
        <Button size="large" className="my-2" onClick={() => navigate("/add-student")}>
          Öğrenci Ekle
        </Button>
        <Table dataSource={studentList} columns={columns} />
      </div>
      <Modal
        title={"Öğrenci Düzenle"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <EditForm handleOk={handleOk} selectedData={selectedData}/>
      </Modal>
    </Col>
  );
}

export default App;
