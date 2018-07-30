import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

const RepositoryList = ({ repositories, clickRepository }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id} onClick={() => clickRepository(repository)}>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <div className="infos">
          <strong>
            {repository.name}
          </strong>
          <small>
            {repository.owner.login}
          </small>
        </div>
        <div className="icon">
          <i className="fa fa-chevron-right" />
        </div>
      </Repository>
    ))}
  </Container>
);

RepositoryList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.login,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ),
  clickRepository: PropTypes.func,
};

RepositoryList.defaultProps = {
  repositories: [
    {
      id: 1,
      name: 'facebook',
      owner: {
        login: 'facebook',
        avatar_url: 'http://via.placeholder.com/64x64',
      },
      stargazers_count: 10092,
      forks_count: 2000,
      open_issues_count: 12312445,
      pushed_at: '2018-7-08T08:20:00Z',
    },
  ],
  clickRepository: () => {},
};

export default RepositoryList;
