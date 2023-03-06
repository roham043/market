import React from 'react';
import { Link } from 'react-router-dom';
import hat from '../../assests/hat.svg';
import sneakers from '../../assests/sneakers.svg';
import jacket from '../../assests/jacket.svg';
import female from '../../assests/female.svg';
import man from '../../assests/man.svg';
import baby from '../../assests/baby.svg';
import health from '../../assests/health.svg'

const MainPageFeatures = () => {
    return (
        <div className="py-4 mb-5" style={{ backgroundColor: '#dee9ff' }}>
            <section className="container ">
                <h2 className="display-5 text-center">Features</h2>
                <p className="lead text-muted text-center mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quidem atque autem ex aliquam vel, quibusdam, amet laudantium ipsa provident, repellendus architecto eius? Dolores unde sed saepe neque at consequatur.</p>
                <div className="row gy-3 pb-4">
                    <div className="col-xl-3 col-md-6">
                        <div className="card text-center d-flex  align-items-center" style={{width:'18rem'}}>
                            <img src={hat} className="card-img-top" alt="hat" style={{width:'200px'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card text-center d-flex  align-items-center" style={{width:'18rem'}}>
                            <img src={sneakers} className="card-img-top" alt="hat" style={{width:'200px'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card text-center d-flex  align-items-center" style={{width:'18rem'}}>
                            <img src={jacket} className="card-img-top" alt="hat" style={{width:'200px'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card text-center d-flex  align-items-center" style={{width:'18rem'}}>
                            <img src={female} className="card-img-top" alt="hat" style={{width:'200px'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card text-center d-flex  align-items-center" style={{width:'18rem'}}>
                            <img src={man} className="card-img-top" alt="hat" style={{width:'200px'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card text-center d-flex  align-items-center" style={{width:'18rem'}}>
                            <img src={baby} className="card-img-top" alt="hat" style={{width:'200px'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card text-center d-flex  align-items-center" style={{width:'18rem'}}>
                            <img src={health} className="card-img-top" alt="hat" style={{width:'200px'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card text-center d-flex  align-items-center" style={{width:'18rem'}}>
                            <img src={hat} className="card-img-top" alt="hat" style={{width:'200px'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default MainPageFeatures;