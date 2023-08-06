import { useNavigate } from "react-router-dom";
import leftArrowIcon from "../../assets/svg/left-arrow.svg";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  message,
} from "antd";
import { createNewContract } from "../../utils/apis";

const CreateContract = () => {
  const navigate = useNavigate();
  const [modal, contextHolder] = Modal.useModal();

  const onFinish = (values) => {
    values.bid_end_time = values.bid_end_time.format("YYYY-MM-DD HH:mm:ss");
    values.pool_end_time = values.pool_end_time.format("YYYY-MM-DD HH:mm:ss");

    modal.confirm({
      title: "Confirm your details",
      content: (
        <div className="my-8">
          <div className="flex justify-between">
            <div className="font-medium text-neutral-500">Name of Contract</div>
            <div className="font-medium">{values.name}</div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="font-medium text-neutral-500">Total Amount</div>
            <div className="font-medium">{values.amount}</div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="font-medium text-neutral-500">Duration</div>
            <div className="font-medium">{values.duration} days</div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="font-medium text-neutral-500">
              Minimum Interest Rate
            </div>
            <div className="font-medium">{values.min_interest_rate} %</div>
          </div>
        </div>
      ),
      okText: "Create",
      cancelText: "Cancel",
      size: "large",
      async onOk() {
        console.log("OK");
        const { success, data } = await createNewContract(values);
        if (success && data?.[0]?.contract_id) {
          navigate(`/contract/${data?.[0]?.contract_id}/success`);
          message.success("Contract created successfully");
        } else {
          message.error("Error in creating contract");
        }
      },
    });
  };

  return (
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
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="bg-primary p-4 items-center flex gap-2">
        <img
          src={leftArrowIcon}
          alt="left-arrow"
          className="cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        />

        <div className="text-white">Create Contract</div>
      </div>

      <div className="my-8 px-4">
        <div className="font-medium">Type of Contract</div>
        <div className="text-sm mt-1">
          Which type of contract would you like to create?
        </div>

        <div className="my-4">
          <div className="p-4 bg-white border-2 border-solid rounded-lg border-primary">
            Chit Fund
          </div>
          <div className="p-4 mt-4 bg-white border-2 border-solid rounded-lg text-neutral-500 border-neutral-200">
            Real Estate (Coming Soon)
          </div>
          <div className="p-4 mt-4 bg-white border-2 border-solid rounded-lg text-neutral-500 border-neutral-200">
            Stocks (Coming Soon)
          </div>
        </div>

        <div className="mt-8">
          <div className="font-medium">Public/Private Contract</div>
          <div className="text-sm mt-1">
            Would you like to create Private group where other SharePe users
            should not join?
          </div>

          <div className="my-4">
            <div className="p-4 bg-white border-2 border-solid rounded-lg border-primary">
              Yes, Private Contract
            </div>
            <div className="p-4 mt-4 bg-white border-2 border-solid rounded-lg text-neutral-500 border-neutral-200">
              No, Public Contract (Coming Soon)
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="font-medium">Blockchain Technology</div>
          <div className="text-sm mt-1">
            Would you like to create it through smart contracts?
          </div>

          <div className="my-4">
            <div className="p-4 bg-white border-2 border-solid rounded-lg text-neutral-500 border-neutral-200">
              Yes (Coming Soon)
            </div>
            <div className="p-4 mt-4 bg-white border-2 border-solid rounded-lg border-primary">
              No
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="text-lg font-semibold mb-4">Set up your contract</div>
          <Form.Item
            label="Name of Contract"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter name of contract",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Total Amount"
            name="amount"
            rules={[
              {
                required: true,
                message: "Please enter amount above 100",
              },
            ]}
          >
            <InputNumber min={100} size="large" className="w-full" />
          </Form.Item>

          <Form.Item
            label="Duration (in days)"
            name="duration"
            rules={[
              {
                required: true,
                message: "Please select any duration",
              },
            ]}
          >
            <Radio.Group
              options={[
                { label: "90 Days", value: 90 },
                { label: "180 Days", value: 180 },
                { label: "360 Days", value: 360 },
              ]}
              optionType="button"
              buttonStyle="solid"
            />
          </Form.Item>

          <Form.Item
            label="Minimum Interest Rate %(per month)"
            name="min_interest_rate"
            rules={[
              {
                required: true,
                message: "Please enter interest rate per month",
              },
            ]}
          >
            <InputNumber size="large" className="w-full" />
          </Form.Item>
        </div>

        <div className="mt-8">
          <div className="text-lg font-semibold mb-4">Set up timings</div>
          <Form.Item
            label="Pool Collection End time"
            name="pool_end_time"
            rules={[
              {
                required: true,
                message: "Please enter pool end time",
              },
            ]}
          >
            <DatePicker size="large" />
          </Form.Item>

          <Form.Item
            label="Bidding End time"
            name="bid_end_time"
            rules={[
              {
                required: true,
                message: "Please enter pool end time",
              },
            ]}
          >
            <DatePicker size="large" />
          </Form.Item>
        </div>

        <div className="mt-8">
          <div className="font-medium">Storing Funds</div>
          <div className="text-sm mt-1">
            How would you like to store the funds?
          </div>

          <div className="my-4">
            <div className="p-4 bg-white border-2 border-solid rounded-lg border-primary">
              Use SharePe Wallet
            </div>
            <div className="p-4 mt-4 bg-white border-2 border-solid rounded-lg text-neutral-500 border-neutral-200">
              Keep it in my bank account
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex justify-between">
            <div className="font-medium">Bank Account</div>
            <div className="font-medium text-neutral-400 cursor-denied">
              Add New
            </div>
          </div>
          <div className="my-4">
            <div className="p-4 mt-4 bg-white border-2 border-solid rounded-lg border-neutral-200">
              1099XXXX (SBI)
            </div>
          </div>
        </div>
        <Form.Item>
          <Button
            className="!h-12 font-medium !text-lg w-full mt-4"
            type="primary"
            htmlType="submit"
          >
            Continue
          </Button>
        </Form.Item>
      </div>
      {contextHolder}
    </Form>
  );
};

export default CreateContract;
