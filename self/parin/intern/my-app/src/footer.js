import React, { Component } from 'react';
var express = require ('express');
var app = express();
var ReactDOMServer = require('react-dom/server');




var mysql = require('mysql');

var config = {
host     : 'localhost',
user     : 'root',
password : 'a',
database : 'intern'
}

var connection = mysql.createConnection(config);
connection.connect();

connection.query("select * from test",
class Footer extends Component {



constructor(props){
super(props);
this.state ={};


   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
}



handleChange(event) {
    this.setState({value: event.target.value});
  }


  handleSubmit(event) {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();

            connection.connect();


            connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
              if (err) throw err

              console.log('The solution is: ', rows[0].solution)
            })

            connection.end()


  }





  render() {
  return (

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
                              <form className="" name="" onSubmit={this.handleSubmit}>
                                  <div className="row">
                                      <div className="col-12 col-sm-12 form-group">
                                          <label for="name">Name :</label>
                                          <input type="text" name="name" className="form-control cust-input" id="name" value={this.contact.name} onChange={this.handleChangeName} required/>
                                      </div>
                                      <div className="col-12 col-sm-6 form-group">
                                          <label for="director_name">E-mail :</label>
                                          <input type="email" className="form-control cust-input" name="email"  value={this.contact.email} onChange={this.handleChangeEmail} required/>
                                      </div>
                                      <div className="col-12 col-sm-6 form-group">
                                          <label for="city">Contact Number :</label>
                                          <input type="tel" className="form-control cust-input" name="phone_number"  value={this.contact.name} onChange={this.handleChangeName} required/>
                                      </div>
                                      <div className="col-12 col-sm-12 form-group">
                                          <label for="city">Message :</label>
                                          <textarea name="message" className="form-control cust-textarea" id="" rows="3"></textarea>
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

    );
  }

}
export default Footer;
