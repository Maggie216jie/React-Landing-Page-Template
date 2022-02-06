import { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import WholePageLoading from './WholePageLoading'

const initialState = {
  from_name: '',
  reply_to: '',
  message: '',
}
export const Contact = (props) => {
  const [{ from_name, reply_to, message }, setState] = useState(initialState)
  const [pageLoading, setPageLoading] = useState(false)
  const [responseInfo, setMessageInfo] = useState({
    responseContent:"",
    displayRes:false
  })
  //console.log(name,email,message)

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPageLoading(true)
 
    emailjs
      .sendForm(
        'service_x0vvmsb', 'template_vsts92j', form.current, 'user_PjxH44JxLz46gKwl3Ukli'
      )
      .then(
        (result) => {
          console.log(result.text)
          setState({
            from_name: '',
            reply_to: '',
            message: '',
          })
          setMessageInfo({
            responseContent:"Success! Thanks so much for your email, we will reply soon!",
            displayRes:true

          })

          setTimeout(()=>{
            setPageLoading(false)

            setMessageInfo({
              responseContent:"",
              displayRes:false
  
            })

          }, 3000)
        },
        (error) => {
    
          setMessageInfo({
            responseContent:"Something is wrong, please try later!",
            displayRes:true

          })

          setTimeout(()=>{
            setPageLoading(false)

            setMessageInfo({
              responseContent:"",
              displayRes:false
  
            })

          }, 3000)
        }
      )
  }
  return (
    <div>
    {pageLoading&&
     <WholePageLoading 
     responseInfo={responseInfo}
     />
    }
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' ref={form} onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='from_name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                        value={from_name}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='reply_to'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                        value={reply_to}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2020 Issaaf Kattan React Land Page Template. Design by{' '}
            <a href='http://www.templatewire.com' rel='nofollow'>
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
