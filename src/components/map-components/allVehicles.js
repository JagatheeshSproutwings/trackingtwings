import React from 'react'
import {Table,Row,Col,List,Avatar,Badge,Skeleton} from 'antd'
import { CarFilled,WifiOutlined } from '@ant-design/icons';
import BatteryGauge from 'react-battery-gauge'
import { BLUE_BASE, GOLD_BASE, GRAY_DARK, GREEN_BASE } from 'constants/ThemeConstant';
import { size } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical,faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'

// Api call

const data = [
  {
    id:1,
    title: 'TN01AN1245',
    description:'2023-08-02 01:00:00',
    color:GREEN_BASE,
    gps_count:10,
    gsm_count:5,
  },
  {
    id:2,
    title: 'TN07DX8989',
    description:'2023-08-02 02:00:00',
    color:GRAY_DARK,
    gps_count:20,
    gsm_count:15,
  },
  {
    id:3,
    title: 'AP02DC4565',
    description:'2023-08-02 03:00:00',
    color:BLUE_BASE,
    gps_count:5,
    gsm_count:20,
  },
  {
    id:4,
    title: 'TN04DC8989',
    description:'2023-08-02 04:00:00',
    color:GOLD_BASE,
    gps_count:10,
    gsm_count:20,

  },
  {
    id:5,
    title: 'TN01AN1245',
    description:'2023-08-02 01:00:00',
    color:GREEN_BASE,
    gps_count:20,
    gsm_count:15,
  },
  {
    id:6,
    title: 'TN07DX8989',
    description:'2023-08-02 02:00:00',
    color:GRAY_DARK,
    gps_count:30,
    gsm_count:24,
  },
  {
    id:7,
    title: 'AP02DC4565',
    description:'2023-08-02 03:00:00',
    color:BLUE_BASE,
    gps_count:30,
    gsm_count:62,

  },
  {
    id:8,
    title: 'TN04DC8989',
    description:'2023-08-02 04:00:00',
    color:GOLD_BASE,
    gps_count:40,
    gsm_count:55,

  },
  {
    id:9,
    title: 'TN07DX8989',
    description:'2023-08-02 02:00:00',
    color:GRAY_DARK,
    gps_count:20,
    gsm_count:15,
  },
  {
    id:10,
    title: 'AP02DC4565',
    description:'2023-08-02 03:00:00',
    color:BLUE_BASE,
    gps_count:20,
    gsm_count:15,

  },
  {
    id:11,
    title: 'TN04DC8989',
    description:'2023-08-02 04:00:00',
    color:GOLD_BASE,
    gps_count:20,
    gsm_count:15,

  },
];
const AllVehicles = () => {
  return (
    <div className='table-responsive' style={{padding:0,margin:1}}>
      <List style={{padding:0}}
    itemLayout="horizontal"
    dataSource={data}
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 5,
    }}
    renderItem={item => (
      <List.Item actions={[<a key="list-loadmore-more"><FontAwesomeIcon icon={faEllipsisVertical} style={{fontSize: '20px',color:GREEN_BASE}}/></a>]}>
        <List.Item.Meta
          avatar={ <Avatar size="small"  style={{backgroundColor:'transparent'}} icon={<CarFilled style={{ fontSize: '20px', color: item.color } }/>}/>}
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.description}
        />
        <Row>
          <Col className='mr-3'>
            <WifiOutlined style={{fontSize: '20px',color:GREEN_BASE}} />
          </Col>
          <Col>
            <FontAwesomeIcon icon={faLocationCrosshairs} style={{fontSize: '20px',color:GREEN_BASE}}/>
          </Col>
        </Row>
      </List.Item>
    )}
  />
    </div>
  )
}

export default AllVehicles