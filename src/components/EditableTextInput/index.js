import {Component} from 'react'

import {
  BackgroundContainer,
  TextCard,
  Heading,
  EditableTextCard,
  InputCard,
  Text,
  TextCardButton,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {text: '', isSave: false}

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  onClickSave = () => {
    this.setState(prevState => ({isSave: !prevState.isSave}))
  }

  render() {
    const {text, isSave} = this.state
    return (
      <BackgroundContainer>
        <TextCard>
          <Heading>Editable Text Input</Heading>
          <EditableTextCard>
            {isSave ? (
              <>
                <Text>{text}</Text>
                <TextCardButton onClick={this.onClickSave}>Edit</TextCardButton>
              </>
            ) : (
              <>
                <InputCard
                  type="text"
                  value={text}
                  onChange={this.onChangeText}
                />
                <TextCardButton onClick={this.onClickSave}>Save</TextCardButton>
              </>
            )}
          </EditableTextCard>
        </TextCard>
      </BackgroundContainer>
    )
  }
}

export default EditableTextInput
