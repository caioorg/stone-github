import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import User from '@/api/UserApi'
import { Label, Row, Icon } from '@/components/atoms'

import { Wrapper, Container, Image } from './styled'

const Bibliography = ({ ...props }) => {
  const [bibliography, setBibliography] = useState({})
  useEffect(() => {
    User.getBibliographyUser(props.match.params.user).then(e => {
      if (!e.error) setBibliography(e.data)
    })
  }, [props.match.params.user])

  return (
    <Wrapper>
      <Link to="/">
        <Icon id="arrow-left" small />
        Pesquisar Novamente
      </Link>
      <Container>
        {bibliography.avatar_url && (
          <Row>
            <a href={bibliography.html_url} target="_blank" without rel="noopener noreferrer">
              <Image src={bibliography.avatar_url} alt={bibliography.name} />
            </a>
          </Row>
        )}

        {bibliography.name && (
          <Row>
            <Label size={12} weight="bold" color="#000000">
              Name:
            </Label>
            <Label bottom={5} size={14}>
              {bibliography.name}
            </Label>
          </Row>
        )}

        {bibliography.id && (
          <Row>
            <Label bottom={5} size={12} weight="bold" color="#000000">
              Identifier:
            </Label>
            <Label bottom={10} size={14}>
              {bibliography.id}
            </Label>
          </Row>
        )}

        {bibliography.login && (
          <Row>
            <Label bottom={5} size={12} weight="bold" color="#000000">
              Username:
            </Label>
            <Label bottom={10} size={14}>
              {bibliography.login}
            </Label>
          </Row>
        )}

        {bibliography.email && (
          <Row>
            <Label bottom={5} size={12} weight="bold" color="#000000">
              Email:
            </Label>
            <Label bottom={10} size={14}>
              {bibliography.email}
            </Label>
          </Row>
        )}

        {bibliography.location && (
          <Row>
            <Label bottom={5} size={12} weight="bold" color="#000000">
              Location:
            </Label>
            <Label bottom={10} size={14}>
              {bibliography.location}
            </Label>
          </Row>
        )}

        {bibliography.company && (
          <Row>
            <Label bottom={5} size={12} weight="bold" color="#000000">
              Company Current:
            </Label>
            <Label bottom={5} size={14}>
              {bibliography.company}
            </Label>
          </Row>
        )}

        {bibliography.bio && (
          <Row>
            <Label bottom={5} size={12} weight="bold" color="#000000">
              Bibliography:
            </Label>
            <Label bottom={5} size={14}>
              {bibliography.bio}
            </Label>
          </Row>
        )}

        {bibliography.followers !== null && (
          <Row>
            <Label bottom={5} size={12} weight="bold" color="#000000">
              Followers:
            </Label>
            <Label bottom={5} size={14}>
              {bibliography.followers}
            </Label>
          </Row>
        )}

        {bibliography.following !== null && (
          <Row>
            <Label bottom={5} size={12} weight="bold" color="#000000">
              Following:
            </Label>
            <Label bottom={5} size={14}>
              {bibliography.following}
            </Label>
          </Row>
        )}
      </Container>
    </Wrapper>
  )
}

export default withRouter(Bibliography)
