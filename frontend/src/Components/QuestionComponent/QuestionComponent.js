import { Input } from 'antd';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'antd/es/input/style/css';
import axios from 'axios';

const QuestionComponent = (props) => {
    const { setspin } = props;
    const [input, setinput] = useState({
        location: "",
        pm10: "",
        so2: "",
        co: "",
        o3: "",
        n02: ""
    })
    const [result, setresult] = useState("");
    const [tanya, settanya] = useState(0);

    const handleChange = (e) => {
        switch (e.target.name) {
            case "location":
                setinput({ ...input, location: e.target.value })
                break;
            case "pm10":
                setinput({ ...input, pm10: e.target.value })
                break;
            case "so2":
                setinput({ ...input, so2: e.target.value })
                break;
            case "co":
                setinput({ ...input, co: e.target.value })
                break;
            case "o3":
                setinput({ ...input, o3: e.target.value })
                break;
            case "no2":
                setinput({ ...input, no2: e.target.value })
                break;
            default:
                break;
        }
    }

    const handleNext = (e) => {
        settanya(tanya + 1);
    }
    const handleBack = () => {
        settanya(tanya - 1);
    }
    const handlebacktohome = () => {
        window.location.href = "/";
    }

    const handleSubmit = () => {
        axios.post(process.env.REACT_APP_BACKEND, {
            PM10: parseInt(input.pm10),
            SO2: parseInt(input.so2),
            CO: parseInt(input.co),
            O3: parseInt(input.o3),
            NO2: parseInt(input.no2)
        })
            .then(res => {
                console.log(res);
                setresult(res.data.kategori);
            })
            .catch(err => {
                console.log(err);
            })
        setspin(true);
        setTimeout(() => {
            setspin(false);
        }, 1000);
        settanya(tanya + 1);
    }

    const rootButton = {
        marginTop: "30px"
    }

    const button = {
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19)',
            backgroundColor: "#70ab85",
            color: "white"

        },
        color: "#70ab85",
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.10)',
    }

    switch (tanya) {
        case 0:
            return (
                <div style={{ marginTop: "80px" }}>
                    <h4>Daerah Observasi</h4>
                    <Input name='location' value={input.location} onChange={handleChange} />
                    <div style={rootButton}>
                        <Button style={{ marginRight: "50px" }} variant="outline-success" className={button} onClick={handlebacktohome}>Back</Button>
                        <Button disabled={input.location === ""} onClick={handleNext} variant="outline-success" className={button}>Next</Button>
                    </div>
                </div>
            );
        case 1:
            return (
                <div style={{ marginTop: "80px" }}>
                    <h4>Berapa Kadar PM10</h4>
                    <Input name='pm10' value={input.pm10} onChange={handleChange} />
                    <div style={rootButton}>
                        <Button style={{ marginRight: "50px" }} variant="outline-success" className={button} onClick={handleBack}>Back</Button>
                        <Button disabled={input.pm10 === ""} onClick={handleNext} variant="outline-success" className={button}>Next</Button>
                    </div>
                </div>
            );
        case 2:
            return (
                <div style={{ marginTop: "80px" }}>
                    <h4>Berapa Kadar SO2</h4>
                    <Input name='so2' value={input.so2} onChange={handleChange} />
                    <div style={rootButton}>
                        <Button style={{ marginRight: "50px" }} variant="outline-success" className={button} onClick={handleBack}>Back</Button>
                        <Button disabled={input.so2 === ""} onClick={handleNext} variant="outline-success" className={button}>Next</Button>
                    </div>
                </div>
            );
        case 3:
            return (
                <div style={{ marginTop: "80px" }}>
                    <h4>Berapa Kadar CO</h4>
                    <Input name='co' value={input.co} onChange={handleChange} />
                    <div style={rootButton}>
                        <Button style={{ marginRight: "50px" }} variant="outline-success" className={button} onClick={handleBack}>Back</Button>
                        <Button disabled={input.co === ""} onClick={handleNext} variant="outline-success" className={button}>Next</Button>
                    </div>
                </div>
            );
        case 4:
            return (
                <div style={{ marginTop: "80px" }}>
                    <h4>Berapa Kadar O3</h4>
                    <Input name='o3' value={input.o3} onChange={handleChange} />
                    <div style={rootButton}>
                        <Button style={{ marginRight: "50px" }} variant="outline-success" className={button} onClick={handleBack}>Back</Button>
                        <Button disabled={input.o3 === ""} onClick={handleNext} variant="outline-success" className={button}>Next</Button>
                    </div>
                </div>
            );
        case 5:
            return (
                <div style={{ marginTop: "80px" }}>
                    <h4>Berapa Kadar NO2</h4>
                    <Input name='no2' value={input.no2} onChange={handleChange} />
                    <div style={rootButton}>
                        <Button style={{ marginRight: "50px" }} variant="outline-success" className={button} onClick={handleBack}>Back</Button>
                        <Button disabled={input.no2 === ""} onClick={handleNext} variant="outline-success" className={button}>Next</Button>
                    </div>
                </div>
            );
        case 6:
            return (
                <div style={{ marginTop: "80px" }}>
                    <h4>Apakah input data anda telah benar ?</h4>
                    <div style={rootButton}>
                        <Button style={{ marginRight: "50px" }} variant="outline-success" className={button} onClick={handleBack}>Kembali</Button>
                        <Button disabled={input.no2 === ""} onClick={handleSubmit} variant="outline-success" className={button}>Ya</Button>
                    </div>
                </div>

            );
        case 7:
            return (
                <div style={{ marginTop: "80px" }}>
                    <h4>Kategori Udara di daerah {input.location} : </h4>
                    <h5>{result}</h5>
                    <div style={rootButton}>
                        <Button onClick={handlebacktohome} variant="outline-success" className={button}>Kembali ke Halaman Utama</Button>
                    </div>
                </div>

            );

        default:
            break;
    }
};

export default QuestionComponent;