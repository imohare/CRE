import { useState, useContext } from 'react';
//antd imports
import { Button, Card,  Form, Input, InputNumber, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import moment from 'moment';
//components
import FormTemplate from 'Components/ReuseableComponents/FormTemplate';
//types
import { IMerchandise } from 'Data/DataTypes'
//data
import { UserContext } from 'Data/UserContext';
import { createMerchandise } from 'Services/Merchandise';
//styling
import { motion } from 'framer-motion'
import {StaggerParentVariant} from 'Styles/animations/formAnimations';


interface IFile {
  [key: string]: any;
}

interface IFileProps {
  file: IFile;
}

interface IProps {
  onSubmitForm: (res: any)=>void;
}



const MerchandiseForm = ({ onSubmitForm }: IProps) => {

  const [imageObj, setImageObj] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const { currentId } = useContext(UserContext)


///////////////////////////////////////////////////////////
// // form submit // //
const formatResult = (res:any) => {
  const { name, description, merchType, number_of_tokens, tokens_value } = res;
  const formattedResult = {
    name: name,
    type: merchType,
    tokens_image: 'https://i.pinimg.com/originals/6d/ee/b5/6deeb5d98a7fe7ce5ce4daa9bfac5e81.jpg',
    description: description,
    number_of_tokens: number_of_tokens,
    tokens_value: tokens_value,
  }
  return formattedResult;
  }
  


const formSubmit = async (values: {
  name: String;
  merchType: String;
  description: String;
  number_of_tokens: Number;
  tokens_value: Number;
}) => { 
  const formattedResults = formatResult(values)
  console.log(formattedResults)
}

  //////////////////////////image///////////////////////
  
const onPreview = async (file: IFile) => {
  let src = file.url;
  if (!src) {
    src = await new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => resolve(reader.result);
    });
  }
  const image = new Image();
  image.src = src;
  const imgWindow = window.open(src);
  imgWindow && imgWindow.document.write(image.outerHTML);
};


const handleChange = ({ file }:IFileProps ) => {
  console.log('file to upload', file)
  // const storageRef = storage.ref(`album/image/${file.name}`)  

}
  ////////////////////////////tsx////////////////////////////
  return (
    <Card title="Merchandise">
       <Form
        onFinish={formSubmit}
      labelCol={{
        span: 6
      }}
      wrapperCol={{
        span: 18
      }}
        autoComplete="on"
      >
        <motion.div
          variants={StaggerParentVariant}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Form.Item
            name='name'
            label='Name'
            rules={[{ required: true, message: 'You need to enter a name for the merchandise' }]}>
            <Input></Input>
          </Form.Item>
          {/* ///////////////tried adding select tag, didn't work. maybe later//////////////////*/}
          <Form.Item
            name='merchType'
            label='Type'
            rules={[{ required: true, message: 'Please select a type' }]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            name='description'
            label='Description'>
            <Input></Input>
          </Form.Item>

          <Form.Item
            name='number_of_tokens'
            label='# of Album NFTs'
            rules={[{
              required: true,
              type: 'number',
              message: 'You must chose a number of NFTs for your merch'
            }]}
          > 
            <InputNumber></InputNumber>
          </Form.Item>
          <Form.Item
            name='tokens_value'
            label='NFT value'
            rules={[{
              required: true,
              type: 'number',
              message: 'You must chose a number of NFTs for your merch'
            }]}
          >
            <InputNumber></InputNumber>
          </Form.Item>
          <Form.Item>
            <ImgCrop>
              <Upload
                action="gs://cre-6cbea.appspot.com"
                listType="picture-card"
                className="album-picture-upload"
                showUploadList={false}   
                onChange={handleChange}
                onPreview={onPreview}
              >

              </Upload> 
              </ImgCrop>  
            </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">submit</Button>
          </Form.Item>
          </motion.div>
          </Form> 
   </Card>
  )

 
}

export default MerchandiseForm
