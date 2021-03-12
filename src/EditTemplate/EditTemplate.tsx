import Grid from '@material-ui/core/Grid';
import React, {useContext} from 'react';
import {ElicitationContext} from 'src/ElicitationContext/ElicitationContext';

export default function EditTemplate() {
  const {
    elicitationTemplate,
    setElicitationTemplate,
    id,
    elicitationMethod,
    getDefaultTemplateByType,
    updateTemplateCallback
  } = useContext(ElicitationContext);

  function saveTemplate(newTemplate: string) {
    setElicitationTemplate(newTemplate);
    updateTemplateCallback(newTemplate);
  }

  function updateElicitationTemplate(newTemplate: string) {
    Axios.put(`/api/v1/survey/${id}/elicitationTemplate`, {
      elicitationTemplate: newTemplate
    }).catch((error: AxiosError) => {
      setError(error.message + ', ' + error.response!.data);
    });
  }

  function resetToDefault() {
    saveTemplate(getDefaultTemplateByType(elicitationMethod as TemplateType));
  }

  return (
    <Grid id="edit-elicitation-template-container" container item xs={12}>
      <InlineEditor
        template={elicitationTemplate}
        defaultTemplate={getDefaultTemplateByType(
          elicitationMethod as TemplateType
        )}
        callback={saveTemplate}
        resetCallback={resetToDefault}
      />
    </Grid>
  );
}
