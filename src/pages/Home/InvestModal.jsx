import { Form, InputNumber, Modal, message } from "antd";
import { useState } from "react";
import { investChitFund } from "../../utils/apis";

const InvestModal = ({
  contract_id,
  isModalOpen,
  setIsModalOpen,
  callback,
}) => {
  const [value, setValue] = useState();

  const handleOk = async () => {
    if (value) {
      try {
        await investChitFund({
          contract_id,
          amount: value,
        });
        message.success("Invested successfully");

        if (callback) {
          callback();
        }
      } catch (err) {
        console.log(err);
      }
      setIsModalOpen(false);
    } else {
      message.error("Please enter correct amount to invest");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title="Invest To Fund"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Invest"
    >
      <p>Invest more to get more returns</p>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          label="Amount"
          name="amount"
          rules={[
            {
              required: true,
              message: "Enter amount to invest",
            },
          ]}
        >
          <InputNumber
            size="large"
            className="w-full"
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default InvestModal;
