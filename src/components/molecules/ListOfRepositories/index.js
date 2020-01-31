import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import User from '@/api/UserApi'
import { Icon, Label, Row } from '@/components/atoms'
import { Container, Card, Header, HeaderIndicators, HeaderTitle, Content } from './styled'

const ListOfRepositories = ({ ...props }) => {
  const [repo, setRepo] = useState([])
  useEffect(() => {
    User.getUserRepositories(props.match.params.user).then(e => {
      const result = e.data.sort((a, b) => {
        if (a.stargazers_count > b.stargazers_count) return -1
        if (a.stargazers_count < b.stargazers_count) return 1
        return 0
      })
      setRepo(result)
    })
  }, [props.match.params.user])

  return (
    <Container>
      {repo &&
        repo.map(
          ({
            language,
            forks_count,
            stargazers_count,
            watchers_count,
            svn_url,
            name,
            full_name,
            id,
            description
          }) => {
            return (
              <Card href={svn_url} key={id} target="_blank">
                <Header>
                  <HeaderTitle>
                    <Label weight="bold" size={16} display="inline-block">
                      {name && name.replace(/-/g, ' ')}
                    </Label>
                  </HeaderTitle>
                  <HeaderIndicators>
                    <Label display="inline-block">
                      <Icon id="star" small /> ({stargazers_count && stargazers_count})
                    </Label>
                    <Label display="inline-block">
                      <Icon id="eye" small /> ({watchers_count && watchers_count})
                    </Label>
                    <Label display="inline-block">
                      <Icon id="fork" small /> ({forks_count && forks_count})
                    </Label>
                  </HeaderIndicators>
                </Header>
                <Content>
                  <Row>
                    <Label bottom={5} size={12} weight="bold" color="#000000">
                      Full Name Repository:
                    </Label>
                    <Label bottom={10} size={14}>
                      {full_name && full_name}
                    </Label>
                  </Row>
                  <Row>
                    <Label bottom={5} size={12} weight="bold" color="#000000">
                      Language:
                    </Label>
                    <Label bottom={10} size={14}>
                      {language && language}
                    </Label>
                  </Row>
                  <Row>
                    <Label bottom={5} size={12} weight="bold" color="#000000">
                      Description:
                    </Label>
                    <Label bottom={10} size={14}>
                      {description && description}
                    </Label>
                  </Row>
                </Content>
              </Card>
            )
          }
        )}
    </Container>
  )
}

export default withRouter(ListOfRepositories)
