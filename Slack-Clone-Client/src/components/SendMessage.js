import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Input, Button, Icon } from 'semantic-ui-react';
import { CREATE_MESSAGE_MUTATION } from '../graphql/message';


export default class sendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  messageOnChangeHandler = (e) => {
    this.setState({ message: e.target.value });
  }

  handleSubmit = async (e, createMessage) => {
    e.preventDefault();
    if (this.state.message.trim().length > 0) {
      if (!(await createMessage())) {
        alert('Error Occurred');
      }
      this.setState({ message: '' });
    }
  };

  /** Handle uploading a file */
  handleChange = async ({ target: { validity, files: [file] } }, createMessage) => {
    if (validity.valid) {
      const response = await createMessage({
        variables: { channelId: this.props.channelId, file },
      });

      if (!response) {
        alert('Error Occurred while submitting message');
      }
    }
  }


  render() {
    const { channelId, channelName } = this.props;
    const { message } = this.state;

    return (
      <Mutation
        variables={{ channelId, text: message }}
        mutation={CREATE_MESSAGE_MUTATION}
      >
        {(createMessage, { loading, error }) => {
          if (loading) return 'error';
          return (
            <form onSubmit={e => this.handleSubmit(e, createMessage)}>
              <div className="sendMessage">
                <div className="file-upload-container">
                  <Button className="upload-button">
                    <Icon name="plus" />
                  </Button>
                  <input
                    type="file"
                    onChange={e => this.handleChange(e, createMessage)}
                  />
                </div>
                <Input
                  placeholder={`Message# ${channelName}`}
                  onChange={this.messageOnChangeHandler}
                  value={message}
                  disabled={loading}
                />
              </div>
            </form>
          );
        }}
      </Mutation>
    );
  }
}
