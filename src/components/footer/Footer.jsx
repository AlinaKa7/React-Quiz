import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#5e7dda",
        display: "flex",
        justifyContent: "space-around",
        textAlign: "center",
      
        paddingTop: 20,
        paddingBottom: 20,
        color: "#FFFFFF",
      }}
    >
      Made with efforts
      <div>
        <FacebookIcon style={{ marginRight: "15px", cursor: "pointer" }}/>
        <InstagramIcon style={{ marginRight: "15px", cursor: "pointer" }}/>
        <GitHubIcon style={{ cursor: "pointer" }}/>
      </div>
    </div>
  );
};

export default Footer;
