import React, { Component } from 'react';
import superagent from 'superagent';

// import auxesis_new from '../public/auxesis_new.png';
// import {ImageUploadField,UploadField} from 'react-image';
// // import Image from 'react-image';
// import blockchain_lab from './blockLab-logo.png';
// import sjmsom from './sjmsom.png';

class MainPage extends Component{
constructor(){
  super()
  this.state={
    name:'',
    email:'',
    phone:'',
    topic:''
  }
}
render(){

  return(

<div className="container">
  <div className="jumbotron">

  <img src="blockLab-logo.png" class="rounded float-left" alt="/" width="280" height="110"/  >
<img src="sjmsom.png" class="rounded float-right" alt="/" width="180" height="110"/>
<hr/>
<font color="FF0000"><center><h2>CIRCULAR FOR IN-SEMESTER INTERNSHIP OPPORTUNITIES</h2>
<p>OCT ‘17 - DEC ’17</p></center></font>

<br/>
<br/>
<h2 class="display-2"><strong> Table of Contents:</strong></h2>
<hr/>



<ul >
<h2 class="display-4">  <li><a href="#intro"> Introduction</a>	 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   2</li></h2>
 <h2 class="display-4">  <li><a href="#rp">Running Projects</a>	   2</li></h2>
            <ol>
                <h3><li><a href="#ac">Aadhar Chain - Identity Management</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2   </li></h3>
                <h3><li><a href="#gscm"> Genuinety - Supply Chain Management</a>	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        3 </li></h3>
                <h3><li><a href="#amm"> AUXCURSUS - Military Messaging</a>	     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      3 </li></h3>
                <h3><li><a href="#rsim">Reserviour - Supply Chain Inventory Management</a>	     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      4  </li></h3>
                <h3><li> <a href="#acmpf">AuxFund: CryptoFund Management Platform - Finance</a>     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     4 </li></h3>
                <h3><li> <a href="#affif">AuxSecurity For Financial Instruments - Finance	 </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    5 </li></h3>
            </ol>
  <h2 class="display-4"><li><a href="#sn">Special Note</a>	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  6</li></h2>
  <h2 class="display-4"><li><a href="#pm"> Program Management</a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6</li> </h2>
  <h2 class="display-4">  <li><a href="#rep">Reporting </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 	6</li></h2>
  <h2 class="display-4"><li><a href="#ao"> About Organiser</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	 7</li></h2>
</ul>



<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<hr/>

<h2 id="intro">INTRODUCTION</h2>
<br/>

<br/>

<p>
Blockchain Lab, India is a research arm of Auxesis Group. The lab has been established in September
2017 to promote and grow the Blockchain ecosystem in country. Lab is working in a multiple spheres
including high end product development, organising seminars and conferences across the country, training
students and corporates for implementing in-production applications with Blockchain Technology.
</p>
<br/>

<p>
This internship program is designed to help senior year management students from various background to
get a business grasp over Blockchain Technology, recognising its potential for various industry, defining
frameworks for when and when not to use Blockchain, recognising industry specific use cases, architecting
business solution and its implementation for Enterprises.
</p>
<br/>

<hr/>
<h2 id="rp">Running Projects</h2><br/>

<p>
<strong id="ac">  1. AADHAR CHAIN - IDENTITY MANAGEMENT</strong><br/><br/>
Identity management is a broad administrative area that deals with identifying individuals in a system (such
as a country, a network, or an enterprise) and controlling their access to resources within that system by
associating user rights and restrictions with the established identity.
</p>

<p>
In today’s system the identity management process is centralised, prone to failure, easily counterfeited and
highly compromise users privacy. Blockchain Technology has shown a potential on how this process can be
improved and users privacy can be better controlled by users itself.
</p>
<p>The project program will take students through various process involved in solution architecting and cover
following aspects:</p>
<ol>
    <h4><li> Understanding Blockchain Technology / Distributed Ledger Technology (DLT)  </li></h4>
    <h4><li> Understand Identity Management (IM)  </li></h4>
    <h4><li> Identifying existing works ongoing in IM with DLT  </li></h4>
    <h4><li> Identifying use cases for DLT based IM  </li></h4>
    <h4><li>  Establishing framework for IM on a DLT </li></h4>
    <h4><li>Proposing a plug in solution with an enterprise on how Aadhar Chain maybe utilised   </li></h4>
    <h4><li> Comparing functionalities and reporting improvements over existing solution  </li></h4>
    <h4><li> Cost analysis for implementing and running proposed solution  </li></h4>
</ol>

<br/><br/>


<hr/>
<p>
<strong id="gscm"> 2. GENUINETY - SUPPLY CHAIN MANAGEMENT</strong><br/><br/>
The management of the flow of goods and services, involves the movement and storage of raw materials,
of work-in-process inventory, and of finished goods from point of origin to point of consumption.
</p>


<p>
Genuinety is built to create a relationship with the material world which is broken. Competitive advantage
of open, transparent supply chains and sustainable manufacturing. The creation, exchange, and use of
material things, however, has many potential negative consequences: environmental damage, exploitative
extraction, unsafe work conditions, forgery, and the huge amounts of valuable material wasted at the end
of product life.
</p>
<p>
The project program will take students through various process involved in solution architecting and cover
following aspects:</p>

<ol>
    <h4><li> Understanding Blockchain Technology / Distributed Ledger Technology (DLT)  </li></h4>
    <h4><li> Understand Supply Chain Management (SCM) </li></h4>
    <h4><li> Identifying existing works in products anti counterfeiting with Blockchain Technology </li></h4>
    <h4><li> Establishing framework for end to end SCM product tracking  </li></h4>
    <h4><li>  Proposing a plug in solution with an enterprise on how Genuinety maybe utilised </li></h4>
    <h4><li>Comparing functionalities and reporting improvements over existing solution  </li></h4>
    <h4><li> Cost analysis for implementing and running proposed solution  </li></h4>

</ol>



<br/>
<br/>
<br/>

<hr/>
<p>
<strong id="amm"> 3. AUXCURSUS - MILITARY MESSAGING</strong><br/><br/></p>
<p>The management of the flow of goods and services, involves the movement and storage of raw materials,
of work-in-process inventory, and of finished goods from point of origin to point of consumption.</p>
<p>Genuinety is built to create a relationship with the material world which is broken. Competitive advantage
of open, transparent supply chains and sustainable manufacturing. The creation, exchange, and use of
material things, however, has many potential negative consequences: environmental damage, exploitative
extraction, unsafe work conditions, forgery, and the huge amounts of valuable material wasted at the end
of product life.</p>
<p>The project program will take students through various process involved in solution architecting and cover
following aspects:</p><br/>

<ol>
      <h4><li> Understanding Blockchain Technology / Distributed Ledger Technology (DLT)    </li></h4>
      <h4><li>    Work understanding of wearable messaging devices </li></h4>
      <h4><li>  Identifying existing security protocols and encryption standard for Military communication   </li></h4>
      <h4><li>   Identifying IoT partners in similar space to collaborate and design hardware  </li></h4>
      <h4><li>   Comparing functionalities and reporting improvements over existing solution  </li></h4>

</ol>

<br/>
<br/>
<br/>

<hr/>
<p>
<strong id="rsim">4. RESERVIOUR - SUPPLY CHAIN INVENTORY MANAGEMENT</strong><br/><br/></p>
<p>The most crucial aspect of Supply Chain Management is to ensure that the right amount of product is
effectively available at point of sale (POS). The problem of inventory management raises up with because
of very high level of distribution and low transparency of stocks among the participating vendors.</p>

<p>With the initial research of Auxesis and Blockchain Lab, India it has been demonstrated that a very high
efficiency and automation can be reached with the use of Blockchain Technology and Smart Contracts
functionality.</p>
<p>The project program will take students through various process involved in solution architecting and cover
following aspects:</p>
<br/>
<ol>
      <h4><li>Understanding Blockchain Technology / Distributed Ledger Technology (DLT)    </li></h4>
      <h4><li>   Understand Supply Chain Inventory Management (SCIM) </li></h4>
      <h4><li>  Identifying existing solutions and their challenges in SCIM process  </li></h4>
      <h4><li>  Creating framework for DLT based SCIM process  </li></h4>
      <h4><li>   Proposing a plug in solution with an enterprise on how Reserviour maybe utilised </li></h4>
      <h4><li>   Comparing functionalities and reporting improvements over existing solution </li></h4>
      <h4><li>   Cost analysis for implementing and running proposed solution </li></h4>
</ol>
<br/>
<br/>
<br/>
<hr/>
<p>
<strong id="acmpf">5. AUXFUND: CRYPTOFUND MANAGEMENT PLATFORM - FINANCE</strong><br/><br/></p>
<p>With the increasing penetration of crypto-currencies in our mainstream economy and a umber of
countries now legalising Bitcoin and other P2P crypto-currencies we are seeing a mass level adoption of
the distributed currency mechanism with no control of a central authority.</p>

<p>The same motivation has inspired a number of big banks and fund/ asset managers to advise to reserve
hold of a good amount of crypto-currencies as a part of their financial asset. With raising such a high
requirements of crypto fund management, a full blown B2B financial application is require for trading and
management of these assets.</p>
<p>The project program will take students through various process involved in solution architecting and cover
following aspects:</p>

<ol>
      <h4><li>Understanding Blockchain Technology & crypto-currencies   </li></h4>
      <h4><li>  Working mechanism of P2P Digital Economy </li></h4>
      <h4><li>  Identify and learn conventional fund management softwares </li></h4>
      <h4><li> Architecting framework for the fund management platform  </li></h4>
      <h4><li>   Learning compliances requirements and integrating in platform </li></h4>
      <h4><li>   Designing interfaces and proposing complete B2B solution </li></h4>
      <h4><li>   Cost analysis for implementing and running proposed solution</li></h4>
</ol>


<br/><br/><br/><br/>
<hr/>
<p>
<strong id="affif">6. AUXSECURITY FOR FINANCIAL INSTRUMENTS - FINANCE</strong><br/><br/></p>
<p>Financial instruments are monetary contracts between parties. They can be created, traded, modified and
settled. They can be cash (currency), evidence of an ownership interest in an entity (share), or a contractual
right to receive or deliver cash (bond).</p>
<p>This has been closely seen a number of times on how centralisation and inherent opaqueness in financial
processes has led to global economy crisis. With a more transparent demand with different regulators and
transparent governance system, Blockchain has appeared to help big time in enabling a more transparent
yet private and secure transactions / contracts to be enabled.</p>
<p>The project program will take students through various process involved in solution architecting and cover
following aspects:</p>

<ol>
      <h4><li>Understanding of Blockchain Technology </li></h4>
      <h4><li>  Lifecycle of financial instruments</li></h4>
      <h4><li> Current framework to develop a financial instrument </li></h4>
      <h4><li> Proposing a Blockchain technology framework for Banks & FIs. </li></h4>
      <h4><li>  Architecting framework for the securities and financial products to be developed on DLT</li></h4>
      <h4><li>  Learning compliances requirements and integrating in platform </li></h4>
      <h4><li>   Reconciliation and smart contract procedures to ensure instruments integrity</li></h4>
      <h4><li>  Cost analysis for implementing and running proposed solution</li></h4>
</ol>

<br/><br/>
<hr/>
<p>
<strong id="sn">SPECIAL NOTE</strong><br/><br/></p>
<p>Please don’t limit your thoughts and use cases over the above mentioned projects. Feel free to dig deep into
finding a perfect application for Blockchain Technology which can change lives of millions and may
effectively manage to save Billions of dollars.</p>
<p>You may come up with your own use case and we will ensure that idea gets a kick start.</p>

<br/><br/>
<hr/>
<p>
<strong id="pm">Program Management</strong><br/><br/></p>
<p>Blockchain Lab, India will start the internship program with a closed room session of Blockchain
Technology for interested students. The session will cover different use cases and brain storming over
implementation of DLT. This practice will ensure participants to choose their project carefully.</p>
<p>Further, use case specific sessions will be organised to help students kick start on their project development.
Guides will be provided to help students receive a responsive feedback on their problems. Further, biweekly
compulsory meeting sessions will ensure a successful execution of the program.</p>

<br/><br/>
<hr/>
<p>
<strong id="rep">Reporting</strong><br/><br/></p>
<p>Participants must prepare a thorough reporting of all the steps involved in the program to ensure the
successful completion of the program.</p>
<p>On final session, a presentation will be submitted which should clearly explain all the aspects of learning
and deliverables received during the session. Participant must be able to propose and demonstrate the
functioning part of project covering all points as mentioned in the project details section.</p>
<p>At end of the session, participants must submit a fully documented report which should cover all aspects of
a solution design as pointed out in running project detail section of this document. Work flows, architecture
diagram, solutioning images should be clearly highlighted and maintained in the final report document to
ensure.</p>



<br/><br/>
<hr/>
<p>
<strong id="ao">About Organiser</strong><br/><br/></p>
<p>Auxesis, established in 2015 and among the very first players in India focussing over building Blockchain
solutions initially with the aim of research and development of the nascent technology while soon emerged
as an enterprise grade Blockchain solution providing company with the help of partner organisations. With
a global footprint, Auxesis is recognised among < a href="https://www.rise.global/blockchain-100">The 100 most influential Blockchain companies </a> across the
globe.</p>
<p>Auxesis today is powering over 50 million users across the country to be connected, helping Governments
and regulators to create a transparent and effective governance system. With its relation with top 4 C’s
Auxesis ensures best of the industry solution is received by its clients in any sector.</p>
<p>Over the years Auxesis has pushed Blockchain innovation across the globe with its focus on continuous
research and building in production applications for enterprises. From Cryptocurrency wallets, exchanges
and payment gateways leading to push into the mainstream adoption of Bitcoin and so proving the
reliability of a Blockchain network in terms of security and usability.</p>
<p>Auxesis is now deeply focussing on Private Blockchain solutions with its enterprise grade blockchain
infrastructure, focused on production-readiness: security, performance and scalability. The Blockchain
powers decentralised applications on a network tailored to the specific needs of an industry and use case.</p>


<hr/>
      <section >
          <div className="container p-4 mb-2 bg_dark p-4 nav-shadow">
              <div className="row border-bottom-white  color_white">
                  <div className="col-12 col-sm-6">
                      <h3>Contact Us</h3>
                  </div>
              </div>

              <div className="row">
                  <div className="col-sm-12 form-wrap">
                      <div className="row">
                          <div className="col-12 col-sm-7 my-3 color_white">
                              <form className="" name="" action ="onSubmit()">
                                  <div className="row">
                                      <div className="col-12 col-sm-12 form-group">
                                          <label for="name">Name :</label>
                                          <input type="text" name="name" className="form-control cust-input" id="name" required/>
                                      </div>
                                      <div className="col-12 col-sm-6 form-group">
                                          <label for="director_name">E-mail :</label>
                                          <input type="email" className="form-control cust-input" name="email" required/>
                                      </div>
                                      <div className="col-12 col-sm-6 form-group">
                                          <label for="city">Contact Number :</label>
                                          <input type="tel" className="form-control cust-input" name="phone_number" required/>
                                      </div>
                                      <div className="col-12 col-sm-12 form-group">
                                          <label for="city">Topic :</label>
                                          <textarea name="topic" className="form-control cust-textarea" id="" rows="3"></textarea>
                                      </div>
                                  </div>
                                  <div className="col-12 col-sm-3 p-0 pull-left">
                                      <button id="auxCE_submit" className="btn btn-primary btn-block cust_btn">Submit</button>
                                  </div>
                              </form>
                          </div>
                          <div className="col-sm-5 my-3" id="map"></div>
                          <div className="clearfix"></div>

                      </div>
                      <hr className="hr-light"></hr>
                      <div className="col-sm-12 text-center color_white">

                            <p>    383 B, Powai Plaza, Powai,Mumbai 400076, India </p>

                                <span><i className="fa fa-phone" aria-hidden="true"></i></span>


                      </div>
                  </div>
              </div>

          </div>
      </section>


  </div>
</div>
  )
}

}

export default MainPage;
