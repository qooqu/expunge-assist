import React from 'react';

import Header from './Header'
import Form from './Form'
import Landing from './pages/Landing';

import { Wrapper, FormWrapper } from '../styles/PersonalStatementContainer'

interface PersonalStatementProps {
  history: {
    location: {
      pathname: string
    }, 
    push: (address: string) => void
  },
  match: {
    params: {
      page: string
    }
  }
}

const PersonalStatement: React.FC<PersonalStatementProps> = ({ history, match }) => {
  let pageNumber: number = Number(match.params.page);
  let background: string;
  if (isNaN(pageNumber)) pageNumber = 0;
  
  const handleClick = () => {
    console.log('click')
    history.push('/form/1')
  }

  pageNumber === 0 ? background='#9903ff' : background='white';

  return (
    <Wrapper background={background} className="PersonalStatementContainer">
      <Header pageNumber={pageNumber} />
      <FormWrapper>
        { pageNumber === 0 ? <Landing handleClick={handleClick}/>
         : 
        <Form pageNumber={pageNumber} handleClick={handleClick} /> }
      </FormWrapper>
    </Wrapper>
  )
}

export default PersonalStatement