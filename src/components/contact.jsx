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
                  想离名校更换进一步？ 想毕业成功高薪就业？想提高未来生活质量？
                  如果想！请联系我们！ 请留下您的微信或者邮箱信息 我们会第一时间帮您答疑。
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
                        placeholder='姓名'
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
                        placeholder='请留下您的微信或者其他联系方式'
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
                    placeholder='任何疑问想问我们？'
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
              
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2020 本网站所有权由成蝶留学所有. 
            {/* Design by{' '}
            <a href='http://www.templatewire.com' rel='nofollow'>
              TemplateWire
            </a> */}
          </p>
        </div>
      </div>
    </div>
  )
}
