import React from 'react';
import { Form, Input, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';
import axios from 'axios';

const AdminContact = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post('/api/portfolio/update-contact', {
        ...values,
        _id: portfolioData.contact._id,
      });
      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.contact}
      >
        <Form.Item name="name" label="First Name">
          <input type="text" placeholder="First Name" />
        </Form.Item>

        <Form.Item name="email" label="Email">
          <input type="email" placeholder="Email" />
        </Form.Item>

        <Form.Item name="github" label="Github">
          <input placeholder="Github" />
        </Form.Item>

        <Form.Item name="linkedIn" label="LinkedIn">
          <input placeholder="LinkedIn" />
        </Form.Item>

        <Form.Item name="address" label="Address">
          <input placeholder="Address" />
        </Form.Item>

        <div className="flex justify-end w-full">
          <button className="px-10 py-2 bg-primary text-white" type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AdminContact;
