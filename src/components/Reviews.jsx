import React from "react";
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import './Reviews.css';
import Person1 from '../utils/img/person1.jpg';
import Person2 from '../utils/img/person2.jpg';
import Person3 from '../utils/img/person3.jpg';
import Person4 from '../utils/img/person4.jpg';

export function Reviews(){
    return (
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold
            fs-1">Reviews</h2>
            <div className="row g-4">
              <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                  <CardText>
                                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                      Obcaecati aut qui nisi odit explicabo nostrum!
                                  </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">John Mike</CardTitle>
                        </CardFooter>
                    </Card>
              </div>

              <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                  <CardText>
                                      Lorem ipsum dolor sit amet, 
                                      consectetur adipisicing elit. Dolore, fugit?
                                  </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Ribka Hoffman</CardTitle>
                        </CardFooter>
                    </Card>
              </div>

              <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                  <CardText>
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                      Ducimus recusandae reiciendis sapiente?
                                  </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Alisson Cork</CardTitle>
                        </CardFooter>
                    </Card>
              </div>

              <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                  <CardText>
                                      Lorem ipsum dolor sit amet consectetur 
                                      adipisicing elit. Quo nam recusandae commodi!
                                  </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Ted Meyer</CardTitle>
                        </CardFooter>
                    </Card>
              </div>
            </div>
        </div>
    )
}