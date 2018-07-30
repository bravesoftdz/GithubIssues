import React, { Component } from 'react';
import moment from 'moment';
import { PulseLoader } from 'react-loaders-spinners';
import api from '../../services/api';

import {
  Container, Form, Sidebar, ContentContainer,
} from './styles';
import RepositoryList from '../../components/RepositoryList';
import { Repository } from '../../components/RepositoryList/styles';
import IssueList from '../../components/IssueList';

export default class Main extends Component {
  state = {
    loading: false,
    loadingIssues: false,
    repositoryInput: '',
    repositories: [],
    issues: [],
    repositoryError: false,
    issueError: false,
    selectedRepository: {
      owner: {},
    },
    filterIssues: 'all',
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    const { repositories, repositoryInput } = this.state;

    this.setState({
      loading: true,
    });

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false,
      });
    } catch (err) {
      this.setState({
        repositoryError: true,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  handleClickRepository = (repository) => {
    const { selectedRepository } = this.state;
    if (repository.id !== selectedRepository.id) {
      this.setState(
        {
          selectedRepository: repository,
        },
        this.requestIssues,
      );
    }
  };

  requestIssues = async () => {
    const { selectedRepository } = this.state;
    try {
      const { filterIssues } = this.state;
      this.setState({
        issues: [],
        loadingIssues: true,
        issueError: false,
      });
      const response = await api.get(
        `repos/${selectedRepository.full_name}/issues?state=${filterIssues}`,
      );
      this.setState({
        issues: response.data,
      });
    } catch (error) {
      this.setState({
        issueError: true,
      });
    } finally {
      this.setState({
        loadingIssues: false,
      });
    }
  };

  render() {
    const {
      repositories,
      issues,
      repositoryInput,
      repositoryError,
      loading,
      selectedRepository,
      filterIssues,
      loadingIssues,
      issueError,
    } = this.state;
    return (
      <Container>
        <Sidebar>
          <Form withError={repositoryError} onSubmit={this.handleAddRepository} action="">
            <input
              type="text"
              placeholder="usuário/repositório"
              value={repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
            />
            <button type="submit">
              {loading ? (
                <i className="fa fa-spinner fa-pulse" />
              ) : (
                <i className="fa fa-plus-circle" />
              )}
            </button>
          </Form>
          <div style={{ marginTop: '25px', height: '1px', backgroundColor: '#e5e5e5' }} />
          <RepositoryList
            clickRepository={this.handleClickRepository}
            repositories={repositories}
          />
        </Sidebar>
        <ContentContainer>
          <header>
            <Repository>
              <img src={selectedRepository.owner.avatar_url} alt={selectedRepository.owner.login} />
              <div className="infos">
                <strong>
                  {selectedRepository.name}
                </strong>
                <small>
                  {selectedRepository.owner.login}
                </small>
              </div>
            </Repository>

            <form className="filter" action="">
              <select
                name="issueStatus"
                id="issueStatus"
                value={filterIssues}
                onChange={(e) => {
                  this.setState(
                    {
                      filterIssues: e.target.value,
                    },
                    this.requestIssues,
                  );
                }}
              >
                <option value="all">
Todas
                </option>
                <option value="open">
Abertas
                </option>
                <option value="closed">
Fechadas
                </option>
              </select>
            </form>
          </header>
          {issueError && (
            <div className="text-error">
              Houve um problema ao tentar carregar os Issues deste repositório, por favor, tente
              mais tarde.
            </div>
          )}
          {!loadingIssues ? (
            <IssueList issues={issues} />
          ) : (
            <div className="loading-issues">
              <PulseLoader pColor="gray" sColor="#b286d1" />
            </div>
          )}
        </ContentContainer>
      </Container>
    );
  }
}
