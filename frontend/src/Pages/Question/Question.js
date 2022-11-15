import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import NavBar from '../../Components/NavBar/NavBar';
import QuestionComponent from '../../Components/QuestionComponent/QuestionComponent';
import Spin from 'antd/es/spin';
import 'antd/es/spin/style/css';

const Question = () => {
    const [spin, setspin] = useState(false);
    return (
        <Spin spinning={spin} style={{ marginTop: "100px" }}>
            <div>
                <NavBar />
                <Row style={{ marginTop: "15px" }}>
                    <Col xs={6} style={{ backgroundImage: `url('./images/polusi.png')`, backgroundRepeat: "no-repeat", backgroundAttachment: "scroll", height: "600px", marginTop: "-30px" }}>
                    </Col>
                    <Col xs={5}>
                        <QuestionComponent setspin={setspin} />
                    </Col>
                </Row>
            </div>
        </Spin>
    );
};

export default Question;