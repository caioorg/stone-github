import React, { useState, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { notify } from 'react-notify-toast'
import { Input, Icon, Loader } from '@/components/atoms'
import { appMessages } from '@/helpers'
import User from '@/api/UserApi'
import { Container, FormWrapper, Button } from './styled'

export const SearchUser = ({ ...props }) => {
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const renderNotify = message => {
    return notify.show(message, 'custom', 5000, {
      background: '#bb2939',
      text: '#FFFFFF'
    })
  }

  const onHandleChange = e => {
    e.preventDefault()
    setIsLoading(true)

    if (search === '') {
      setIsLoading(false)
      return renderNotify(appMessages.search['user-empty'])
    }

    User.getUser(search)
      .then(e => {
        if (e.error || (e.message && e.message.request.status === 404)) {
          setIsLoading(false)
          return renderNotify(appMessages.search['user-not-found'])
        }
        if (!e.error && Object.keys(e.data).length > 0) {
          setIsLoading(false)
          return props.history.push(`/user/${e.data.login}/repository`)
        }
      })
      .catch(e => {
        setIsLoading(false)
        return renderNotify(appMessages.system.error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <Fragment>
      {isLoading && <Loader />}
      <Container>
        <FormWrapper onSubmit={e => onHandleChange(e)}>
          <Input onChange={e => setSearch(e)} placeholder={appMessages.search.placeholder} />
          <Button title="Search User" onClick={e => onHandleChange(e)}>
            <Icon id="search" small />
          </Button>
        </FormWrapper>
      </Container>
    </Fragment>
  )
}

export default withRouter(SearchUser)
