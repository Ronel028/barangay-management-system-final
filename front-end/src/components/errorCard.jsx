import { Alert } from 'react-bootstrap'

function ErrorCard(props){
    return <Alert 
                variant='danger' className='w-100 rounded-0 mb-0'
                style={{display: props.errorDisplay ? 'block' : 'none'}}
            >
                {props.error}
            </Alert>
}

export default ErrorCard