import React from 'react';
import './Tabs.css';
import { Scrollbars } from 'react-custom-scrollbars';
import NewMessage from '../NewMessage/NewMessage';
import Modal from '../UI/Modal/Modal';
import socketSubcriber from '../../subscribe/subcribeToChat'
import Client from '../../Client/Client';
import cookie from 'react-cookies';

const style = {
  width: '25%',
  height: '70%',
  position: 'fixed',
  top: '100px',
  border: 'solid 2px white'
};

class Tabs extends React.Component{

  state = {
    newMessageMode: false
  };

  onNewMessage = () => this.setState({newMessageMode: true });

  close = () => {
    this.setState({newMessageMode: false});
  };

  componentDidMount(){

    const props = this.props;
    Client.fetchMessagesThreads(cookie.load('token'), function (body) {

      props.onNewThread(body, false);
      socketSubcriber.subscribeToChatThread((e) => {
        console.log(e.threadId);
        props.onNewThread([{threadId: e.threadId, title: e.title}], false);
      });
    });

  }

  render(){
    return (
      <Scrollbars
        style={style}
        autoHide
        autoHideTimeout={1000}
      >
        {
          this.state.newMessageMode ? (
            <Modal close={this.close} >
              <NewMessage
                onNewThread={this.props.onNewThread}
                onpenTab={this.props.onTabClick}
                tabs={this.props.tabs}
                closeModal={this.close}
              />
            </Modal>
          ) : null
        }
        <div className="list-group">
          <div className="tab-tool">
            <button onClick={this.onNewMessage} >Nouveau message</button>
          </div>
          <div className="item">
          {
            this.props.tabs.map(t => (
              <a key={t.id}
                 onClick={(e) => {
                   e.preventDefault();
                   console.log(t.id);
                   this.props.onTabClick(t.id);
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
      </Scrollbars>
    )
  }
}


export default Tabs;