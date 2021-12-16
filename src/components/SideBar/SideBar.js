import {
  Close,
  ContactSupport,
  DehazeOutlined,
  ExitToApp,
  Home,
  Info,
  LinkSharp,
  Person,
  RssFeed
} from '@material-ui/icons';
import { useState } from 'react';
import './SideBar.css';

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className='expand'>
        <div className='nav'>
          <button
            className='expandButton'
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }}
          >
            <DehazeOutlined />
          </button>
          <div className='companyName'>Featured</div>
        </div>
      </div>
      {isExpanded ? (
        <div class='card sidebar'>
          <div class='card-header top'>
            <span>Featured</span>
            <span
              onClick={(e) => {
                e.preventDefault();
                setIsExpanded(!isExpanded);
              }}
            >
              <Close />
            </span>
          </div>
          <div className='card-body'>
            <ul class='list-group list-group-flush'>
              <li class='list-group-item'>
                <Home />
                <span> Home</span>
              </li>
              <li class='list-group-item'>
                <Info />
                <span> About</span>
              </li>
              <li class='list-group-item'>
                <ContactSupport />
                <span> Contacts</span>
              </li>
              <li class='list-group-item'>
                <RssFeed />
                <span> Blog</span>
              </li>
              <li class='list-group-item'>
                <Person />
                <span> Admin</span>
              </li>
              <li class='list-group-item'>
                <LinkSharp />
                <span> Links</span>
              </li>
            </ul>
          </div>
          <div className='card-footer'>
            <ExitToApp />
            <span> Logout</span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SideBar;
