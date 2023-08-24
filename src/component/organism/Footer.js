import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';


function Footer(){
    return(
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <MDBContainer className='p-4'>
          <MDBRow>
            <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase' style={{color: "black", textAlign: "left"}}>Bumi Amartha Teknologi Mandiri</h5>

              <p style={{color: "black", textAlign: "justify", fontSize: "90%"}}>
              PT. Bumi Amartha Teknologi Mandiri (AMARTEK) is a system integrator devoted to offering the highest value to our customers. Amartek provides domain and advisory expertise which comes with Data & Analytics, Outcome based Services, Integration & Automation, Talent Augmentation. Amartek was established in 2018 with the purpose of delivering a large stack of IT services globally.
              </p>
            </MDBCol>

          <MDBCol lg='3' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase' style={{color: "black", textAlign: "left"}}>About Us</h5>
            <ul className='list-unstyled mb-0' style={{color: "black", textAlign: "left"}}>
                <li>
                  <a style={{textDecoration: "None"}} href='https://www.amartek.id/about/overview' className='text-dark'>
                    Company Overview
                  </a>
                </li>
                <li>
                  <a style={{textDecoration: "None"}} href='https://www.amartek.id/about/ceo-notes' className='text-dark'>
                    CEO Notes
                  </a>
                </li>
                <li>
                  <a style={{textDecoration: "None"}} href='https://www.amartek.id/about/people' className='text-dark'>
                    Executive Profiles
                  </a>
                </li>
              </ul>
          </MDBCol>

          <MDBCol lg='3' md='12' className='mb-4 mb-md-0'>
          <h5 className='text-uppercase' style={{color: "black", textAlign: "left"}}>Contact</h5>
          <div>
          <p style={{color: "black", textAlign: "left"}}>
                <MDBIcon icon="home" className="me-2" />
                Chase Plaza 9th Floor, Jl Jend. Sudirman Kav 21, Karet, Setiabudi, Jakarta Selatan 12920. Indonesia
              </p>
              <p style={{color: "black", textAlign: "left"}}>
                <MDBIcon icon="envelope" className="me-3" />
                  sales@batmandiri.com
              </p>
              <p style={{color: "black", textAlign: "left"}}>
                <MDBIcon icon="phone" className="me-3" /> +62 21 3973 7000
              </p>
        </div>
            </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'black' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://www.amartek.id/'>
          AMARTEK
        </a>
      </div>
    </MDBFooter>
    )
}

export default Footer;