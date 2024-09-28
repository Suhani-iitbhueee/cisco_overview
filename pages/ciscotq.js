import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/navbar/NavLayout";
import Image from "next/legacy/image";
import { Row, Button, Container, Col, Card } from "react-bootstrap";
import thingqbator from "../public/thingqbator.png";
import questionmark from "../public/question.png";
import img1 from "../public/ciscotqimg.png";
import img2 from "../public/person.png";

// import { markAsUntransferable } from "worker_threads";
// import shadows from "@mui/material/styles/shadows";

const Ciscotq = () => {
  return (
    <>
     <Head>
        <title>Cisco ThingQbator</title>
        <meta name="robots" content="index, follow" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <style>
            font-family:'Poppins',sans-serif;
        </style>
      </Head>
      <Nav />
      <div>
        <Container fluid className="body">
          <Row className="header" style={{ height: "fit-content", marginTop: "70px", }}>
            <Col className="info">
              <h1>Cisco <span style={{color:'#DD6D23'}}>ThingQbator</span></h1>
              <p style={{color:'#676767'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.
              </p>
            </Col>
          </Row>
          

<Row className="align-items-center">
  <Col lg={6} md={12} sm={12} >
    <div style={{
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      borderRadius: '8px',
      overflow: 'hidden',
      padding: '1.5rem 1rem 3rem',
      height: '100%',
      marginLeft:'1.5rem',
      marginTop:'2rem',
      width:'95%',
      
    }}>
      <div className="d-flex align-items-center mb-3">
        <div style={{ fontSize: '2.5rem', fontWeight: '600', marginRight: '0.5rem' }}>What is</div>
        <Image src={thingqbator} height={48} width={243} alt="ThingQbator logo" />
        <Image src={questionmark} height={42.5} width={29.23} alt="Question mark" />
      </div>
      <p style={{ fontSize: '1rem' }}>
        Since May 2018, as a part of a CSR initiative, Cisco Systems along with NASSCOM Foundation has established a Cisco thingQbator at IIT (BHU) Varanasi. This AI and IoT-based makerspace program help to accelerate innovation and entrepreneurship among the student community.
      </p>
    </div>
  </Col>
  <Col lg={6} md={12} sm={12}>
    <div className="image-container">
      <Image
        src={img1}
        alt="ThingQbator image"
        layout="responsive"
        width={640}
        height={426}
      />
    </div>
  </Col>
</Row>


        


<div style={{
  backgroundColor:' #D9D9D9C4',
  height: '90px',
  marginBottom: '2rem',
  boxShadow: '0px 4px 4px 0px #00000040',
  display: 'flex',
  alignItems: 'center',
  marginTop:'3rem',
//   justifyContent: 'center',

// marginRight:'60%',
  position: 'relative',
  
}}>
    <div></div>
  <div style={{
  }}>
    <Image src={img2} height={90} width={85} alt="Person" />
  </div>
  <p style={{
    color: '#4F4F52',
    fontSize: '2.5rem',
    // fontFamily:'Poppins',
    fontWeight:'400',
    marginRight:'1rem',
    
    
  }}>Programs</p>
</div>

         

          <Row className="card-container">
            <Card className="card" style={{ height: "250px" }}>

              <Card.Body className="text-left">
                <Card.Title style={{marginBottom:'2rem',textAlign:'left'}}>Hackathons</Card.Title>
                <Card.Text style={{textAlign:'left',color:'#676767'}}>
                Hackathons are 24-hr programs (single sprint) in which students and budding entrepreneurs are given a chance to build software/hardware to showcase their competency on a problem statement. Till now 5 Hackathons have been successfully organized and the winners were awarded.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card" style={{ height: "250px" }}>
                
             
              <Card.Body>
                <Card.Title style={{marginBottom:'2rem',textAlign:'left'}}>Workshops and Webinars</Card.Title>
                <Card.Text style={{textAlign:'left',color:'#676767'}} >
                Workshops on AI, IoT, ML, Blockchain and other future technologies are conducted from time to time.
                   
                    
                </Card.Text>
                <Card.Text>
                  
                Webinars are conducted by IIT-BHU Alums, Technopreneurs, Senior executives of MNCs, Venture capitalists on various technical and business-related sessions.
                    
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card" style={{ height: "250px" }}>
              
              <Card.Body >
                <Card.Title style={{marginBottom:'2rem',textAlign:'left'}}>ThingQbator Internship ProgramS</Card.Title>
                <Card.Text style={{textAlign:'left',color:'#676767'}}>
                It is a virtual creative learning program where university students engage in problem-solving and building solutions. The Design Thinking Process is applied, and the program is broken into three tracks, based on various stages at which students’ projects are- Learning Track, Project Track, and Startup Track.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <div>
            <p style={{color:'#4F4F52',fontSize:'2.5rem',fontWeight:'500'}}>Provided Facilities</p>
          </div>
          <div style={{backgroundColor:'#505058',height:'80px',marginBottom:'10px',color:' #F8F9FA'}}>
            <ul style={{listStyleType:'disc',padding:'0px',margin:'0px',display:'flex',justifyContent:'space-around'}}>
              <li>
              Makerspace Network
              </li>
              <li>
              Cisco Sparkboard
                
                
              </li>
              <li>
              Sensors & Actuators Components
              </li>
              <li>
              Webex Teams
              </li>
              </ul>
          </div>

          <Footer />
          </Container>
          </div>
            
      

    </>
  );
};
export default Ciscotq;
