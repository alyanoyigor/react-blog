import { Box, Button, TextField, Typography } from '@mui/material';
import { Modal } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const ModalDefault = Template.bind({});
ModalDefault.args = {
  open: true,
  onClose: () => {},
  children: <h1>Modal</h1>,
};

export const ModalForm = Template.bind({});
ModalForm.args = {
  ...ModalDefault.args,
  children: (
    <>
      <Typography mb={1} textAlign="center" variant="h5" component="h1">
        Modal Title
      </Typography>
      <Box display="flex" flexDirection="column" gap="8px" mb={3}>
        <TextField id="outlined-basic" size="small" label="Field 1" />
        <TextField id="outlined-basic" size="small" label="Field 2" />
        <TextField id="outlined-basic" size="small" label="Field 3" />
      </Box>
      <Box display="flex" gap="4px" justifyContent="flex-end">
        <Button>Cancel</Button>
        <Button variant="contained">Submit</Button>
      </Box>
    </>
  ),
};

export const ModalConfirm = Template.bind({});
ModalConfirm.args = {
  ...ModalDefault.args,
  children: (
    <>
      <Typography mb={1} textAlign="center" variant="h5" component="h1">
        Modal Title
      </Typography>
      <Typography mb={3} textAlign="center" variant="body1" component="p">
        Do you really want to do this action?
      </Typography>
      <Box display="flex" gap="4px" justifyContent="flex-end">
        <Button>Cancel</Button>
        <Button variant="contained">Confirm</Button>
      </Box>
    </>
  ),
};
