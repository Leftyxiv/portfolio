import React from 'react';
import { 
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='d-flex'>
              <p>Frankfort, KY</p>
            </div>
            <div className='d-flex'>
              <a href='tel:916-347-8259'>916-347-8259</a>
            </div>
            <div className='d-flex'>
              <p>manny@aledoux.net</p>
            </div>
          </div>
          <div className='col-lg-3 col-md-2 col-sm-6'>
            <div className='row'>
              <div className='col'>
                <a className='footer-nav'>Home</a>
                <br />
                <a className='footer-nav'>About Me</a>
                <br />
                <a className='footer-nav'>Services</a>
              </div>
              <div className='col'>
                <a className='footer-nav'>Experience</a>
                <br />
                <a className='footer-nav'>Portfolio</a>
                <br />
                <a className='footer-nav'>Contact</a>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
            <div className='d-flex justify-content-center'>
              <FacebookShareButton
              url={'https://aledoux.net'}
              quote={'Full Stack Developer'}
              hashtag={'#react'}
              >
                <FacebookIcon className='mx-3' size={36}/>
              </FacebookShareButton>
              <TwitterShareButton
              url={'https://aledoux.net'}
              quote={'Full Stack Developer'}
              hashtag={'#react'}
              >
                <TwitterIcon className='mx-3' size={36}/>
              </TwitterShareButton>
              <LinkedinShareButton
              url={'https://aledoux.net'}
              quote={'Full Stack Developer'}
              hashtag={'#react'}
              >
                <LinkedinIcon className='mx-3' size={36}/>
              </LinkedinShareButton>
              <RedditShareButton
              url={'https://aledoux.net'}
              quote={'Full Stack Developer'}
              hashtag={'#react'}
              >
                <RedditIcon className='mx-3' size={36}/>
              </RedditShareButton>
            </div>
            <p className='pt-3 text-center'>
              Copyright&copy;
              {new Date().getFullYear()}&nbsp; Manny Ledoux
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
