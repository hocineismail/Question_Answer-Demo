import React, { useEffect, useState, Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, RichUtils  } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import PublishIcon from '@material-ui/icons/Publish';
import {  Button } from '@material-ui/core';
import {stateToHTML} from 'draft-js-export-html';
import { useSelector } from "react-redux";
class CustomOption extends Component {
 
    toggleBold = () => {
        
      const { editorState, onChange } = this.props;
      const newState = RichUtils.toggleInlineStyle(
        editorState,
        'BOLD',
      );
      if (newState) {
        onChange(newState);
      }
    };
  
    render() {
      return (
        <Button className="rdw-storybook-custom-option" onClick={this.toggleBold} disabled={true}>
            <PublishIcon /> Upload Image
        </Button>
      );
    }
  }

  
export default function EditorText({title, onChangeEditor}) {
  const { clean_editor, loading } = useSelector(state => state.editorReducers)
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => { 
    onChangeEditor(stateToHTML(editorState.getCurrentContent()))
  }, [editorState]);

  useEffect(() => { 
    if (clean_editor) {
      setEditorState(
        () =>
        EditorState.createEmpty()
  
      )
    }
  }, [clean_editor]);
  const onWriting = (e) => {
    if (!loading) {
      setEditorState(e)
    } 
  }
  return (
    <div style={{marginBottom: 20}}> 
      <h4>{title}</h4>
      <div style={{ border: "1px solid gray", borderRadius: 10, padding: '2px' }}>
        <Editor
          ariaLabel={title}
          editorState={editorState}
          onEditorStateChange={(e) => onWriting(e)}
          toolbarCustomButtons={[<CustomOption />]}
        />
      </div>
    </div>
  );
}