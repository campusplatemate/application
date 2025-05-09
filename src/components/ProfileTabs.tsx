import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const JustifiedTabs = () => (
  <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-3" justify>
    <Tab eventKey="post" title="Posts">
      Tab content for Home
    </Tab>
    <Tab eventKey="picked-up" title="Picked Up">
      Tab content for Profile
    </Tab>
  </Tabs>
);

export default JustifiedTabs;
