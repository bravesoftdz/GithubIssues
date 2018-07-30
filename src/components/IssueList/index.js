import React from 'react';
import PropTypes from 'prop-types';

import { Container, Issue } from './styles';
import { textTruncate } from '../../utils/textTruncate';

const IssueList = ({ issues }) => (
  <Container>
    {issues.map(issue => (
      <Issue key={issue.id}>
        <div>
          <img src={issue.user.avatar_url} alt={issue.user.login} />
        </div>
        <div className="info-issue">
          <strong>
            {textTruncate(issue.title, 30)}
          </strong>
          <small>
            {issue.user.login}
          </small>
          <a href={issue.html_url} rel="noopener noreferrer" target="_blank">
            <button type="button">
              <i className="fas fa-external-link-alt" />
              {' '}
ABRIR ISSUE
            </button>
          </a>
        </div>
      </Issue>
    ))}
  </Container>
);

IssueList.propTypes = {
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      user: PropTypes.shape({
        login: PropTypes.login,
        avatar_url: PropTypes.string,
      }),
      html_url: PropTypes.string,
    }),
  ),
};

IssueList.defaultProps = {
  issues: [],
};

export default IssueList;
