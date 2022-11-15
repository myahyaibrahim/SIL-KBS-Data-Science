import { Typography } from 'antd';
import React from 'react';
import 'antd/es/typography/style/css';

const Footer = () => {
    return (
        <div style={{ height: "50px" }}>
            <div style={{ marginTop: '20px' }}>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © KBS SIL '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </div>
        </div>
    );
};

export default Footer;