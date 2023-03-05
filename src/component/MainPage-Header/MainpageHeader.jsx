import ShoppingBag from '../../assests/Shoppingbag.png';
const MainPageHeader = () =>{
    return(
        <div className="py-4">
            <section className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className='display-4 mb-4'>Build <span className="text-warning">reactive</span> Websites easily!</h2>
                         <p className="lead mb-4 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dolore assumenda dolorum pariatur fugit nihil facilis harum, nulla minima, itaque excepturi repudiandae placeat aperiam ut maxime rem reprehenderit ea eius?</p>
                         <div className="text-center text-md-start">
                         <button className='btn btn-primary'>Get Started</button>
                         </div>
                    </div>
                    <div className="col-md-6">
                        <img src={ShoppingBag} alt="ShoppingBag" className="img-fluid" />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default MainPageHeader;