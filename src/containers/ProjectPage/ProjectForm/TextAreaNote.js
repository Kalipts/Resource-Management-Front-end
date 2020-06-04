import React from 'react';
import PropTypes from 'prop-types';

import {
  WrapperNote,
  SelectItem,
  InputNote,
  Alert,
} from '../Style/ProjectForm';

const TextAreaNote = React.memo(function TextAreaNote(props) {
  const { err, notes, onChangeNote } = props;

  return (
    <WrapperNote>
      <div>Notes</div>
      <SelectItem>
        {(notes === '' || notes === undefined) && (
          <Alert name="true">{err}</Alert>
        )}
        <InputNote defaultValue={notes} onChange={onChangeNote} />
      </SelectItem>
    </WrapperNote>
  );
});

TextAreaNote.propTypes = {
  onChangeNote: PropTypes.func,
  notes: PropTypes.string,
  err: PropTypes.string,
};

export default TextAreaNote;
