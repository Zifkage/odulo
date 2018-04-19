import React from 'react';
import './Tabs.css';

const Tabs = (props) => (
  <div className="Tabs">
    <div className="list-group">
      {
        props.tabs.map(t => (
          <a key={t.id}
            onClick={(e) => {
              e.preventDefault();
              props.onClick(t.id);
            }}
            href=""
            className={ t.active ?
              "list-group-item list-group-item-action flex-column align-items-start " :
              "list-group-item list-group-item-info flex-column align-items-start active"
            }
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{t.title}</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">{t.lastMessage} <span className="badge badge-primary badge-pill">14</span></p>

          </a>
        ))
      }
    </div>
  </div>
);

export default Tabs;