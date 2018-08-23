import React, { Component } from 'react';
import Header from '../Shared/Header/Header';
import Channel from '../Shared/Channel/Channel';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
				<Header>
        		<p className="Title">Login</p>
        </Header>
				<div>
					<div className="ChannelList">
						<Channel>
							Dummy Channel 1
						</Channel>
						<Channel>
							Dummy Channel 2
						</Channel>
						<Channel>
							Dummy Channel 3
						</Channel>
						<Channel>
							Dummy Channel 4
						</Channel>
						<Channel>
							Dummy Channel 5
						</Channel>
					</div>
					
					<div className="Main">
						<p>This is where the other stuff will go!</p>
					</div>

				</div>
      </div>
    );
  }
}

export default Home;