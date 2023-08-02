import React, { useState } from 'react'
import {Form,Row,Col,Card,Table,Select,Input,Badge,Avatar,Divider} from 'antd'
import {MapContainer,TileLayer,Marker,Popup,LayersControl} from 'react-leaflet'
import { WHITE } from 'constants/ThemeConstant'

export const Admin = () => {
    const [CustomerId,SetCustomerId] = useState("");
    
    const position = [11.0467, 76.9254]
    const { BaseLayer } = LayersControl;
    const tableColumns = [
        {
            title: 'Vehicle No.',
            dataIndex: 'vehicle_no',
            key: 'vehicle_no',
          },
          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
          },
    ];
    const handleChange = (values) =>{
        console.log(values);
    }
    
return(
    <>
    <Row gutter={6} >
        <Col xs={24} sm={24} lg={6} >
            <Row gutter={6}>
                <Col sm={6} lg={24}>
                    <Card title="Customer">
                        <Form name="customer-form" layout="inline">
                            <Col xs={12}>
                            <Form.Item name="dealer_id"  rules={[{required:true,message:'Dealer Value is Required!'}]}>
                                <Select showSearch onChange={handleChange} placeholder="Dealer/Reseller">
                                    <option value="1" selected>Acute</option>
                                </Select>
                            </Form.Item>
                            </Col>
                            <Col xs={12}>
                            <Form.Item name="customer_id"  rules={[{required:true,message:'Customer Value is Required!'}]}>
                                <Select showSearch onChange={handleChange} placeholder="Customer">
                                    <option value="1">Customer 1</option>
                                    <option value="2">Customer 2</option>
                                    <option value="3">Customer 3</option>
                                    <option value="4">Customer 4</option>
                                </Select>
                            </Form.Item>
                            </Col>
                            
                        </Form>
                    </Card>
                </Col>
                <Col sm={6} lg={24} style={{height:'100vh'}}>
                    <Card title="Vehcile Info" >
                        <div className="mt-1">
                            <Row gutter={6} >                        
                                <Col style={{ width: '20%' }}><Card style={{backgroundColor: '#0000FF',color:WHITE,textAlign:"center"}}>All <Badge size="large" count={10} /> </Card></Col>
                                <Col style={{ width: '20%' }}><Card style={{backgroundColor: 'red',color:WHITE,textAlign:"center"}}>   Parking <Badge size="large" count={2} /></Card></Col>
                                <Col style={{ width: '20%' }}><Card style={{backgroundColor: '#FFA500',color:WHITE,textAlign:"center"}}>Idle <Badge size="large" count={1} /></Card></Col>
                                <Col style={{ width: '20%' }}><Card style={{backgroundColor: '#008000',color:WHITE,textAlign:"center"}}>Moving <Badge size="large" count={2} /></Card></Col>
                                <Col style={{ width: '20%' }}><Card style={{backgroundColor: 'grey',color:WHITE,textAlign:"center"}}>Offline <Badge size="large" count={5} /></Card></Col>
                                <Col style={{ width: '20%' }}><Card style={{backgroundColor: 'grey',color:WHITE,textAlign:"center"}}>Expiry <Badge size="large" count={5} /></Card></Col>
                            </Row>
                            <div className="table-responsive">
                            <Table bordered  
                                columns={tableColumns} 
                                rowKey='id' 
                                pagination={true}></Table>
                            </div>
                            
                        </div>
                    </Card>
                </Col>
            </Row>
        </Col>
        <Col xs={24} sm={24} lg={18}>
            <Card title="Vehicles">
                <MapContainer center={position} zoom={13} scrollWheelZoom={true} >
                <LayersControl>
                    <BaseLayer checked name="OpenStreetMap">
                        <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                    </BaseLayer>
                    <BaseLayer name="Google-Street View">
                        <TileLayer
                            attribution="Google Maps"
                            url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
                            />
                    </BaseLayer>
                    <BaseLayer checked name="Google-Satelite">
                    <TileLayer
                            url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                            maxZoom= {20}
                            subdomains={['mt1','mt2','mt3']}
                        />
                    </BaseLayer>
                </LayersControl>
                </MapContainer>
            </Card>
        </Col>
    </Row>
    </>
)
}

export default Admin;