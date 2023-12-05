import React from 'react';

function service(props) {
    return (
        <div>
               <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div>
            <i className="fas fa-code"></i>
            <h2>Web development</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis aperiam atque, repudiandae exercitationem, consequuntur
              dolorum praesentium eaque facere nam perferendis quo optio fuga
              vitae et aliquid, ut ipsum quaerat assumenda.
            </p>
            <a href="#">Learn more</a>
          </div>

          <div>
            <i className="fas fa-crop-alt"></i>
            <h2>UI/XI Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis aperiam atque, repudiandae exercitationem, consequuntur
              dolorum praesentium eaque facere nam perferendis quo optio fuga
              vitae et aliquid, ut ipsum quaerat assumenda.
            </p>
            <a href="#">Learn more</a>
          </div>

          <div>
            <i className="fab fa-app-store"></i>
            <h2>Web Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis aperiam atque, repudiandae exercitationem, consequuntur
              dolorum praesentium eaque facere nam perferendis quo optio fuga
              vitae et aliquid, ut ipsum quaerat assumenda.
            </p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div> 
        </div>
    );
}

export default service;