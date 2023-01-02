import React from 'react';
import { Form, Input, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';
import axios from 'axios';

const AdminIntro = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post('/api/portfolio/update-intro', {
        ...values,
        _id: portfolioData.intro._id,
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
        initialValues={portfolioData.intro}
      >
        <Form.Item name="welcomeText" label="Welcome Text">
          <input type="text" placeholder="Welcome Text" />
        </Form.Item>

        <Form.Item name="firstName" label="First Name">
          <input type="text" placeholder="First Name" />
        </Form.Item>

        <Form.Item name="lastName" label="Last Name">
          <input type="text" placeholder="Last Name" />
        </Form.Item>

        <Form.Item name="caption" label="Caption">
          <input type="text" placeholder="Caption" />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <textarea placeholder="Description" />
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

export default AdminIntro;
