import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Parallax, Background } from 'react-parallax';
import { isMobile } from 'react-device-detect';
import { Link, animateScroll as scroll } from "react-scroll";

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Paper from '@material-ui/core/Paper';
// import Button from "components/CustomButtons/Button.js";

import saksham from 'assets/img/image/teams/team20/saksham.jpg';
import ayush from 'assets/img/image/teams/team20/Aayush.webp';
import nitesh from 'assets/img/image/teams/team20/Nitesh Thota.webp';
import Ali from 'assets/img/image/teams/team20/Rahamath Ali.webp';
import Fenil from 'assets/img/image/teams/team20/Fenil.jpg';
import hemangi from 'assets/img/image/teams/team20/Hemangi.jpeg';
import Lekha from 'assets/img/image/teams/team20/Lekha K.png';
import Aravind from 'assets/img/image/teams/team20/aravind.webp';
import Tuhin from 'assets/img/image/teams/team20/Tuhin.jpg';
import bgImage from 'assets/img/sign.jpg';
import bgImageMob from 'assets/img/Team.jpg';
import Arrowd from "@material-ui/icons/ArrowDropDown";
import { Button } from '@material-ui/core';


const useStyles = makeStyles({

  container: {
    zIndex: '10',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'gotham',
    textStrokeColor: '#fff',
    textFillColor: 'transparent',
  },
  content: {
    display: 'flex',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imag: {
    borderRadius: '50%',
    objectFit: 'cover',
    zIndex: '100'
  },
  Status: {
    color: '#f5f3f0',
    zIndex: '100'
  },
  iconTray: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex: '100'
  },

  cover: {
    position: 'absolute',
    zIndex: '10'
  },

  downvote: {
    height: '5vh',
    width: '100%',
    zIndex: '10000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: '0.4',
    transition: '250ms ease-in-out',
    '&:hover': {
      opacity: '0.7'
    }
  },
  arrow: {
    width: "100px",
    height: "100px",
    transition: '1s',
    color: '#fff',
    opacity: '0.3'
  },

  '@media (min-width: 800px)': {
    container: {
      height: '115vh',
    },
    title: {
      fontSize: '6vw',
      textStrokeWidth: '5px',
      marginTop: '2vh'
    },
    content: {
      flexWrap: 'wrap',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    box: {
      height: '37vh',
      width: '16vw',
    },
    break: {
      flexBasis: '100%',
      height: '5vh'
    },
    imag: {
      marginTop: '25px',
      height: '20vh',
      width: '10vw',
    },
    cover: {
      height: '34vh',
      width: '15vw',
      filter: 'blur(5px)',
      clipPath: 'polygon(0 0, 100% 0%, 100% 64%, 50% 40%, 0 64%)',
    },
    Button: {
      backgroundColor: 'rgba(0,0,0,0.4)',
      width: '15vw',
      height: '5em',
      color: 'white',
      transition: '200ms ease-in-out',
      '&:hover': {
        backgroundColor: '#fff',
        opacity: '0.5',
        color: 'black'
      }
    },
  },

  '@media (max-width: 800px)': {
    container: {
      height: '540vh',
      flexDirection: 'column'
    },
    title: {
      fontSize: '20vw',
      textStrokeWidth: '2px',
      margin: '5vh 0 5vh 0'
    },
    // content: {
    //   flexWrap: 'wrap',
    //   height: '100%',
    //   flexDirection: 'column',
    //   alignItems: 'space-around',
    //   justifyContent: 'center'
    // },
    box: {
      height: '50vh',
      width: '80vw',
    },
    imag: {
      marginTop: '25px',
      height: '30vh',
      width: '65vw',
    },
    cover: {
      height: '50vh',
      width: '80vw',
      filter: 'blur(3px)',
      clipPath: 'polygon(0 0, 100% 0%, 100% 64%, 50% 40%, 0 64%)',
    },
    Button: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      width: '70vw',
      height: '5em',
      color: 'white',
      transition: '200ms ease-in-out',
      '&:hover': {
        backgroundColor: '#fff',
        opacity: '0.5',
        color: 'black'
      }
    }
  }
});

const images = [{
  name: 'Saksham Bhadani',
  designation: 'Team Lead',
  image: saksham,
}, {
  name: 'Ayush Sagar',
  designation: 'Team Manager',
  image: ayush
}, {
  name: 'Fenil Bamnoliya',
  designation: 'Mechanical Lead',
  image: Fenil
}, {
  name: 'Nitesh Thota',
  designation: 'Head Of Corporate',
  image: nitesh
}, {
  name: 'Hemangi Dudani',
  designation: 'Research Lead',
  image: hemangi
}, {
  name: 'Lekha K',
  designation: 'Autonomous Lead',
  image: Lekha
}, {
  name: 'Anguluri Aravind',
  designation: 'Developers Lead',
  image: Aravind
}, {
  name: 'Rahamath Ali',
  designation: 'Embedded Systems Lead',
  image: Ali
}, {
  name: 'Tuhin Sengupta',
  designation: 'Science Lead',
  image: Tuhin
}
];

var bgImageRender = () => {
  if (isMobile)
    return bgImageMob;
  else
    return bgImage;
}

export default function FullWidthGrid() {
  const classes = useStyles();

  const breakRender = (index) => {
    console.log(index);
    if (index == 4) {
      return <div className={classes.break}></div>;
    }
    // if (isMobile) {
    //   //
    // } else {
    //   if (index == 4) {
    //     return (<div className={classes.break}></div>);
    //   }
    // }
  }

  const contentRender = () => {

    if (isMobile) {
      return (images.map((profile, index) =>
        <Paper elevation={24} className={classes.box} >
          <img className={classes.cover} src={profile.image}></img>
          <img className={classes.imag} alt={profile.name} src={profile.image} />
          <h3 className={classes.Status} > {profile.name}</h3>
          <div className={classes.iconTray}>
            <InstagramIcon style={{ color: 'white', opacity: '0.5' }} fontSize="large" />
            <LinkedInIcon style={{ color: 'white', opacity: '0.5' }} fontSize="large" />
            <FacebookIcon style={{ color: 'white', opacity: '0.5' }} fontSize="large" />
            <TwitterIcon style={{ color: 'white', opacity: '0.5' }} fontSize="large" />
          </div>
          <h5 className={classes.Status} > {profile.designation}</h5>
        </Paper>
      )
      );
    } else {
      return (images.map((profile, index) =>
        <React.Fragment>
          <Paper elevation={24} className={classes.box} >
            <img className={classes.cover} src={profile.image}></img>
            <img className={classes.imag} alt={profile.name} src={profile.image} />
            <h3 className={classes.Status} > {profile.name}</h3>
            <div className={classes.iconTray}>
              <InstagramIcon style={{ color: 'white', opacity: '0.5' }} fontSize="large" />
              <LinkedInIcon style={{ color: 'white', opacity: '0.5' }} fontSize="large" />
              <FacebookIcon style={{ color: 'white', opacity: '0.5' }} fontSize="large" />
              <TwitterIcon style={{ color: 'white', opacity: '0.5' }} fontSize="large" />
            </div>
            <h5 className={classes.Status} > {profile.designation}</h5>
          </Paper>
          {breakRender(index)}
        </React.Fragment>
      )
      );
    }
  }

  const renderMain = () => {
    if (isMobile) {
      return (
        <React.Fragment>
          {contentRender()}
          <Button className={classes.Button} size='large'>
            Team History
     </Button>
        </React.Fragment>
      );
    } else {
      return (
        <div className={classes.content}>
          {contentRender()}
          <Button className={classes.Button} size='large'>
            Team History
     </Button>
        </div>
      );
    }
  }

  return (
    <Parallax
      blur={{ min: -100, max: 100 }}
      bgImage={bgImageRender()}
      bgImageAlt="the cat"
      strength={1000}
      className={classes.forMob}
    >
      <div className={classes.container}>
        <div className={classes.title}>Team</div>
        {renderMain()}
        <Link className={classes.downvote}
          to="sponsorship"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000} >
          <Arrowd id="pral" className={classes.arrow} />
        </Link>
      </div>
    </Parallax >
  );
}