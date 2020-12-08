import './App.css';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import {Button} from '@material-ui/core';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import { Typography } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import { palette } from '@material-ui/system';
import { FindInPage } from '@material-ui/icons';

function App() {
  return (
    <div className="App" style={{ margin: '110px'}}>
      <Box display="flex" flexDirection="row" justifyContent="space-around" border={1} borderColor="grey.500" borderRadius={10} >
        <Box className="left" display="flex" flexDirection="column" justifyContent="space-around"  borderRight={1} borderColor="text.disabled" width="40%" padding={2}>
          <Box display="flex" flexDirection="row" justifyContent="space-between" color= "text.disabled" bgcolor="grey.100" >
            <Box><CheckBoxOutlineBlankIcon/></Box>
            <Box display="flex" flexDirection="row" justifyContent="space-around" width={230}>
              <Box><ThumbUpOutlinedIcon/></Box>
              <Box><ChatOutlinedIcon/></Box>
              <Box><MailOutlineIcon /></Box>
              <Box><ThumbDownOutlinedIcon/></Box>
            </Box >
            <Box><MoreVertIcon/></Box>
          </Box>
          <Box display='flex' flexDirection='column' alignItems="flex-start" borderBottom={1} borderColor="text.disabled">
            <Box mb={1}>Jaseem Umar M</Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between" width={400}>
              <Box color="text.disabled">India github.com/mjaseem jaseemumar@g..</Box>
              <Box color="info.main">More...</Box>
            </Box>
            <Box my={3} color="info.main" display="flex" flexDirection="row" justifyContent="space-between" width={400}>
              <Box>Application Developer</Box> 
              <Box>Software Quality Assurance</Box>
            </Box> 
          </Box>
          <Box borderBottom={1} borderColor="text.disabled" pt={0}>
            <Box>Candidate Caliberation Score</Box>
            <Box mb={2} mt={1} color="text.disabled">88%</Box>
          </Box>
          <Box>
            <Box display="flex" justifyContent="center" width={100} border={1} borderColor="grey.500" borderRadius={10} bgcolor="grey.300" color="grey.600">Add Tag <AddIcon /></Box>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Box color="text.disabled">0 activities</Box>
              <Box>Added on February 24th 2020</Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box color="text.disabled">since last visit</Box>
              <Box>by You via Retargets</Box>
            </Box>
          </Box>
        </Box>
        <Box className="right" display="flex" flexDirection="column" justifyContent="space-around" width="60%" padding={3}>
          <Box display="flex" flexDirection="row" justifyContent="space-around">
            <p>Experience</p>
            <FindInPageOutlinedIcon/>
            <span>Could not find information</span><br />
            <span>View Resume</span>
          </Box>
          <Box>
            <p>Education</p>
            <span>Engineering</span><span>2019</span><br />
            <span>Tier 2</span><span>B.Tech in Computer Science and Engineering</span><br />
            <span>Cpi</span>
          </Box>
          <Box>
            <p>Skills</p>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <p>JavaScript Python Java Spring Framework Provisioning Software WebRTC</p>
            <p>Cloud Django ARM VoIP PHP Neural Network Image Recognition C++</p>
            <p>Artifical Intelligence Beta J2EE</p>
          </Box>
        </Box>
      </Box>

    </div>
  );
}

export default App;
